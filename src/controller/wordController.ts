import { Request, Response, response } from "express";
import Words from "../db/schema/WordSchema";

export const getWordsController = async (req: Request, res: Response) => {
  try {
    const allWords = await Words.find();
    res.status(200).send(allWords);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
  }
};

export const addWordController = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { word } = req.body;
    const count = await Words.countDocuments();
    const newWord = new Words({
      word: word,
      index: count,
    });
    await newWord.save();

    res.status(201).send(`palabra: ${word} creada correctamente`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
  }
};
