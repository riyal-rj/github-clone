import { configDotenv } from "dotenv";

configDotenv();

export const ENV_VARS={
    PORT:process.env.PORT,
}