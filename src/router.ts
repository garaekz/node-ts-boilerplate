import { Router } from 'express';
import itemsController from './controllers/items.controller';

export const apiRouter = (router: Router) => {
  router.use('/items', itemsController);
}