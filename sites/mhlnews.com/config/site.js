const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e93805aa563dd443fc39',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'transportation-distribution', name: 'Transportation & Distribution' },
    { alias: 'global-supply-chain', name: 'Global Supply Chain' },
    { alias: 'labor-management', name: 'Labor Management' },
  ],
  logos: {
    navbar: {
      src: 'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=30',
      srcset: [
        'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=45',
      srcset: [
        'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/MaterialHandlingLogistics', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MHLeditor', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2003884', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCTO3PUFzLZbmdcva2Lq_bAQ', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'mhl.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-TDLXZDD',
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
