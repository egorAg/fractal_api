import { System } from 'src/system/domain/system';
import { Topic } from 'src/topics/domain/topic';
import { ApiPropertyOptional } from '@nestjs/swagger';
import * as crypto from 'crypto';

export class Post {
  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  id: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  file?: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  bucket?: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  slug: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  author: string;

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
  content: string;

  @ApiPropertyOptional({
    example: [Topic],
  })
  topics?: Topic[];

  @ApiPropertyOptional({
    example: [System],
  })
  systems?: System[];

  @ApiPropertyOptional({
    example: new Date(),
  })
  createdAt?: Date;

  @ApiPropertyOptional({
    example: new Date(),
  })
  updatedAt?: Date;
}
