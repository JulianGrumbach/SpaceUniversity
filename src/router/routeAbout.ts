const routeAbout = [
  {
    path: 'pochta',
    name: 'aboutPochta',
    components: {
      default: () => import('@/components/about/AboutPochta.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Pochta', to: '/about/pochta' },
      ],
    },
  },
  {
    path: 'vue',
    name: 'aboutVue',
    components: {
      default: () => import('@/components/about/AboutVue.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Vue', to: '/about/vue' },
      ],
    },
  },
  {
    path: 'vuetify',
    name: 'about Vuetify',
    components: {
      default: () => import('@/components/about/AboutVuetify.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Vuetify', to: '/about/vuetify' },
      ],
    },
  },
];

export default routeAbout;
