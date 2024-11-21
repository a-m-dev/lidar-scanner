require("dotenv").config();
import express from "express";
import {SERVER_PORT} from "./config";
import App from "./services/ExpressApp";

const startServer = async () => {
  const app = express();

  await App(app);

  app.listen(SERVER_PORT, () => {
    console.log(`publisher server is up on port: ${SERVER_PORT}`);
  });
};

startServer();
