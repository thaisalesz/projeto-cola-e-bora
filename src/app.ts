import "reflect-metadata";
import "express-async-errors";
import express from "express";
import checkErrorMiddleware from "./middlewares/checkError.middleware";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use(checkErrorMiddleware);

export default app;
