import express from 'express';

import { getTickets, postTicket, updateTicket, deleteTicket } from '../controllers/tickets.js';

const router = express.Router();

router.get('/', getTickets);
router.post('/', postTicket);
router.patch('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;