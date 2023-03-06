import express from 'express';
const routes = express.Router();

import { getEntityData } from './controllers/Entity';

routes.get('/stable/v1.0/entity', getEntityData);

module.exports = routes;