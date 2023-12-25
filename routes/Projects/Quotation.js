import express from 'express';
var router = express.Router();

import { router as routerCustomers } from './Quotation/Customers.js';
import { router as routerItems } from './Quotation/Items.js';
import { router as routerOrders } from './Quotation/Orders.js';

router.use('/Customers', routerCustomers);
router.use('/Items', routerItems);
router.use('/Orders', routerOrders);

export { router };