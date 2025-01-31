import express from 'express';
const router = express.Router();

router.get('/repos/:language',explorePopularRepos)
export default router;