import express from 'express';
var router = express.Router();

import { router as routerlogin } from './login/userData.js';

router.use('/userData', routerlogin);

export { router };