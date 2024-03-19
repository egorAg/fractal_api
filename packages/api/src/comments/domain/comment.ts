import { Post } from 'src/posts/domain/post';
import { ApiPropertyOptional } from '@nestjs/swagger';
import * as crypto from 'crypto';

export class Comment {
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
  message: string;

  @ApiPropertyOptional({
    example: true,
  })
  approved?: boolean;

  @ApiPropertyOptional({
    example: [Post],
  })
  post: Post;

  @ApiPropertyOptional({
    example: new Date(),
  })
  createdAt?: Date;

  @ApiPropertyOptional({
    example: new Date(),
  })
  updatedAt?: Date;
}
