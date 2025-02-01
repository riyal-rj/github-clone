import express from 'express';
import { getUserProfileAndRepositories, likeProfile,  getLikes } from '../controllers/user.controllers.js';
import { authenticationMiddleware } from '../middleware/authentication.middleware.js';
const router = express.Router();

router.get('/profile/:username',getUserProfileAndRepositories );

router.post('/like/:username',authenticationMiddleware,likeProfile);
router.get("/likes",authenticationMiddleware,getLikes);
export default router;