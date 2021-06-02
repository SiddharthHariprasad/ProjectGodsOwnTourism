import express from 'express';

import { getUsers, postUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', postUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;