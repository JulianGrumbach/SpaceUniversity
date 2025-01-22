import { eventStore } from '@/store/pouchDB/event-store';
import { heroStore } from '@/store/pouchDB/hero-store';
import { personStore } from '@/store/pouchDB/person-store';
import { pollStore } from '@/store/pouchDB/poll-store';

const init = () => {
  eventStore.init();
  heroStore.init();
  personStore.init();
  pollStore.init();
};

export default { init };
