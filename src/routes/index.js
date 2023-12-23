import config from '../config';
import Founder from '../Pages/Erthos/Founder';
import Process from '../Pages/Erthos/Process';
import Studio from '../Pages/Erthos/Studio';

import Home from '../Pages/Home/Home';
import Journal from '../Pages/Journal/Journal';
import Terms from '../Pages/Terms/Terms';

import Contact from '../Pages/Contact/Contact';

import All from '../Pages/Collections/All';
import Organic from '../Pages/Collections/Organic';
import Geometric from '../Pages/Collections/Geometric';
import Planters from '../Pages/Function/Planters';
import Vases from '../Pages/Function/Vases';
import Accessories from '../Pages/Function/Accessories';

import Login from '../Pages/Account/Login';

import Vayu from '../Pages/Products/Vayu';
import Register from '../Pages/Account/Register';
import Checkouts from '../Pages/Cart/Checkouts';
import Cart from '../Pages/Cart/Cart';
import JournalDetails from '../Pages/Journal/JournalDetails';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },

  // Ethos
  { path: config.routes.studio, component: Studio },
  { path: config.routes.process, component: Process },
  { path: config.routes.founder, component: Founder },

  // Contact
  { path: config.routes.contact, component: Contact },

  // Terms
  { path: config.routes.terms, component: Terms },

  // Collections
  { path: config.routes.collections.all, component: All },
  { path: config.routes.collections.organic, component: Organic },
  { path: config.routes.collections.geometric, component: Geometric },
  { path: config.routes.collections.planters, component: Planters },
  { path: config.routes.collections.vanes, component: Vases },
  { path: config.routes.collections.accessories, component: Accessories },

  // Journal
  { path: config.routes.journal, component: Journal },
  { path: config.routes.journalDetails, component: JournalDetails },

  // Products
  { path: config.routes.vayu, component: Vayu },

  // Account
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },

  // Checkouts
  { path: config.routes.cart, component: Cart },
  { path: config.routes.checkouts, component: Checkouts, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
