import { PersistentStore } from './persistent-store';

interface Counter extends Object {
  count: number;
}

class CounterStore extends PersistentStore<Counter> {
  protected data(): Counter {
    return {
      count: 0,
    };
  }

  get count() {
    return this.state.count;
  }

  increment() {
    this.state.count++;
  }

  decrement() {
    this.state.count--;
  }
}

export const counterStore = new CounterStore('COUNTER_STORE');
