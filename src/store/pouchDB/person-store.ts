import { Database } from './database';

interface Person {
  img?: string;
  mail: string;
  name: string;
  phone?: string;
  projects?: string[];
  role: string;
  room?: string;
  shortBio?: string;
  title?: string;
}

class PersonStore extends Database {
  constructor(options: any = {}) {
    super('PERSON_STORE', options);
  }

  init(): void {
    this.add({
      //img: '',
      mail: 'jdoe[at]space-university.edu',
      name: 'John Doe',
      phone: '(0)123 456-7890',
      projects: ['Space Travels'],
      role: 'employee',
      room: 'A 537',
      shortBio: '',
      title: 'Ph.D.',
    });
    this.add({
      // img: '',
      mail: 'doe[at]space-university.edu',
      name: 'Jane Doe',
      phone: '(0)123 456-7891',
      projects: ['Space Travel', 'Space Exploration EA-67347'],
      role: 'employee',
      room: 'A 541',
      shortBio: '',
      title: 'Prof.',
    });
    this.add({
      mail: 'smith[at]space-university.edu',
      name: 'John Smith',
      phone: '(0)123 456-7891',
      projects: [''],
      role: 'employee',
      room: 'A 539',
      shortBio: '',
      title: 'B.Sc.',
    });
  }

  add(person: Person): void {
    this.createIfNotExisted(person, 'name');
  }
}

export const personStore = new PersonStore();
