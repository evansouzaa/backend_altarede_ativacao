import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Activation } from "../entity/Activation";

export async function save(request: Request, response: Response) {
    const ActivationRepository = AppDataSource.getRepository(Activation)

    const savedActivation = await ActivationRepository.save(request.body);

    return response.status(200).json(savedActivation)
}

export async function getAll(request: Request, response: Response) {
    const ActivationRepository = AppDataSource.getRepository(Activation)

    const allActivations = await ActivationRepository.find();

    return response.status(200).json(allActivations)
}