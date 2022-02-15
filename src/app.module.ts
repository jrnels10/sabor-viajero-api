import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { StandRepository } from './stand/stand.repository';
import * as config from 'config';

@Module({
  imports: [
    //Connects to database
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
