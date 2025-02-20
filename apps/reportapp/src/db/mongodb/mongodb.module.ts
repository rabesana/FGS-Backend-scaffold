import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

//@Module({})
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pms'),
  ],
})
export class MongodbModule implements OnModuleInit  {
    private readonly logger = new Logger(MongodbModule.name);

    onModuleInit() {
      this.handleMongoDBConnection();
    }
  
    private handleMongoDBConnection() {
  
      mongoose.connection.on('connected', () => {
        this.logger.log('MongoDB connected successfully');
      });
  
      mongoose.connection.on('error', (err) => {
        this.logger.error('MongoDB connection error', err);
        // You could add retry logic here or handle the error further (e.g., send notifications)
      });
  
      mongoose.connection.on('disconnected', () => {
        this.logger.warn('MongoDB connection disconnected');
        // You could implement a reconnection strategy here if desired
      });
  
      mongoose.connection.on('reconnected', () => {
        this.logger.log('MongoDB reconnected');
      });
    }    
}
