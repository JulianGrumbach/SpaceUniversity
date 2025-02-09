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
  {
    path: 'timetable',
    name: 'timetable',
    components: {
      default: () => import('@/components/study/Timetable.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Study', to: '/study' },
        { text: 'Timetable', to: '/study/timetable' },
      ],
    },
  }
];

export default routeStudy;
