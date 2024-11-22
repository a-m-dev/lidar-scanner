import mongoose from "mongoose";
import {MONGO_URI} from "../config";

export default async () => {
  try {
    console.log(`[DB]: MONGO_URI: ${MONGO_URI}`);

    await mongoose.connect(MONGO_URI, {
      authSource: "admin",
    });

    console.log("[DB]: connection success!");
  } catch (error) {
    console.log(error);
    console.log("[DB]: connection failed!");
  }
};
