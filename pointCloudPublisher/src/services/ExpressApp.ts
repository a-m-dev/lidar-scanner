import express, {Application} from "express";
import RabbitMQService from "./RabbitMQService";
import {RABBITMQ_QUEUE_NAME} from "../config";
import {processParticles} from "../utils/process-particles";
import {SessionRoute} from "../routes/ActiveSessionRoute";

export default async (app: Application) => {
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb", extended: true}));

  app.use("/hallo", async (req, res) => {
    // try {
    //   await RabbitMQService.assertQueue(RABBITMQ_QUEUE_NAME);
    //   const message = JSON.stringify({one: 1, two: 2, three: 3});
    //   await RabbitMQService.sendMessage(RABBITMQ_QUEUE_NAME, message);
    //   console.log(`Message sent: ${message}`);
    // } catch (error) {
    //   console.log("Error while sending message: ", error);
    // }

    return res.json({message: "Hello there from publisher app!"});
  });

  app.post("/store", async (req, res) => {
    const {x, y, z, r, g, b} = req.body;

    return res.json({
      message: "Store request ACK",
      data: {x, y, z, r, g, b},
    });
  });

  app.use("/session", SessionRoute);

  return app;
};
