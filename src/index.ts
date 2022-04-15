import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import app from "./config/app";

import { noteRouter } from "./routes/note";

import conncetion from "./config/connection";

conncetion();

app.use("/api/notes", noteRouter);

const server = app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`server running on http://localhost:4000 🚀`);
});

export { server };
