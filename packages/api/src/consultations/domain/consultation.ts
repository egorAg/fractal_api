import { Topic } from 'src/topics/domain/topic';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class Consultation {
  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  id: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  file?: string;

  @ApiPropertyOptional({
    example: [Topic],
  })
  topic?: Topic[];

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  bucket: string;

  @ApiPropertyOptional({
    example: crypto.randomUUID(),
  })
  specialist: string;

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
  price: number;

  @ApiPropertyOptional({
    example: new Date(),
  })
  createdAt: Date;

  @ApiPropertyOptional({
    example: new Date(),
  })
  updatedAt: Date;
}
