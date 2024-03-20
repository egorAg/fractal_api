import { Exclude, Expose } from 'class-transformer';
import { Role } from 'src/roles/domain/role';
import { ApiProperty } from '@nestjs/swagger';
import * as crypto from 'crypto';

export class User {
  @ApiProperty({
    example: crypto.randomUUID(),
  })
  id: string;

  @ApiProperty({
    example: 'test@fractal.com',
  })
  @Expose({ groups: ['me', 'admin'] })
  email: string;

  @ApiProperty({
    example: () => {
      const role = new Role();
      role.id = 1;
      role.name = 'Admin';
      return role;
    },
  })
  role?: Role;

  @Exclude({ toPlainOnly: true })
  password: string;

  @Exclude({ toPlainOnly: true })
  newPassword?: string;

  @ApiProperty({
    example: 'Test',
  })
  name: string;

  @ApiProperty({
    example: 'User',
  })
  surname: string;

  @ApiProperty({
    example: '@test',
    type: 'string',
    nullable: true,
  })
  telegram?: string;

  @ApiProperty({
    example: '@test',
    type: 'string',
    nullable: true,
  })
  instagram?: string;

  @ApiProperty({
    example: '+79998887766',
    type: 'string',
    nullable: true,
  })
  phone?: string;

  @ApiProperty({
    example: 'Ростов-на-Дону',
    type: 'string',
    nullable: true,
  })
  city?: string;

  @ApiProperty({
    example: crypto.randomUUID(),
    type: 'string',
    nullable: true,
  })
  ref_id?: string;

  @ApiProperty({
    example: new Date(),
  })
  createdAt: Date;

  @ApiProperty({
    example: new Date(),
  })
  updatedAt: Date;
}
