import app from "./app.js";
import {createServer} from "http";
import { ENV_VARS } from "./env/env.variables.js";

const server=createServer(app);

const PORT=ENV_VARS.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})