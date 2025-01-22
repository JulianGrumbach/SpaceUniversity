import PouchDB from 'pouchdb';

export class Database {
  private _db: any;
  private _ready = false;

  constructor(url: string, options: any = {}) {
    this._db = new PouchDB(url, options);
    this._ready = true;
  }

  get db() {
    return this._db;
  }

  get ready(): boolean {
    return this._ready;
  }

  destroy(): Promise<any> {
    return this._db.destroy();
  }

  count(): any {
    return this._db
      .allDocs()
      .then((result: any) => result.total_rows)
      .catch((err: any) => err);
  }

  list(sortedBy: string = '', reverse: boolean = false): any {
    return this._db
      .allDocs({ include_docs: true })
      .then((res: any) => {
        const docs: any[] = res.rows.map((row: any) => row.doc);
        if (sortedBy) {
          docs.sort((a: any, b: any) => {
            if (typeof a[sortedBy] === 'number') {
              return a[sortedBy] > b[sortedBy];
            } else {
              return a[sortedBy].localeCompare(b[sortedBy]);
            }
          });
        }
        if (reverse) {
          docs.reverse();
        }
        return docs;
      })
      .catch((err: any) => err);
  }

  // CRUD - Create, Read, Update, Delete

  create(data: any): any {
    // console.log('Create doc in db');
    data.createdAt = new Date();
    return this._db
      .post(data)
      .then((res: any) => {
        data._id = res.id;
        data.updatedAt = undefined;
      })
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  createIfNotExisted(data: any, key: string = 'id'): any {
    return this.list().then((docs: any[]) => {
      const values: string[] = docs.map((doc: any) => doc[key]);
      if (!values.includes(data[key])) {
        return this.create(data);
      }
      // else {
      //   console.log(`${hero.name} existed`);
      //   const existed = heroes[heroNames.indexOf(hero.name)];
      //   Object.apply(existed, hero);
      //   console.log(existed)
      //   this.update(existed);
      // }
    });
  }

  read(id: string, options: any = {}): any {
    // console.log('Read doc in db');
    return this._db
      .get(id, options)
      .then((doc: any) => {
        return doc;
      })
      .catch((err: any) => {
        return err;
      });
  }

  update(data: any): any {
    // console.log('Update doc in db');
    return this._db
      .get(data._id)
      .then((doc: any) => {
        data.updatedAt = new Date();
        const keys: string[] = Object.keys(data);
        keys
          .filter((key: string) => !key.startsWith('_'))
          .forEach((key: string) => (doc[key] = data[key]));
        return this._db
          .put(doc)
          .then((d: any) => {
            // console.log(d);
            data.updatedAt = data.updatedAt || new Date();
          })
          .catch((err: any) => {
            // eslint-disable-next-line no-console
            console.log(err);
          });
      })
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err);
        return this.create(data);
      });
  }

  delete(id: string): any {
    // console.log('Delete doc in db');
    return this._db.get(id).then((doc: any) => this._db.remove(doc));
  }

  deleteBulk(ids: string[]): any {
    return this.list().then((docs: any[]) => {
      docs
        .filter((doc: any) => ids.includes(doc._id))
        .forEach((doc: any) => (doc._deleted = true));
      return this._db.bulkDocs(docs);
    });
  }
}
