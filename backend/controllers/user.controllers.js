import { ENV_VARS } from "../env/env.variables.js";
import User from "../models/User.models.js";


export const getUserProfileAndRepositories = async (req, res) => {
    const { username } = req.params;
    try {
        const userRes = await fetch(`https://api.github.com/users/${username}`,{
            headers: {
                authorization:`token ${ENV_VARS.AUTH_GITHUB_API_KEY}`,
            },
        });
        const userProfile = await userRes.json();

        const reposRes = await fetch(userProfile.repos_url,{
            headers: {
                authorization:`token ${ENV_VARS.AUTH_GITHUB_API_KEY}`,
            },
        });
        const repos = await reposRes.json();

        res.status(200).json(
            {
                userProfile,
                repos
            });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const likeProfile=async(req,res)=>{
    try {
        const {username}=req.params;
        const user=await User.findById(req.user._id.toString());
        const userToLike=await User.findOne({username:username});
        if(!userToLike)
        {
            return res.status(404).json({
                message:"User is not a member"
            });
        }
        console.log('test');
        if(user.likedProfiles.includes(userToLike._id))
        {
            return res.status(400).json({
                message:"You have already liked this profile"
            });
        }
        userToLike.likedBy.push({
            username:user.username,
            avatarUrl:user.avatarUrl,
            likedDate:Date.now()
        })
        user.likedProfiles.push(userToLike.username);
        await Promise.all([user.save(),userToLike.save()]);
        res.status(200).json({
            message:"Profile Liked Successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({messag:error.message});
    }
}

export const getLikes=async(req,res)=>{
    try {
        const user=await User.findById(req.user._id.toString());
        res.status(200).json({likedBy:user.likedBy});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

