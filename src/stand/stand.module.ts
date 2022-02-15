import { Module } from '@nestjs/common';
import { StandController } from './stand.controller';
import { StandService } from './stand.service';

@Module({
  controllers: [StandController],
  providers: [StandService]
})
export class StandModule {}
