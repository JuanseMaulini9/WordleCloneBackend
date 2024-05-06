import { Document } from "mongoose";

export interface WordsInterface extends Document {
  word: string;
  index: number;
}
