import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export async function save(request: Request, response: Response) {
    const UserRepository = AppDataSource.getRepository(User)

    const savedUser = await UserRepository.save(request.body);

    return response.status(200).json(savedUser)
}

export async function getAll(request: Request, response: Response) {
    const UserRepository = AppDataSource.getRepository(User)

    const allUsers = await UserRepository.find();

    return response.status(200).json(allUsers)
}