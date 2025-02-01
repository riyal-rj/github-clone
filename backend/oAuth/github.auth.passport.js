import passport from 'passport';
import { ENV_VARS } from '../env/env.variables.js';
import User from '../models/User.models.js';
import {Strategy as GithubStrategy} from 'passport-github2';

passport.serializeUser(function(user,done){
    done(null,user);
});

passport.deserializeUser(function(obj,done){
    done(null,obj);
});

passport.use(
    new GithubStrategy(
        {
            clientID: ENV_VARS.GITHUB_CLIENT_ID,
            clientSecret: ENV_VARS.GITHUB_CLIENT_SECRET,
            callbackURL:`/api/auth/github/callback`
        },
        async function(accessToken,refreshToken,profile,done){
           const user=await User.findOne({username:profile.username});
           console.log(profile);
           if(!user)
           {
            const newUser=new User({
                username:profile.username,
                name:profile.displayName,
                avatarUrl:profile.photos[0].value,
                profileUrl:profile.profileUrl,
                likedProfiles:[],
                likedBy:[],
            });
            await newUser.save();
            return done(null,newUser);
           }
           else
           {
            return done(null,user);
           }
        }
    )
)