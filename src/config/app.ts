import express from "express";
import cors from "cors";

const app = express();

app.set("trust-proxy", 1);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["*", "http://localhost:3000"],
  })
);

export default app;
