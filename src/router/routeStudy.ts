const routeStudy = [
  {
    path: 'courses',
    name: 'courses',
    components: {
      default: () => import('@/components/study/Courses.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Study', to: '/study' },
        { text: 'Courses', to: '/study/courses' },
      ],
    },
  },
];

export default routeStudy;
