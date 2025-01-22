import Vue from 'vue';
import Router from 'vue-router';

import routeAbout from '@/router/routeAbout';
import routePlayground from '@/router/routePlayground';
import routeStudy from '@/router/routeStudy';
import routeCampus from '@/router/routeCampus';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      children: routeAbout,
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('@/views/Playground.vue'),
      children: routePlayground,
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('@/views/Study.vue'),
      children: routeStudy,
    },
    {
      path: '/campus',
      name: 'campus',
      component: () => import('@/views/Campus.vue'),
      children: routeCampus,
    },
  ],
});
