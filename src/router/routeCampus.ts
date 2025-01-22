const routeCampus = [
  {
    path: 'map',
    name: 'map',
    components: {
      default: () => import('@/components/campus/Map.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Campus', to: '/campus' },
        { text: 'Map', to: '/campus/map' },
      ],
    },
  },
];

export default routeCampus;
