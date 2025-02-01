import express from 'express';
import passport from 'passport';
import { ENV_VARS } from '../env/env.variables.js';
const router = express.Router();

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: `${ENV_VARS.CLIENT_URL}/login` }),
    (req, res) => {
        res.redirect(ENV_VARS.CLIENT_URL);
    }
);

router.get('/check', (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    if (req.isAuthenticated())
        res.status(200).json({ user: req.user });
    else
        res.status(200).json({ user: null });
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ message: "Session destruction failed" });
        res.status(200).json({ message: "Logged out successfully" });
    });
});

export default router;