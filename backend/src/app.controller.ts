import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // used for all data
  @Get()
  async getData(): Promise<object> {
    return this.appService.getData();
  }

  // used for a single car data
  @Get('cars/:id')
  async getCar(@Param('id') id: number) {
    return this.appService.getCar(id);
  }
}
