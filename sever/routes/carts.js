import express from 'express';

import { getCarts, postCart, updateCart, deleteCart } from '../controllers/carts.js';

const router = express.Router();

router.get('/', getCarts);
router.post('/', postCart);
router.patch('/:id', updateCart);
router.delete('/:id', deleteCart);

export default router;