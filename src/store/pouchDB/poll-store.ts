import { Database } from './database';

interface Answer {
  text: string;
  votes: number;
}

interface Poll {
  answers: Answer[];
  id: number;
  multipleAnswers?: boolean;
  question: any;
}

class PollStore extends Database {
  constructor(options: any = {}) {
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

  add(poll: Poll): any {
    return this.createIfNotExisted(poll, 'id');
  }
}

export const pollStore = new PollStore();
