import { Injectable } from '@nestjs/common';

@Injectable()
export class StandService {
  private stand = ['one stand', 'two stands'];

  getAllStands() {
    return this.stand;
  }
}
