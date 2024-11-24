import express, {Application} from "express";
import mongoose from "mongoose";
import {SessionSchema} from "../models/Sessions";
import cors from "cors";

type RequestBatchQueryParams = {
  page: number;
  batchSize: number;
};

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
      const {page = 1, batchSize = 5000} =
        req.query as unknown as RequestBatchQueryParams;

      const offset = (page - 1) * batchSize;
      const model = mongoose.model(sessionId, SessionSchema);
      const result = await model.find().skip(offset).limit(batchSize);

      return res.status(200).json({
        message: `Data collected for page ${page}`,
        size: result.length,
        hasNextPage: result.length === batchSize,
        data: result,
      });

      // TODO: in front end, you call it like:
      // let page = 1;
      // let hasMore = true;

      // while (hasMore) {
      //   const response = await fetch(`/data?page=${page}`);
      //   const {data, hasNextPage} = await response.json();

      //   console.log(data); // Process data
      //   hasMore = hasNextPage;
      //   page++;
      // }
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
