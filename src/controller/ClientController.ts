import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entity/Client";

export async function save(request: Request, response: Response) {
    try {

        const ClientRepository = AppDataSource.getRepository(Client)

        const { neWclient } = request.body

        const savedClient = await ClientRepository.save(neWclient);

        return response.status(200).json(savedClient)

    }    
    catch (error) {

        return response.status(400).json(error)
    
    }

}

export async function getAll(request: Request, response: Response) {
    const ClientRepository = AppDataSource.getRepository(Client)

    const allClients = await ClientRepository.find();

    return response.status(200).json(allClients)
}