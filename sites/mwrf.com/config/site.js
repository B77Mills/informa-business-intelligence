const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e96005aa56e86643fc3a',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'markets/defense', name: 'Defense' },
    { alias: 'technologies/components', name: 'Components' },
    { alias: 'technologies/systems', name: 'Systems' },
  ],
  logos: {
    navbar: {
      src: 'https://img.mwrf.com/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=30',
      srcset: [
        'https://img.mwrf.com/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.mwrf.com/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=45',
      srcset: [
        'https://img.mwrf.com/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/microwavesrf/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MicrowavesRF', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3848060/profile', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'mwrf.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-57VWSC8',
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
