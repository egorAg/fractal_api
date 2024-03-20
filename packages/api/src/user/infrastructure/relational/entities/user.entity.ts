import { Exclude, Expose } from 'class-transformer';
import { RoleEntity } from 'src/roles/infrastructure/persistence/relational/entities/role.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: String, unique: true, nullable: true })
  @Expose({ groups: ['me', 'admin'] })
  public email: string;

  @ManyToOne(() => RoleEntity, {
    eager: true,
  })
  role?: RoleEntity | undefined;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  public password: string;

  @Exclude({ toPlainOnly: true })
  public previousPassword?: string;

  @Index()
  @Column({ type: String })
  public name: string;

  @Index()
  @Column({ type: String })
  public surname: string;

  @Column({ type: String, nullable: true })
  public telegram?: string;

  @Column({ type: String, nullable: true })
  public instagram?: string;

  @Column({ type: String, nullable: true })
  public phone?: string;

  @Column({ type: String, nullable: true })
  public city?: string;

  @Column({ type: String, nullable: true })
  public ref_id?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
