import dotenv from "dotenv";
dotenv.config();
const { NODE_ENV } = process.env;

import { localInit } from "./connections/local";
import { prodInit } from "./connections/production";

// (async () => {
//   NODE_ENV === "production" ? await prodInit() : await localInit();
// })();

const conncetion = async () => {
  NODE_ENV === "development" ? await localInit() : await prodInit();
};

export default conncetion;
