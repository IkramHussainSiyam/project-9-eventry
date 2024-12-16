// services/mongo.js
import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    throw new Error(error);
  }
}
