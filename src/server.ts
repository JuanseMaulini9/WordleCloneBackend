import express, { Request, Response, Express } from "express";
import cors from "cors";
import serverRouter from "./routes";
import mongoose from "mongoose";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", serverRouter);
mongoose.connect("mongodb://localhost:27017/wordle");

export default server;
