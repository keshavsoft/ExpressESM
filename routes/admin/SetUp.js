import express from 'express';

var router = express.Router();

import { PostFunc } from '../../controllers/admin/SetUp.Controller.js';

router.post('/', PostFunc);

export { router };