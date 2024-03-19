import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SearchPostsDto {
  @ApiProperty({ required: false, description: 'ID системы' })
  systemId?: string;

  @ApiProperty({ required: false, description: 'ID темы' })
  topicId?: string;

  @ApiProperty({ required: false, description: 'Название поста' })
  name?: string;

  @ApiProperty({ required: true, default: 1, description: 'Номер страницы' })
  @IsNotEmpty()
  page: number;

  @ApiProperty({ required: true, default: 10, description: 'Размер страницы' })
  @IsNotEmpty()
  pageSize: number;
}
