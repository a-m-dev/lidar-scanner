import express, {Application} from "express";
import mongoose from "mongoose";
import {SessionSchema} from "../models/Sessions";
import cors from "cors";

export default async (app: Application) => {
  app.use(cors());
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb", extended: true}));

  app.use("/hallo", async (req, res) => {
    return res.json({message: "Hello there from Reader service!"});
  });

  app.get("/session/:sessionId", async (req, res) => {
    try {
      const {sessionId} = req.params;
      const model = mongoose.model(sessionId, SessionSchema);
      const result = await model.find();
      // .skip(50 * 1000)
      // .limit(5000);

      return res.status(200).json({
        message: "Data collected",
        size: result.length,
        data: result,
      });
    } catch (error) {
      console.log(error);
      console.log(`[Reader]: failed to get data`);
      return res.status(400).json({
        message: "Bad Request",
      });
    }
  });

  return app;
};
