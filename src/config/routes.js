const routes = {
  home: '/',
  terms: '/pages/terms',

  // Erthos
  studio: '/pages/studio',
  process: '/pages/process',
  founder: '/pages/founder',

  // Contact
  contact: '/pages/contact',

  // Collections
  collections: {
    all: '/collections/all',
    organic: '/collections/organic',
    geometric: '/collections/geometric',
    planters: '/collections/planters',
    vanes: '/collections/vanes',
    accessories: '/collections/accessories',
  },

  // Journal
  journal: '/blogs/journal',
  journalDetails: '/blogs/journal/:journalId',


  // Account
  login: 'account/login',
  register: 'account/register',

  // Products
  vayu: '/collections/all/products/vayu',

  // Cart
  cart: '/cart',
  checkouts: '/checkouts'
};

export default routes;
