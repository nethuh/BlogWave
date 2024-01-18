import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dbConnection from "./dbConfig/index.js";

import errorMiddleware from "./middleware/errorMiddleware.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

dbConnection()
