import { songRouter } from "./api/song.js";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", songRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`)
})