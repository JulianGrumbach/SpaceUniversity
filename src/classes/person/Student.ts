import Person from './Person';

export default class Student extends Person {
  private _attendedModuleIds: string[] = [];

  constructor() {
    super({ role: 'student' });
  }

  get attendedModuleIds(): string[] {
    return this._attendedModuleIds;
  }
}
