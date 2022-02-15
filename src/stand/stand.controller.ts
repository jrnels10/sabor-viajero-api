import { Controller, Get, Query, Redirect, Res } from '@nestjs/common';
import { StandService } from './stand.service';
import { ListAllStands } from './dto/stand.dto';

//Routes to /stand will be handled by the StandController
//Class that has a constructor its serivce
@Controller('stand')
export class StandController {
  constructor(private standService: StandService) {}

  @Get()
  findAll() {
    return this.standService.getAllStands();
  }
}
