import { DataSource } from "typeorm"
import { RoleEntity } from "../entities/role.entity.js";
import { UserEntity } from "../entities/user.entity.js";
import { CommentEntity } from "../entities/comment.entity.js";
import { ConsultationEntity } from "../entities/consultation.entity.js";
import { ContentEntity } from "../entities/content.entity.js";
import { PostEntity } from "../entities/post.entity.js";
import { SystemEntity } from "../entities/system.entity.js";
import { TopicEntity } from "../entities/topic.entity.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: +!process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [RoleEntity, UserEntity, CommentEntity, ConsultationEntity, ContentEntity, PostEntity, SystemEntity, TopicEntity],
    dropSchema: false,
    synchronize: true,
    logging: true
})