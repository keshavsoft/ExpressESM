import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc } from '../../../controllers/projects/Quotation/Items.Controller.js';

router.get('/', GetFunc);
router.post('/', PostFunc);
// router.route('/').get(GetFunc).post(PostFunc);

export { router };