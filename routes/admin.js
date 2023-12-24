import express from 'express';
var router = express.Router();

import { router as routerlogin } from './admin/Password.js';

router.use('/Password', routerlogin);

export { router };