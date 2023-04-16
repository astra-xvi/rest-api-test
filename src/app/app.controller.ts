import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RecordDto } from './dto/app.dto';
import { BadRequestFilter } from 'src/commons/bad_request';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { TestInterface } from './interface/app.interface';

@ApiTags('record')
@Controller('record')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @UsePipes(ValidationPipe)
  @UseFilters(BadRequestFilter)
  @Post()
  async createRecord(@Body() dto: RecordDto): Promise<TestInterface> {
    return await this.appService.createRecord(dto);
  }
}
