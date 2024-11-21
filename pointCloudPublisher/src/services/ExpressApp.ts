import express, {Application} from "express";
// import {processParticles} from "../utils/process-particles";

export default async (app: Application) => {
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb", extended: true}));

  app.use("/hallo", (req, res) => {
    return res.json({message: "Hello there!"});
  });

  app.post("/store", (req, res) => {
    const {x, y, z, r, g, b} = req.body;

    return res.json({
      message: "Store request ACK",
      data: {x, y, z, r, g, b},
    });
  });

  app.post("/particles", (req, res) => {
    console.log("Request recieved!");
    const payload = req.body;

    // 1. process data <- this should be done in PointCloudIngestor project
    // processParticles(JSON.stringify(payload.pointData));

    // 2. publish to rabbitMQ

    return res.json({
      message: "Particles batch recieved!",
      data: payload,
    });
  });

  return app;
};
