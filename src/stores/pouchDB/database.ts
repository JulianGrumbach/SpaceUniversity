import PouchDB from 'pouchdb';

type DocType = PouchDB.Core.ExistingDocument<{[key: string]: string | number}>;
type DocTypeT<T> = PouchDB.Core.ExistingDocument<{[key: string]: T}>;
type PostDocType = PouchDB.Core.PostDocument<{createdAt?: Date, _id?: string, updatedAt?: Date} & object>;
type PostDocTypeWithKey = PostDocType & {[key: string]: string};

export class Database {
  private _db: PouchDB.Database;
  private _ready: boolean = false;

  constructor(url: string, options: PouchDB.Configuration.DatabaseConfiguration = {}) {
    this._db = new PouchDB(url, options) as PouchDB.Database;
    this._ready = true;
  }

  get db(): PouchDB.Database {
    return this._db;
  }

  get ready(): boolean {
    return this._ready;
  }

  destroy(): Promise<void> {
    return this._db.destroy();
  }

  count(): Promise<number | void> {
    return this._db
      .allDocs()
      .then((result: PouchDB.Core.AllDocsResponse<object>) => result.total_rows)
      .catch((err: Error) => {
        console.log(err);
        return;
      });
  }

  list(sortedBy: string = '', reverse: boolean = false): Promise<DocType[]> {
    return this._db
      .allDocs({ include_docs: true })
      .then((res: PouchDB.Core.AllDocsResponse<{[key: string]: string | number}>) => {
        const rows = res.rows as {doc: DocType}[];
        const docs: DocType[] = rows.map((row: {doc: DocType}) => row.doc);
        if (sortedBy) {
          docs.sort((a: DocType, b: DocType) => {
            if (typeof a[sortedBy] === 'number') {
              const b_num = b as DocTypeT<number>;
              return a[sortedBy] > b_num[sortedBy] ? 1 : -1;
            } else {
              const b_str = b as DocTypeT<string>;
              return a[sortedBy].localeCompare(b_str[sortedBy]);
            }
          });
        }
        if (reverse) {
          docs.reverse();
        }
        return docs;
      })
      .catch((err: Error) => {
        console.log(err);
        return [];
      });
  }

  // CRUD - Create, Read, Update, Delete

  create(data: PostDocType): Promise<void> {
    // console.log('Create doc in db');
    data.createdAt = new Date();
    return this._db
      .post(data)
      .then((res: PouchDB.Core.Response) => {
        data._id = res.id;
        data.updatedAt = undefined;
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  createIfNotExisted<T extends PostDocType, K extends keyof T>(data: T | Required<Pick<T, K>>, key: K = 'id' as K): Promise<void> {
    return this.list().then((docs: DocType[]) => {
      const values: unknown[] = docs.map((doc: DocType) => doc[key].toString());
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
    }).catch((err: Error) => {
      console.log(err);
    });
  }

  read(id: PouchDB.Core.DocumentId, options: PouchDB.Core.GetOptions = {}): Promise<PouchDB.Core.Document<object> & PouchDB.Core.GetMeta | void> {
    // console.log('Read doc in db');
    return this._db
      .get(id, options)
      .then((doc: PouchDB.Core.Document<object> & PouchDB.Core.GetMeta) => {
        return doc;
      })
      .catch((err: Error) => {
        console.log(err)
        return;
      });
  }

  update(data: PostDocType & PouchDB.Core.IdMeta): Promise<void> {
    // console.log('Update doc in db');
    return this._db
      .get(data._id)
      .then((doc: PouchDB.Core.Document<object> & PouchDB.Core.GetMeta) => {
        data.updatedAt = new Date();
        const data2 = data as PostDocTypeWithKey & PouchDB.Core.IdMeta
        const doc2 = doc as PouchDB.Core.Document<{[key: string]: string}> & PouchDB.Core.GetMeta
        const keys: string[] = Object.keys(data2);
        keys
          .filter((key: string) => !key.startsWith('_'))
          .forEach((key: string) => (doc2[key] = data2[key]));
        return this._db
          .put(doc2)
          .then((d: PouchDB.Core.Response) => {
            console.log(d);
            data2.updatedAt = data2.updatedAt || new Date();
          })
          .catch((err: Error) => {
            console.log(err);
          });
      })
      .catch((err: Error) => {
        console.log(err);
        return this.create(data);
      });
  }

  delete(id: PouchDB.Core.DocumentId): Promise<PouchDB.Core.Response> {
    // console.log('Delete doc in db');
    return this._db.get(id).then((doc: PouchDB.Core.Document<object> & PouchDB.Core.GetMeta) => this._db.remove(doc));
  }

  deleteBulk(ids: PouchDB.Core.DocumentId[]): Promise<Array<PouchDB.Core.Response | PouchDB.Core.Error>> {
    return this.list().then((docs: DocType[]) => {
      docs
        .filter((doc: DocType) => ids.includes(doc._id))
        .forEach((doc: PouchDB.Core.PutDocument<object>) => (doc._deleted = true));
      return this._db.bulkDocs(docs);
    });
  }
}
