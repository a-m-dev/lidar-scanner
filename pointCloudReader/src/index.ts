require("dotenv").config();
import express from "express";
import {SERVER_PORT} from "./config";
import App from "./services/ExpressApp";
import DatabaseConnection from "./services/Database";

const startServer = async () => {
  const app = express();

  await DatabaseConnection();

  await App(app);

  app.listen(SERVER_PORT, () => {
    console.log(`Reader server is up on port: ${SERVER_PORT}`);
  });
};

startServer();
