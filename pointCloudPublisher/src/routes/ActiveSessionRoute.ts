import express, {Request, Response, NextFunction} from "express";
import {CreateActiveSession} from "../controllers/SessionsController";

const router = express.Router();

router.post("/init", CreateActiveSession);

// router.post("/particles", processParticles)

export {router as SessionRoute};
