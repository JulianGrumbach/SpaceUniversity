import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/Vuex';
import '@/registerServiceWorker';
import vuetify from '@/plugins/vuetify';

import VueCompositionAPI from '@vue/composition-api';
//import VueZoomer from 'vue-zoomer';
//import FlagIcon from 'vue-flag-icon';
var VueZoomer = require('vue-zoomer');
var FlagIcon = require('vue-flag-icon');
Vue.use(VueCompositionAPI);
Vue.use(VueZoomer);
Vue.use(FlagIcon);

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
