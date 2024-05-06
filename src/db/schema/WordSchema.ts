import mongoose, { Document, Schema } from "mongoose";
import { WordsInterface } from "../../types";

const wordsSchema: Schema = new Schema({
  word: { type: String, require: true },
  index: { type: Number, require: true },
});

const Words = mongoose.model<WordsInterface>("Words", wordsSchema);

export default Words;
