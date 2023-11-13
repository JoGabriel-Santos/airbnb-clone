import express from "express";
import cors from "cors";

import roomRouter from "./routes/roomRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/room", roomRouter);
app.use("/user", userRouter);

app.get("/", (request, response) => {
    response.send("APP IS RUNNING...");
});

export default app;