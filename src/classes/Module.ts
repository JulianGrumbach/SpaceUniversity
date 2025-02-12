export default class Module {
  private _eventIds: string[] = [];
  private _id: string = '';
  private _organisationIds: string[] = [];

  constructor() {}

  get eventIds(): string[] {
    return this._eventIds;
  }

  get id(): string {
    return this._id;
  }

  get organisationIds(): string[] {
    return this._organisationIds;
  }
}
