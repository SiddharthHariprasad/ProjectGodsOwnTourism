import express from 'express';

import { getGuides, postGuide, updateGuide,deleteGuide } from '../controllers/guides.js';

const router = express.Router();

router.get('/', getGuides);
router.post('/', postGuide);
router.patch('/:id', updateGuide);
router.delete('/:id', deleteGuide);

export default router;