import { eventStore } from '@/stores/pouchDB/event-store';
import { heroStore } from '@/stores/pouchDB/hero-store';
import { personStore } from '@/stores/pouchDB/person-store';
import { pollStore } from '@/stores/pouchDB/poll-store';

const init = () => {
  eventStore.init();
  heroStore.init();
  personStore.init();
  pollStore.init();
};

export default { init };
