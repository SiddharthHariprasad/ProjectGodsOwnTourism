import express from 'express';

import { getHotels, postHotel, updateHotel, deleteHotel } from '../controllers/hotels.js';

const router = express.Router();

router.get('/', getHotels);
router.post('/', postHotel);
router.patch('/:id', updateHotel);
router.delete('/:id', deleteHotel);

export default router;