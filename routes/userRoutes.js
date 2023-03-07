import { Router } from 'express';
import { registerUser, authUser, searchUsers, forgotPassword, resetPassword } from "../controllers/userControllers.js";
import { protect } from '../middleware/authMiddleware.js';

const router = Router()

router.route('/').get(protect, searchUsers);
router.route('/').post(registerUser);
router.post('/login', authUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:id/:token', resetPassword);

export default router;