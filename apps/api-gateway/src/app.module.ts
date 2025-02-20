import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { MongodbService } from '@libs/mongodb';
//import { MongodbModule } from '@libs/mongodb';
//import { ClickhouseModule } from '@libs/clickhouse';
//import { ClickhouseService } from '@libs/clickhouse';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
