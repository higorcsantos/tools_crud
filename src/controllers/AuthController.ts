import {Request,Response} from 'express'
import { getRepository } from 'typeorm'
import { User } from '../models/Users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class AuthController{
    async authenticate(req: Request,res: Response){
        const userRepository = getRepository(User);

        const{
            email,
            password
        } = req.body;
        const userExists = await userRepository.findOne({email});
        

        if(!email){
            return res.status(400).json({message: "Favor informar o usuário"})
        }

        if(!password){
            return res.status(400).json({message: "Favor informar a senha"})
        }


        if(!userExists){
            return res.status(400).json({message: "Usuário não existe"});
        }
        const isValidPassword = await bcrypt.compare(password,userExists.password)

        if(!isValidPassword){
            return res.status(400).json({message: "Senha incorreta"});
        }
        const token = jwt.sign({id: userExists.id},"9as1%12#xz0#@", {expiresIn: '1d'});

        return res.status(200).json(token);

    }
}

export {AuthController}