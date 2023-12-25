import express from 'express';
var router = express.Router();

import { router as routerTicket } from './Ticketing/Ticket.js';

router.use('/Ticket',  routerTicket);

export { router };