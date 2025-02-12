import { Database } from './database';

interface Answer {
  text: string;
  votes: number;
}

interface Poll {
  answers: Answer[];
  id: number;
  multipleAnswers?: boolean;
  question: string;
}

class PollStore extends Database {
  constructor(options: PouchDB.Configuration.DatabaseConfiguration = {}) {
    super('POLL_STORE', options);
  }

  init(): void {
    this.add({
      id: 1,
      question: 'What do we eat today?',
      multipleAnswers: true,
      answers: [
        { text: 'Pizza', votes: 0 },
        { text: 'Sushi', votes: 0 },
        { text: 'Doener', votes: 0 },
      ],
    });
    this.add({
      id: 2,
      question: 'Will Covid-19 be vanished?',
      answers: [
        { text: 'hell, yes', votes: 0 },
        { text: 'noooo', votes: 0 },
      ],
    });
  }

  add(poll: Poll): Promise<void> {
    return this.createIfNotExisted(poll, 'id');
  }
}

export const pollStore = new PollStore();
