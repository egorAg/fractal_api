import { Post } from 'src/posts/domain/post';
import { ApiPropertyOptional } from '@nestjs/swagger';
import crypto from 'crypto';

export class System {
  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  id: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  name: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  description: string;

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
