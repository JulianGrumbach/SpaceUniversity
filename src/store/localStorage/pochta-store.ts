import { PersistentStore } from './persistent-store';

interface Pochta extends Object {
  eventIds: string[];
  event: any;
  moduleIds: string[];
  module: any;
  role: any;
}

class PochtaStore extends PersistentStore<Pochta> {
  protected data(): Pochta {
    return {
      eventIds: [],
      event: {},
      module: {},
      moduleIds: [],
      role: {
        name: 'student',
        icon: 'fa-user-undergraduate',
      },
    };
  }

  get event(): any {
    return this.state.event;
  }

  get eventIds(): string[] {
    return this.state.eventIds;
  }

  get module(): any {
    return this.state.module;
  }

  get role(): any {
    return this.state.role;
  }

  iam(role: any): void {
    this.state.role = role;
  }

  register(id: string): void {
    this.state.eventIds.push(id);
  }

  unregister(id: string): void {
    this.state.eventIds = this.state.eventIds.filter(eventId => eventId != id);
  }

  registerModule(id: string): void {
    this.state.moduleIds.push(id);
  }

  unregisterModule(id: string): void {
    this.state.moduleIds = this.state.eventIds.filter(
      moduleId => moduleId != id
    );
  }
}

export const pochtaStore = new PochtaStore('POCHTA_STORE');
