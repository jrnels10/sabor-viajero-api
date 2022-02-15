import {
  Controller,
  Get,
  Post,
  Redirect,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { StandService } from './stand.service';
import { CreatStandDto } from './dto/stand.dto';
import { Stand } from './interfaces/stand.interface';

//Routes to /stand will be handled by the StandController
//Class that has a constructor its serivce
@Controller('stand')
export class StandController {
  constructor(private standService: StandService) {}

  @Get()
  findAll(): Stand {
    return this.standService.getAllStands();
  }

  @Post()
  createStand(
    @Body(ValidationPipe) creatStandDto: CreatStandDto,
  ): Promise<string> {
    return this.standService.createStand(creatStandDto);
  }
}
