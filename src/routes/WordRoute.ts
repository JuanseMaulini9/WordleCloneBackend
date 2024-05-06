import express from "express";
import {
  getWordsController,
  addWordController,
} from "../controller/wordController";

const router = express.Router();

router.get("/", getWordsController);
router.post("/", addWordController);

export default router;
