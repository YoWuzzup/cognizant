import * as mongoose from 'mongoose';

export const WarehousesSchema = new mongoose.Schema({
  name: String,
  location: { lat: String, long: String },
  cars: {
    location: String,
    vehicles: [
      {
        _id: Number,
        make: String,
        model: String,
        year_model: Number,
        price: Number,
        licensed: Boolean,
        date_added: Date,
      },
    ],
  },
});

export interface Warehouses extends mongoose.Document {
  name: string;
  location: {
    [key: string]: string;
  };
  cars: {
    location: string;
    vehicles: [
      {
        id: number;
        make: string;
        model: string;
        year_model: number;
        price: number;
        licensed: boolean;
        date_added: Date;
      },
    ];
  };
}
