import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Warehouses } from './warehouses.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const mockData = {};
  const mockDataRepository = {
    getData: jest.fn().mockResolvedValue(mockData),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(getRepositoryToken(Warehouses))
      .useValue(mockDataRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // should return to be 200
  it('/ (GET)', async () => {
    return request(app.getHttpServer()).get('/').expect(200);
  });
});
