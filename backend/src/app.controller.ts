import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // used for all data
  @Get()
  async getData(): Promise<object> {
    return this.appService.getData();
  }
}
