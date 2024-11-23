import express, {Application} from "express";

export default async (app: Application) => {
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb", extended: true}));

  app.use("/hallo", async (req, res) => {
    return res.json({message: "Hello there from Reader service!"});
  });

  return app;
};
