const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e8a105aa56609143fc34',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'forming', name: 'Forming' },
    { alias: 'heating', name: 'Heating' },
    { alias: 'simulation-it', name: 'Simulation/IT' },
  ],
  logos: {
    navbar: {
      src: 'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=30',
      srcset: [
        'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=45',
      srcset: [
        'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ForgingMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ForgingMag', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'forging.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-MCQ2JVM',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
