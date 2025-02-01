import { ENV_VARS } from "../env/env.variables.js";

export const explorePopularRepos = async (req, res) => {
    const {language}=req.params;
    try {
        const response=await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,{
            headers: {
                authorization:`token ${ENV_VARS.AUTH_GITHUB_API_KEY}`,
            },
        });
        const repos=await response.json();
        res.status(200).json(
            {
                repos:repos.items
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                message:error.message
            }
        );
    }
}