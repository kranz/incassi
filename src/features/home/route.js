import {
  DefaultPage,
  Persone,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'persone', name: 'Persone', component: Persone },
  ],
};
