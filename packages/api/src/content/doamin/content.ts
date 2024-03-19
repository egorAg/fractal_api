import { ApiPropertyOptional } from '@nestjs/swagger';

export class Content {
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
  value: string;

  @ApiPropertyOptional({
    example: new Date(),
  })
  createdAt?: Date;

  @ApiPropertyOptional({
    example: new Date(),
  })
  updatedAt?: Date;
}
