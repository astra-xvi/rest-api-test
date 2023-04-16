import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RecordDto {
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @IsNumber()
  owner: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @IsString()
  company: string;
}
