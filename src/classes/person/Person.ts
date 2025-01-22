export default class Person {
  private _address: string = '';
  private _birthday: Date = new Date();
  private _firstname: string = '';
  private _gender: string = '';
  private _id: string = '';
  private _lastname: string = '';
  private _mail: string = '';
  private _nationality: string = '';
  private _role: string;

  constructor(data: any) {
    this._role = data.role || 'person';
  }

  get address(): string {
    return this._address;
  }

  get birthday(): Date {
    return this._birthday;
  }

  get firstname(): string {
    return this._firstname;
  }

  get gender(): string {
    return this._gender;
  }

  get id(): string {
    return this._id;
  }

  get lastname(): string {
    return this._lastname;
  }

  get mail(): string {
    return this._mail;
  }

  get nationality(): string {
    return this._nationality;
  }

  get role(): string {
    return this._role;
  }
}
