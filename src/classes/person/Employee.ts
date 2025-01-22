import Person from './Person';

export default class Employee extends Person {
  private _roomId: string = '';

  constructor() {
    super({ role: 'employee' });
  }

  get roomId(): string {
    return this._roomId;
  }
}
