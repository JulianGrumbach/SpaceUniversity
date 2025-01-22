export default class Room {
  private _eventIds: string[] = [];
  private _id: string = '';
  private _location: string = '';
  private _seats: number = 0;
  private _type: string = ''; // lecture, seminar, lab

  constructor() {}

  get id(): string {
    return this._id;
  }

  get location(): string {
    return this._location;
  }

  get seats(): number {
    return this._seats;
  }

  get eventIds(): string[] {
    return this._eventIds;
  }

  get type(): string {
    return this._type;
  }
}
