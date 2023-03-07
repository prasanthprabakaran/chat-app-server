import { Router } from 'express';
import { sendMessage, allMessages } from '../controllers/mesageControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/').post(protect, sendMessage)
router.route('/:chatId').get(protect, allMessages)

const messageRoutes = router;

export default messageRoutes;