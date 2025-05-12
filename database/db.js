import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  let db = await client.connect();
  return db;
};
