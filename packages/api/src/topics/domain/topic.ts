import { Consultation } from 'src/consultations/domain/consultation';
import { Post } from 'src/posts/domain/post';
import { ApiPropertyOptional } from '@nestjs/swagger';
import crypto from 'crypto';

export class Topic {
  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  id?: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  name: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  description: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  consultations?: Consultation[];

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  posts?: Post[];

  @ApiPropertyOptional({
    example: new Date(),
  })
  createdAt?: Date;

  @ApiPropertyOptional({
    example: new Date(),
  })
  updatedAt?: Date;
}
