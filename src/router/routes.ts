type Routes = Record<string, { to: string, title: string, icon: string }[]>

const routes: Routes = {
  about: [
    /*
    {
      title: '$vuetify.aboutVuePochta.name',
      to: '/about/pochta',
      icon: 'fa-solid fa-archway',
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
    },*/
    {
      title : '$vuetify.aboutBugTracker.name',
      to: '/about/bugtracker',
      icon: 'fa-solid fa-bug',
    },
    {
      title: '$vuetify.aboutFAQ.name',
      to: '/about/faq',
      icon: 'fa-solid fa-circle-question',
    },
    {
      title : '$vuetify.aboutTutorial.name',
      to: '/about/tutorial',
      icon: 'fa-solid fa-circle-info',
    },
    {
      title : '$vuetify.aboutLogin.name',
      to: '/about/login',
      icon: 'fa-solid fa-right-to-bracket',
    },
  ],
  campus: [
    {
      title: '$vuetify.campus.map.name',
      to: '/campus/map',
      icon: 'fa-solid fa-map',
    },
  ],/*
  playground: [
    {
      title: '$vuetify.playground.counter.name',
      to: '/playground/counter',
      icon: 'fa-solid fa-calculator',
    },
    {
      title: '$vuetify.playground.hero.name',
      to: '/playground/hero',
      icon: 'fa-solid fa-user-ninja',
    },
    {
      title: '$vuetify.playground.poll.name',
      to: '/playground/poll',
      icon: 'fa-solid fa-poll',
    },
  ],*/
  study: [
    {
      title: '$vuetify.study.courses.name',
      to: '/study/courses',
      icon: 'fa-solid fa-book-open',
    },
    {
      title: '$vuetify.study.timetable.name',
      to: '/study/timetable',
      icon: 'fa-solid fa-calendar-alt',
    }
  ],
};

export default routes;
