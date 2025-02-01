import { ENV_VARS } from "../env/env.variables.js";

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