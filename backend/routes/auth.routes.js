import express from 'express';
import passport from 'passport';
import { ENV_VARS } from '../env/env.variables.js';
const router = express.Router();

router.get('/github',passport.authenticate('github',{scope:['user:email']}));
router.get('/github/callback',passport.authenticate('github',{failureRedirect:ENV_VARS.CLIENT_URL+'/sign-in'}),(req,res)=>{
    res.redirect(ENV_VARS.CLIENT_URL);
});

router.get('/check',(req,res)=>{
    if(req.isAuthenticated())
        res.send({user:req.user});
    else
        res.send({user:null});
})

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        res.json({message:"Logout Successfully"});
    });
})

export default router;