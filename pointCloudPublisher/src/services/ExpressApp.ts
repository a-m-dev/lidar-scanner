import express, {Application} from "express";
import RabbitMQService from "./RabbitMQService";
import {RABBITMQ_QUEUE_NAME} from "../config";
import {processParticles} from "../utils/process-particles";

export default async (app: Application) => {
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb", extended: true}));

  app.use("/hallo", async (req, res) => {
    try {
      await RabbitMQService.assertQueue(RABBITMQ_QUEUE_NAME);
      const message = JSON.stringify({one: 1, two: 2, three: 3});
      await RabbitMQService.sendMessage(RABBITMQ_QUEUE_NAME, message);
      console.log(`Message sent: ${message}`);
    } catch (error) {
      console.log("Error while sending message: ", error);
    }

    return res.json({message: "Hello there from publisher app!"});
  });

  app.post("/store", async (req, res) => {
    const {x, y, z, r, g, b} = req.body;

    return res.json({
      message: "Store request ACK",
      data: {x, y, z, r, g, b},
    });
  });

  app.post("/particles", async (req, res) => {
    console.log("Request recieved!");
    const payload = req.body;

    // 1. process data <- this should be done in PointCloudIngestor project
    const batch = processParticles(JSON.stringify(payload.pointData));

    // 2. publish to rabbitMQ
    // send points in parallel
    await RabbitMQService.assertQueue(RABBITMQ_QUEUE_NAME);
    const promises = batch.map(async (particle) => {
      try {
        console.log("------------------------------------------------------");
        console.log(`Message sent: ${JSON.stringify(particle)}`);
        console.log("------------------------------------------------------");

        return RabbitMQService.sendMessage(
          RABBITMQ_QUEUE_NAME,
          JSON.stringify(particle)
        );
      } catch (error) {
        console.log("Error while sending message: ", error);
      }
    });

    await Promise.all(promises);

    return res.json({
      message: "Particles batch recieved!",
      data: payload,
    });
  });

  return app;
};
