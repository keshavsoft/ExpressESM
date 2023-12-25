import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc ,PatchFunc} from '../../../controllers/projects/Quotation/Customers.Controller.js';

router.get('/', GetFunc);
router.post('/', PostFunc);
router.patch('/', PatchFunc);
// router.route('/').get(GetFunc).post(PostFunc);

export { router };