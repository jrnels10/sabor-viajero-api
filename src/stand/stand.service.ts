import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatStandDto } from './dto/stand.dto';
import { Stand } from './interfaces/stand.interface';
import { StandRepository } from './stand.repository';

@Injectable()
export class StandService {
  private stand: Stand;

  constructor(
    @InjectRepository(StandRepository)
    private standRepository: StandRepository,
  ) {}

  createStand(data: CreatStandDto) {
    return this.standRepository.createStand(data);
  }

  getAllStands(): Stand {
    return this.stand;
  }
}
