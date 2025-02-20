import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class MongodbService {
  
    private readonly connection = mongoose.connection;

    async find(collectionName: string, query: any): Promise<any[]> {
      const collection = this.connection.collection(collectionName);
      return collection.find(query).toArray();
    }
  
    async insertOne(collectionName: string, document: any): Promise<any> {
      const collection = this.connection.collection(collectionName);
      return collection.insertOne(document);
    }
  
    async updateOne(collectionName: string, filter: any, update: any): Promise<any> {
      const collection = this.connection.collection(collectionName);
      return collection.updateOne(filter, update);
    }
  
    async deleteOne(collectionName: string, filter: any): Promise<any> {
      const collection = this.connection.collection(collectionName);
      return collection.deleteOne(filter);
    }
}
