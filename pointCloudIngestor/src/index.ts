require("dotenv").config();
import express from "express";
import {SERVER_PORT} from "./config";
import App from "./services/ExpressApp";
import DatabaseConnection from "./services/Database";
import RabbitMqConnection from "./services/RabbbitMQ";
import {DigestMessagesWorker} from "./workers/DigestMessagesWorker";

const startServer = async () => {
  const app = express();

  await DatabaseConnection();

  await RabbitMqConnection();
  await DigestMessagesWorker();

  await App(app);

  app.listen(SERVER_PORT, () => {
    console.log(`ingestor server is up on port: ${SERVER_PORT}`);
  });
};

startServer();
