import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CommentEntity } from './comment.entity.js';
import { SystemEntity } from './system.entity.js';
import { TopicEntity } from './topic.entity.js';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', name: 'file_path', nullable: true })
  file: string;

  @Column({ nullable: true })
  bucket: string;

  @Column({ length: 50 })
  slug: string;

  @Column()
  author: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments?: CommentEntity[];

  @ManyToMany(() => TopicEntity, (topic) => topic.posts)
  @JoinTable()
  topics: TopicEntity[];

  @ManyToMany(() => SystemEntity, (sys) => sys.posts)
  @JoinTable({ name: 'posts_systems' })
  systems: SystemEntity[];

  @Column({ nullable: true })
  system?: string;
}
