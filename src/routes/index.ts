import express, { Request, Response, Express } from "express";
import wordsRouter from "./WordRoute";

const serverRouter = express();

const rootRouter = express.Router();

rootRouter.get("/", (req: Request, res: Response) => {
  res.send("hola pibes");
});

serverRouter.use("/words", wordsRouter);

export default serverRouter;
