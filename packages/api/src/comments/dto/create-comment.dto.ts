import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example: 'John Doe',
    type: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'John Doe',
    type: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  message: string;
}
