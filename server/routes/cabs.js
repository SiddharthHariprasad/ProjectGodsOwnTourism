import express from 'express';

import { getCabs, postCab, updateCab, deleteCab } from '../controllers/cabs.js';

const router = express.Router();

router.get('/', getCabs);
router.post('/', postCab);
router.patch('/:id', updateCab);
router.delete('/:id', deleteCab);

export default router;