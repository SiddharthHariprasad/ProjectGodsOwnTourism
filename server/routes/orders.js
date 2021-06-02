import express from 'express';

import { getOrders, postOrder, updateOrder, deleteOrder } from '../controllers/orders.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/', postOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;