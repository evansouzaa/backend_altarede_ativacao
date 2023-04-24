import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./Client";

@Entity("activation")
export class Activation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Client, (client) => client)
    @JoinColumn()
    client: Client;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date 

}