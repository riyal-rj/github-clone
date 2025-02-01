import express from "express";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import exploreRoutes from "./routes/explore.routes.js";
import { connectDB } from "./db/mongo.db.config.js";
import "./oAuth/github.auth.passport.js";
const app=express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use(session({secret:"keyboard cat",resave:false,saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/explore',exploreRoutes);

connectDB();

export default app;