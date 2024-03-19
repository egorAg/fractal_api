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
import { RoleEntity } from './role.entity.js';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: String, unique: true, nullable: true })
  public email: string;

  @ManyToOne(() => RoleEntity, {
    eager: true,
  })
  role?: RoleEntity | undefined;

  @Column({ nullable: true })
  public password?: string;

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
