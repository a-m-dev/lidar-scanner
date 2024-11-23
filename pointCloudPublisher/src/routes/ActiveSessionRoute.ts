import express from "express";
import {
  CreateActiveSession,
  StopActiveSession,
  publishParticles,
} from "../controllers/SessionsController";

const router = express.Router();

router.post("/init", CreateActiveSession);
router.post("/stop", StopActiveSession);

router.post("/particles", publishParticles);

export {router as SessionRoute};
