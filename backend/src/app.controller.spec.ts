import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  const mockAppService = {};

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideProvider(AppService)
      .useValue(mockAppService)
      .compile();

    appService = app.get<AppService>(AppService);

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  // check if it returns data
  it('should return an array of data', async () => {
    const result: object[] = [];
    jest
      .spyOn(AppService.prototype as any, 'getData')
      .mockImplementation(async () => result);

    expect(await AppService.prototype.getData()).toBe(result);
  });

  // check if it returns data
  it('should return get by id', async () => {
    const result: object = {};
    jest
      .spyOn(AppService.prototype as any, 'getCar')
      .mockImplementation(async () => result);

    expect(typeof AppService.prototype.getCar(2)).not.toEqual(null);
  });
});
