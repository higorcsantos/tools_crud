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

        if(!name){
            return res.status(400).json({message: "Informe o nome do usuário"})
        }
        if(!email){
            return res.status(400).json({message: "Informe o emaiç do usuário"})
        }
        if(!password){
            return res.status(400).json({message: "Informe a senha do usuário"})
        }

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