import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StandModule } from './stand/stand.module';

@Module({
  imports: [StandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
