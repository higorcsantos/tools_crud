import {Router} from 'express';
import { ToolController } from './controllers/ToolsController';
import { UserController } from './controllers/UsersController';



const router = Router();
const toolController  = new ToolController
const userController = new UserController
// Rotas para usuários

router.post("/users",userController.create);
// Routas para tools
router.post("/tools", toolController.create);
router.get("/tools", toolController.index);
router.delete("/tools/:id", toolController.delete);

export {router}