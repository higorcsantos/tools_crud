import {Router} from 'express';
import { AuthController } from './controllers/AuthController';
import { ToolController } from './controllers/ToolsController';
import { UserController } from './controllers/UsersController';
import authMiddleware from './middlewares/AuthMiddleware';



const router = Router();
const toolController  = new ToolController
const userController = new UserController
const authController = new AuthController
// Rotas para usuários

router.post("/users",userController.create);
router.post("/authenticate",authController.authenticate);

// Routas para tools

router.post("/tools",authMiddleware, toolController.create);
router.get("/tools",authMiddleware, toolController.index);
router.delete("/tools/:id",authMiddleware, toolController.delete);

export {router}