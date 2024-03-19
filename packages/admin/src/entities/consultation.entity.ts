import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TopicEntity } from './topic.entity.js';

@Entity({ name: 'consultations' })
export class ConsultationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: true, type: 'text' })
  public file?: string;

  @ManyToMany(() => TopicEntity, (topic) => topic.consultations)
  public topic: TopicEntity[];

  @Column({ nullable: true })
  public bucket: string;

  @Column()
  public specialist: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public price: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
