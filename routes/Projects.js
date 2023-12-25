import express from 'express';
var router = express.Router();

import { router as routerTicketing } from './Projects/Ticketing.js';
import { router as routerQuotation } from './Projects/Quotation.js';

router.use('/Ticketing',  routerTicketing);
router.use('/Quotation',  routerQuotation);

export { router };