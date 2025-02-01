import passport from 'passport';
import { ENV_VARS } from '../env/env.variables.js';
import User from '../models/User.models.js';
import {Strategy as GithubStrategy} from 'passport-github2';

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

passport.use(
    new GithubStrategy(
        {
            clientID: ENV_VARS.GITHUB_CLIENT_ID,
            clientSecret: ENV_VARS.GITHUB_CLIENT_SECRET,
            callbackURL:`/api/auth/github/callback`
        },
        async function (accessToken, refreshToken, profile, done) {
           const user=await User.findOne({username:profile.username});
           if (!user) {
            const newUser = new User({
                name: profile.displayName,
                username: profile.username,
                profileUrl: profile.profileUrl,
                avatarUrl: profile.photos[0].value,
                likedProfiles: [],
                likedBy: [],
            });
            await newUser.save();
            done(null, newUser);
           }
           else
           {
            done(null,user);
           }
        }
    )
);