export default class Event {
  private _attendeeIds: string[] = [];
  private _coordinatorIds: string[] = [];
  private _dates: Date[] = [];
  private _id: string = '';
  private _registerDeadline: Date = new Date();
  private _roomId: string = '';
  private _type: string = '';

  constructor(data: any) {
    this._type = data.type || 'event';
  }

  get id(): string {
    return this._id;
  }

  get roomId(): string {
    return this._roomId;
  }

  get type(): string {
    return this._type;
  }

  addCoordinator(id: string): void {
    this._coordinatorIds.push(id);
  }

  getAttendeeList(): string[] {
    return this._attendeeIds;
  }

  getCoordinatorList(): string[] {
    return this._coordinatorIds;
  }

  joinAttendee(id: string): void {
    this._attendeeIds.push(id);
  }
}
