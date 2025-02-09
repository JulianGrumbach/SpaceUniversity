const routes = {
  about: [
    {
      title: '$vuetify.aboutVuePochta.name',
      to: '/about/pochta',
      icon: 'fa-archway',
    },
    {
      title: '$vuetify.aboutVue.name',
      to: '/about/vue',
      icon: 'fab fa-vuejs',
    },
    {
      title: '$vuetify.aboutVuetify.name',
      to: '/about/vuetify',
      icon: 'fab fa-vine',
    },
  ],
  campus: [
    {
      title: '$vuetify.campus.map.name',
      to: '/campus/map',
      icon: 'fa-map',
    },
  ],
  playground: [
    {
      title: '$vuetify.playground.counter.name',
      to: '/playground/counter',
      icon: 'fa-calculator',
    },
    {
      title: '$vuetify.playground.hero.name',
      to: '/playground/hero',
      icon: 'fa-user-ninja',
    },
    {
      title: '$vuetify.playground.poll.name',
      to: '/playground/poll',
      icon: 'fa-poll',
    },
  ],
  study: [
    {
      title: '$vuetify.study.courses.name',
      to: '/study/courses',
      icon: 'fa-book-open',
    },
    {
      title: '$vuetify.study.timetable.name', // Add this section
      to: '/study/timetable',
      icon: 'fa-calendar-alt',
    },
  ],
};

export default routes;
