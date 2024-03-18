import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class CreateUserDto {
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    minimum: 6,
  })
  @MinLength(6)
  @IsString()
  @IsStrongPassword()
  password: string;

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  surname: string;
}
