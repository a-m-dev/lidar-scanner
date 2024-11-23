import express, {Request, Response, NextFunction} from "express";
import {
  CreateActiveSession,
  publishParticles,
} from "../controllers/SessionsController";

const router = express.Router();

router.post("/init", CreateActiveSession);

router.post("/particles", publishParticles);

export {router as SessionRoute};
