import { Request,response,Response } from 'express'
import { getRepository, Like } from 'typeorm';
import { Tools } from '../models/Tools';
class ToolController{
    async create(req: Request,res: Response){
        const{
            title,
            link,
            description,
            tags
        } = req.body;
        if(!title){
            return res.status(400).json({message: "Insira um titulo"})
        };
        if(!link){
            return res.status(400).json({message: "Insira um link"})
        }
        if(!description){
            return res.status(400).json({message: "Insira uma descrição"})
        }
        if(!tags){
            return res.status(400).json({message: "Insira uma tag"})
        }
        const toolsRepository = getRepository(Tools);
        const tool = toolsRepository.create({
            title,
            description,
            link,
            tags
        });
        await toolsRepository.save(tool);

        return res.status(201).json({message: "Ferramenta criada com sucesso"});
    }
    async index(req: Request, res: Response){
        const {tag} = req.query;

        const toolRepository = getRepository(Tools)
        if(!tag){
            const tools = await toolRepository.find();

            return res.json(tools);
        }else{
            const tools = await toolRepository.find({
                where: [
                    {tags: Like(`%${tag}%`)}
                ]
            });

            return res.json(tools);
        }


    }
    async delete(req: Request,res: Response){
        const {id} = req.params;

        const toolsRepository = getRepository(Tools);
        
        const toolAlreadyExists = await toolsRepository.findOne({
            where:[
                {id: Like(id)}
            ]
        });
        if(!toolAlreadyExists){
            return res.status(400).json({message: "Id não encontrado"})
        }
        
        toolsRepository.delete(id);

        return res.status(204).json({message: `Ferramenta com id ${id} deletada`});
    }
}

export {ToolController};