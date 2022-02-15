import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { StandController } from './stand.controller';
import { StandRepository } from './stand.repository';
import { StandService } from './stand.service';
import { typeOrmConfig } from '../config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([StandRepository]),
    ClientsModule.register([
      {
        name: 'COMMUNICATION',
        transport: Transport.TCP,
        options: { port: 3000 },
      },
    ]),
  ],
  controllers: [StandController],
  providers: [StandService],
})
export class StandModule {}
