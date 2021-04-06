import express from 'express';

import {getCabs, postCabs} from '../controllers/cabs.js';

const router = express.Router();

router.get('/', getCabs);
router.post('/', postCabs);

export default router;