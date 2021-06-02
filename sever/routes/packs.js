import express from 'express';

import { getPacks, postPack, updatePack, deletePack } from '../controllers/packs.js';

const router = express.Router();

router.get('/', getPacks);
router.post('/', postPack);
router.patch('/:id', updatePack);
router.delete('/:id', deletePack);

export default router;