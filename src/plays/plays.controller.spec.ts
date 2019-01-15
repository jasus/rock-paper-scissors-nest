import { Test, TestingModule } from '@nestjs/testing';
import { PlaysController } from './plays.controller';

describe('Plays Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PlaysController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PlaysController = module.get<PlaysController>(PlaysController);
    expect(controller).toBeDefined();
  });
});
