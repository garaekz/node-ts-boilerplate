import { validator } from './../middlewares/validator.handler';
import { ItemsService } from '../services/items.service';
import express from 'express';
import { create } from '../schemas/item.schema';

const router = express.Router();
const service = new ItemsService;

router.get('/', async (req, res, next) => {
  try {
    const items = await service.all();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.get(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post('/', validator(create, 'body'), async (req, res, next) => {
  try {
    const { body } = req;
    const item = await service.create(body);
    res.json(item);
  } catch (error) {
    res.json(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const item = await service.update(id, body);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.delete(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

export default router;