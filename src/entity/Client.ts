import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client")
export class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "varchar", nullable: false })
    nome: string;

    @Column({ type: "varchar", nullable: false })
    login: string;

    @Column({ type: "varchar", nullable: false })
    plano: string;

}