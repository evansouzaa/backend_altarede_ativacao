import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export async function save(request: Request, response: Response) {
    try {

        const UserRepository = AppDataSource.getRepository(User)

        const { neWuser } = request.body

        const savedUser = await UserRepository.save(neWuser);

        return response.status(200).json(savedUser)

    }
    catch (error) {

        return response.status(400).json(error)
    
    }

}

export async function getAll(request: Request, response: Response) {
    const UserRepository = AppDataSource.getRepository(User)

    const allUsers = await UserRepository.find();

    return response.status(200).json(allUsers)
}