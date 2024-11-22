import express, {Application} from "express";
import RabbitMQService from "./RabbitMQService";
import {RABBITMQ_QUEUE_NAME} from "../config";

export default async (app: Application) => {
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb", extended: true}));

  app.use("/hallo", async (req, res) => {
    return res.json({message: "Hello there from Ingestor service!"});
  });

  app.post("/particles", async (req, res) => {
    console.log("Request recieved!");
    const payload = req.body;

    // 1. process data <- this should be done in PointCloudIngestor project
    // const batch = processParticles(JSON.stringify(payload.pointData));

    // 2. publish to rabbitMQ
    // store points in batch

    return res.json({
      message: "Particles batch recieved!",
      data: payload,
    });
  });

  return app;
};
