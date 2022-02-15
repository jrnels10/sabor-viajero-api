import { Test, TestingModule } from '@nestjs/testing';
import { StandController } from '../stand.controller';

describe('StandController', () => {
  let controller: StandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandController],
    }).compile();

    controller = module.get<StandController>(StandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
