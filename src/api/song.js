import express from "express";
import { displaySongs } from "../utils/query.js";

const songRouter = express.Router();

songRouter.get("/songs", async (req, res) => {
    const songs = await displaySongs();
    res.status(201).json(songs);
})

export { songRouter };