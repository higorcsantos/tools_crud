import {Router} from 'express';
import { ToolController } from './controllers/toolsController';



const router = Router();
const toolController  = new ToolController

router.post("/tools", toolController.create);
router.get("/tools", toolController.index);
router.delete("/tools/:id", toolController.delete);

export {router}