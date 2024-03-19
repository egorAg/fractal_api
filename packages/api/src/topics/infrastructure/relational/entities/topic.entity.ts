import { Exclude } from 'class-transformer';
import { ConsultationEntity } from 'src/consultations/infrastructure/relational/entities/consultation.entity';
import { PostEntity } from 'src/posts/infrastructure/relational/entities/post.entity';
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

  @Exclude()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
