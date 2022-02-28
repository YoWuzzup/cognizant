import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Warehouses } from './app.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Warehouses')
    private readonly warehousesModel: Model<Warehouses>,
  ) {}

  // used for all data
  async getData(): Promise<object> {
    const data = await this.warehousesModel.find().exec();

    return data.map((wh: any) => ({
      name: wh.name,
      location: wh.location,
      cars: wh.cars,
    }));
  }

  // used for a single car data
  async getCar(id: number): Promise<object> {
    const car = await this.warehousesModel
      .find({ 'cars.vehicles': { $elemMatch: { _id: id } } })
      .exec();
    const neededCar = car[0].cars.vehicles.find((c) => c.id === id);

    return car.map((c: any) => ({
      name: c.name,
      location: c.location,
      cars: {
        location: c.cars.location,
        vehicles: neededCar,
      },
    }));
  }
}
