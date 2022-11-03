import "reflect-metadata";
import "express-async-errors";
import express from "express";
import checkErrorMiddleware from "./middlewares/checkError.middleware";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import ongsRoutes from "./routes/ong.routes";
import eventsRoutes from "./routes/events.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/ongs", ongsRoutes);
app.use("/events", eventsRoutes)

app.use(checkErrorMiddleware);

export default app;
