import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//import { MongodbService } from '@libs/mongodb';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    //return this.appService.find('departments', {});
    return this.appService.getHello();
  }
}
