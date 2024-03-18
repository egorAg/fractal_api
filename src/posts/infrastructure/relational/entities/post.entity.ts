import { Exclude } from 'class-transformer';
import { SystemEntity } from 'src/system/infrastructure/relational/entities/system.entity';
import { TopicEntity } from 'src/topics/infrastructure/relational/entities/topic.entity';
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

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => TopicEntity, (topic) => topic.posts)
  @JoinTable()
  topics: TopicEntity[];

  @ManyToMany(() => SystemEntity, (sys) => sys.posts)
  @JoinTable({ name: 'posts_systems' })
  systems: SystemEntity[];

  @Column({ nullable: true })
  system?: string;
}
