import dotenv from "dotenv";
dotenv.config();

//primary database
const DB_URI = process.env.MONGO_ATLAS_DB_URI.replace('<db_password>', process.env.MONGO_ATLAS_PASSCODE);

export const ENV_VARS={
    PORT:process.env.PORT,
    MONGO_ATLAS_DB_URI:DB_URI
}