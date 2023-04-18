import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar",
        length: 100,
    })
    name: string;

    @Column('varchar')
    email: string;

    @Column({ select: false })
    password: string;

    @Column('varchar')
    description: string;

}