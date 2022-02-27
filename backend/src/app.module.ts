import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { WarehousesSchema } from './app.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([
      { name: 'Warehouses', schema: WarehousesSchema },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get(
          'MONGODB_LOGIN',
        )}:${configService.get(
          'MONGODB_PASSWORD',
        )}@cluster0.d7cms.mongodb.net/cognizant`,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
