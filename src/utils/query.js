import { songCollection } from "../db.js";

const insertSong = async (document) => {
    const result = await songCollection.insertMany(document);
    console.log("Song successfully inserted", result.insertedIds);
}

const displaySongs = async () => {
    const result = songCollection.find();
    return await result.toArray();
}

export { insertSong, displaySongs };