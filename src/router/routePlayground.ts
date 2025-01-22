const routePlayground = [
  {
    path: 'counter',
    name: 'counter',
    components: {
      default: () => import('@/components/playground/Counter.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Playground', to: '/playground' },
        { text: 'Counter', to: '/playground/counter' },
      ],
    },
  },
  {
    path: 'hero',
    name: 'heroList',
    components: {
      default: () => import('@/components/playground/Hero.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Playground', to: '/playground' },
        { text: 'Hero', to: '/playground/hero' },
      ],
    },
  },
  {
    path: 'hero/:id',
    name: 'heroDetails',
    components: {
      default: () => import('@/components/playground/Hero.vue'),
    },
    props: {
      default: true,
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Playground', to: '/playground' },
        { text: 'Hero', to: '/playground/hero', exact: true },
        { text: '' },
      ],
    },
  },
  {
    path: 'poll',
    name: 'poll',
    components: {
      default: () => import('@/components/playground/Poll.vue'),
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Playground', to: '/playground' },
        { text: 'Poll', to: '/playground/poll', exact: true },
      ],
    },
  },
  {
    path: 'poll/:id',
    name: 'pollDetails',
    components: {
      default: () => import('@/components/playground/poll/PollDetails.vue'),
    },
    props: {
      default: true,
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Playground', to: '/playground' },
        { text: 'Poll', to: '/playground/poll', exact: true },
        { text: '' },
      ],
    },
  },
  {
    path: 'poll/:id/edit',
    name: 'pollEdit',
    components: {
      default: () => import('@/components/playground/poll/PollEdit.vue'),
    },
    props: {
      default: true,
    },
    meta: {
      breadcrumbs: [
        { text: 'Home', to: '/' },
        { text: 'Playground', to: '/playground' },
        { text: 'Poll', to: '/playground/poll', exact: true },
        { text: '' },
      ],
    },
  },
];

export default routePlayground;
