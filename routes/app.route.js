import express from 'express';
import { getNombreAPI } from '../controllers/app.controller.js';

const appRouter = express.Router();

appRouter.get('/', getNombreAPI);

export default appRouter;