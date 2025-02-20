import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//import { MongodbService } from './db/mongodb/mongodb.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    //const departments = this.appService.find('departments', '{}');

    return this.appService.getHello();
  }
}
