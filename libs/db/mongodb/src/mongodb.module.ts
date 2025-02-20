import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbService } from './mongodb.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/pms')],
  providers: [MongodbService],
  exports: [MongodbService],
})
export class MongodbModule {}
