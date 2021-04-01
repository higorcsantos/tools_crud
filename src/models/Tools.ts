import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tools')
class Tools{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    title: string;
    @Column()
    description:string;
    @Column()
    link: string
    @Column('simple-array')
    tags: string[]
}
 
export {Tools};