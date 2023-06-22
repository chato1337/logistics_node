import express from 'express';
import { create, get, getById, update, _delete } from './controller';

const router = express.Router();

router
    .get('/', get)
    .get('/:id', getById)
    .post('/', create)
    .put('/:id', update)
    .delete('/:id', _delete);

export const packageRoutes = router
