import { Db, Collection, ObjectId } from 'mongodb';

export abstract class BaseRepository<T> {
  public readonly _collection: Collection;

  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  async create(item: T): Promise<boolean> {
    const result = await this._collection.insert(item);
    return !!result.result.ok;
  }

  async findAll(transform: (item: any) => T): Promise<Array<T>> {
    const result = await this._collection.find({});
    return result.map(transform).toArray();
  }

  async findBy(id: any, transform: (items: any) => T): Promise<T> {
    const result = await this._collection.findOne({
      _id: new ObjectId(id)
    });
    return transform(result);
  }

  async deleteBy(id: any): Promise<boolean> {
    const result = await this._collection.deleteOne({
      _id: new ObjectId(id)
    });
    return result.deletedCount > 0;
  }

}