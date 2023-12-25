import express from 'express';
var router = express.Router();

import { router as routerCustomers } from './Quotation/Customers.js';

router.use('/Customers', routerCustomers);

export { router };