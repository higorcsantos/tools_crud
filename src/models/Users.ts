import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt'

@Entity("users")
class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string
    @BeforeInsert()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password,6);
    }
}

export {User};