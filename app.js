import express from "express"
import session from "express-session";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentsRoutes from "./assignments/routes.js";

const app = express()

app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

const CONNECTION_STRING =
    process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'

mongoose.connect(CONNECTION_STRING);


app.use(session(sessionOptions));
app.use(express.json());
app.use(cors());

AssignmentsRoutes(app)
ModuleRoutes(app)
CourseRoutes(app);
Lab5(app);
Hello(app)
UserRoutes(app);

app.listen(process.env.PORT || 4000);
