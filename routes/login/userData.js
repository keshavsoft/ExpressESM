import express from 'express';

var router = express.Router();

import { GetFunc } from '../../controllers/login/userDataController.js';

router.get('/', GetFunc);

export { router };