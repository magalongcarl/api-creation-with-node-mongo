import { MongoClient } from "mongodb";

const uri = process.env.MONGODB;
const client = new MongoClient(uri);

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch(err) {
        console.error('Connection failed:', err);
    }
}

const database = client.db("albumshop");
const songCollection = database.collection("song");

export { connectDB, songCollection };