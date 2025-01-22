import { Database } from './database';

interface Event {
  attendeeIds?: string[];
  coordinatorIds?: string[];
  dates?: string[];
  deleted?: boolean;
  description?: string;
  duration?: string;
  id: string;
  img?: string;
  moduleId?: string;
  public?: boolean;
  roomId?: string;
  title: string;
  type: string;
}

class EventStore extends Database {
  constructor(options: any = {}) {
    super('EVENT_STORE', options);
  }

  init(): void {
    this.add({
      duration: '2:00',
      dates: [
        '2020-11-02 10:00',
        '2020-11-09 10:00',
        '2020-11-16 10:00',
        '2020-11-23 10:00',
        '2020-11-30 10:00',
        '2020-12-07 10:00',
        '2020-12-14 10:00',
        '2020-12-21 10:00',
        '2021-01-04 10:00',
        '2021-01-11 10:00',
        '2021-01-18 10:00',
        '2021-01-25 10:00',
        '2021-02-01 10:00',
        '2021-02-08 10:00',
      ],
      description: 'It starts every Monday at 10am.',
      id: '14803223',
      img: 'hci.jpg',
      public: true,
      title: 'Human-Computer Interaction',
      type: 'lecture',
    });
    this.add({
      duration: '2:00',
      dates: [
        '2020-11-05 14:00',
        '2020-11-12 14:00',
        '2020-11-19 14:00',
        '2020-11-26 14:00',
        '2020-12-03 14:00',
        '2020-12-10 14:00',
        '2020-12-17 14:00',
        '2021-01-07 14:00',
        '2021-01-14 14:00',
        '2021-01-21 14:00',
        '2021-01-28 14:00',
        '2021-02-04 14:00',
        '2021-02-11 14:00',
      ],
      description: 'It starts every Thursday at 2pm.',
      id: '14803224',
      img: 'hci.jpg',
      public: true,
      title: 'Human-Computer Interaction',
      type: 'training',
    });
    this.add({
      duration: '2:00',
      dates: [
        '2020-11-05 8:00',
        '2020-11-12 8:00',
        '2020-11-19 8:00',
        '2020-11-26 8:00',
        '2020-12-03 8:00',
        '2020-12-10 8:00',
        '2020-12-17 8:00',
        '2021-01-07 8:00',
        '2021-01-14 8:00',
        '2021-01-21 8:00',
        '2021-01-28 8:00',
        '2021-02-04 8:00',
        '2021-02-11 8:00',
      ],
      description: 'It starts every Thursday at 8am.',
      id: '14502894',
      img: 'web_development.jpg',
      public: true,
      title: 'Web Development',
      type: 'lecture',
    });
  }

  add(event: Event): any {
    if (event.id === undefined) {
      event.id = JSON.stringify(Math.ceil(Math.random() * 100000 + 100000));
    }
    if (event.dates === undefined) {
      event.dates = [];
    }
    return this.createIfNotExisted(event);
  }
}

export const eventStore = new EventStore();
