import express from 'express';
import { getUserProfileAndRepositories } from '../controllers/user.controllers.js';
const router = express.Router();

router.get('/profile/:username',getUserProfileAndRepositories );
export default router;