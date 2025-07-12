import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        url: { type: String, required: true, trim: true },
        author: { type: String, required: true, trim: true },
        publishedDate: { type: Date, required: true }
    },
    { timestamps: true }
);

export const Game = mongoose.model("Game", gameSchema);
