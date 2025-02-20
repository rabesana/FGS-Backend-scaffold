import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClickhouseModule } from './db/clickhouse/clickhouse.module';
import { MongodbModule } from './db/mongodb/mongodb.module';
//import { MongodbModule } from '@libs/mongodb';
import { RedisModule } from './redis/redis.module';
import { VaultModule } from './vault/vault.module';

@Module({
  imports: [ClickhouseModule, MongodbModule, RedisModule, VaultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
