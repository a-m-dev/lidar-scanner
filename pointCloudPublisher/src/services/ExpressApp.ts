import express, {Application} from "express";
import RabbitMQService from "./RabbitMQService";
import {RABBITMQ_PARTICLES_QUEUE_NAME} from "../config";
import {SessionRoute} from "../routes/ActiveSessionRoute";
import {RABBIT_MSG_TYPES} from "../constants";

export default async (app: Application) => {
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb", extended: true}));

  app.use("/hallo", async (req, res) => {
    try {
      await RabbitMQService.assertQueue(RABBITMQ_PARTICLES_QUEUE_NAME);
      const message = JSON.stringify({
        type: RABBIT_MSG_TYPES.CHECK_HEALTH,
        payload: {one: 1, two: 2, three: 3},
      });
      await RabbitMQService.sendMessage(RABBITMQ_PARTICLES_QUEUE_NAME, message);
      console.log(`Message sent: ${message}`);
    } catch (error) {
      console.log("Error while sending message: ", error);
    }

    return res.json({
      queueAsserted: true,
      message: "Hello there from publisher app!",
    });
  });

  app.post("/store", async (req, res) => {
    const {x, y, z, r, g, b} = req.body;

    return res.json({
      message: "Store request",
      data: {x, y, z, r, g, b},
    });
  });

  app.use("/session", SessionRoute);

  return app;
};
