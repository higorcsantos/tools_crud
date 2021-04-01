  
import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
interface TokenPayload{
    id: string,
    iat: number,
    exp: number
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error: "Usuário não autorizado"});
    }
    const token = authorization.replace('Bearer', '').trim();

    try{
        const data = jwt.verify(token, '9as1%12#xz0#@');
        const {id} = data as TokenPayload;
        req.userId = id;
        next();
    }catch{
        return res.status(401).json({error: 'Usuario não autorizado'});
    }
}