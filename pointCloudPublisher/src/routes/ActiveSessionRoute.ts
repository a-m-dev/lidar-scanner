import express from "express";
import {
  CreateActiveSession,
  StopActiveSession,
  publishParticles,
  handleRecordingStatus,
} from "../controllers/SessionsController";

const router = express.Router();

router.post("/init", CreateActiveSession);
router.post("/stop", StopActiveSession);

router.post("/particles", publishParticles);

router.post("/set-is-recording", handleRecordingStatus);

export {router as SessionRoute};
