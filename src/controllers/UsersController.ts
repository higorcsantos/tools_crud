import {Request,Response} from 'express'
import { getRepository } from 'typeorm';
import { User } from '../models/Users';

class UserController{
    async create(req: Request, res: Response){
        const {
            email,
            password,
            name
        } = req.body;
        const usersRepository = getRepository(User);

        const userExists = await usersRepository.findOne({email});

        if(userExists){
            return res.status(400).json({message: "Usuário já cadastrado"})
        }
        const user = usersRepository.create({
            email,
            password,
            name
        });

        await usersRepository.save(user);

        return res.status(201).json("Usuário cadastrado com sucesso");
    }
}

export {UserController}