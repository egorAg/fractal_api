import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'role',
})
export class RoleEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
