require('./nr');
const http = require('http');
const { createTerminus } = require('@godaddy/terminus');
const app = require('./app');
const env = require('./env');
const services = require('./services');
const pkg = require('./package.json');
const newrelic = require('./nr');

const { log } = console;
const { INTERNAL_PORT, EXTERNAL_PORT } = env;
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.json({ ping: 'pong' });
});

const run = async () => {
  await services.start();

  createTerminus(server, {
    timeout: 1000,
    signals: ['SIGTERM', 'SIGINT', 'SIGHUP', 'SIGQUIT'],
    healthChecks: { '/_health': () => services.ping() },
    onSignal: () => {
      log('> Cleaning up...');
      return services.stop().catch(e => log('> CLEANUP ERRORS:', e));
    },
    onShutdown: () => log('> Cleanup finished. Shutting down.'),
  });

  server.listen(INTERNAL_PORT, () => log(`> Ready on http://0.0.0.0:${EXTERNAL_PORT}`));
};

process.on('unhandledRejection', (e) => {
  log('> Unhandled promise rejection. Throwing error...');
  newrelic.noticeError(e);
  throw e;
});

log(`> Booting ${pkg.name} v${pkg.version}...`);
run().catch(e => setImmediate(() => {
  newrelic.noticeError(e);
  throw e;
}));
