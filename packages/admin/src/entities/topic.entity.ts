import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ConsultationEntity } from './consultation.entity.js';
import { PostEntity } from './post.entity.js';

@Entity({ name: 'topics' })
export class TopicEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public description: string;

  @ManyToMany(() => ConsultationEntity, (consultation) => consultation.topic)
  @JoinTable()
  consultations: ConsultationEntity[];

  @ManyToMany(() => PostEntity, (post) => post.topics)
  posts: PostEntity[];

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
