import express from "express"
import "dotenv/config";
import cors from "cors";
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


app.use(cors());
app.use(express.json());

AssignmentsRoutes(app)
ModuleRoutes(app)
CourseRoutes(app);
Lab5(app);
Hello(app)

app.listen(process.env.PORT || 4000);
