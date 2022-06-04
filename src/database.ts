import mongoose from "mongoose";
import "dotenv"
// const connection = `mongodb://${process.env.MONGO_HOST}:27017/${process.env.MONGO_DATABASE}` 
export default async function connectDB() {
  try {
    const db = await mongoose.connect( 'mongodb://localhost:27017/movietheater');
    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
}