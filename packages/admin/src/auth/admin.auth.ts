import { AppDataSource } from "../config/typeorm.datasource.js";
import { UserEntity } from "../entities/user.entity.js";
import bcrypt from "bcrypt";
import { Connection } from "typeorm";


export const getUser= async (email: string) => {
    const repo = AppDataSource.getRepository(UserEntity)

    return repo.findOne({
        where: {
            email: email
        },
        relations: {
            role: true
        }
    })
}

export const auth = async (email: string, password: string) => {
    const user = await getUser(email);

    if ( user?.password ) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if ( isPasswordValid && user.role?.name === 'Admin') {
            return {
                email,
                password
            }
        }
    }
}