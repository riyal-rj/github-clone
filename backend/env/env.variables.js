import dotenv from "dotenv";
dotenv.config();

//primary database
const DB_URI = process.env.MONGO_ATLAS_DB_URI.replace('<db_password>', process.env.MONGO_ATLAS_PASSCODE);

export const ENV_VARS={
    PORT:process.env.PORT,
    MONGO_ATLAS_DB_URI:DB_URI,
    AUTH_GITHUB_API_KEY:process.env.GITHUB_API_KEY,
    GITHUB_CLIENT_ID:process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET:process.env.GITHUB_CLIENT_SECRET,
    CLIENT_URL:process.env.CLIENT_URL
}