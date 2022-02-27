import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Warehouses } from './app.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Warehouses') private readonly warehouses: Model<Warehouses>,
  ) {}

  // used for all data
  async getData(): Promise<object> {
    const data = await this.warehouses.find().exec();

    return data.map((wh: any) => ({
      name: wh.name,
      location: wh.location,
      cars: wh.cars,
    }));
  }
}
