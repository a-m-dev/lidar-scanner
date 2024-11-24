import {getRandomComputerScientistName} from "../utils/CSNames";
import {ActiveSession} from "../models/ActiveSession";
import mongoose from "mongoose";
import {SessionDoc, SessionSchema} from "../models/Sessions";
import {AllSessions} from "../models/AllSessions";
import RabbitMQService from "../services/RabbitMQService";
import {processParticles} from "../utils/process-particles";
import {RABBITMQ_PARTICLES_QUEUE_NAME} from "../config";
import {RABBIT_MSG_TYPES} from "../constants";
import {IsRecordingModel} from "../models/IsRecording";

export const CreateActiveSession = async (req, res) => {
  // 1. create active session name
  const collectionName = `${new Date().getTime()}__${getRandomComputerScientistName()}`;

  // 2. find if there is any active session
  const foundedActiveSession = await ActiveSession.find();

  // 3. create or update active session
  let activeSession;
  if (foundedActiveSession.length === 0) {
    // create active session and set it to the collection name
    activeSession = await ActiveSession.create({
      name: collectionName,
    });
    console.log("Active session created: ", collectionName);
  } else {
    // update active session
    activeSession = foundedActiveSession[0];
    activeSession.name = collectionName;
    await activeSession.save();
    console.log("Active session updated: ", collectionName);
  }

  // 4. store name into all Sessions
  await AllSessions.create({
    name: collectionName,
  });

  // 5. create collection for active session
  mongoose.model<SessionDoc>(collectionName, SessionSchema);

  // 6. send a message to set active session in worker!
  try {
    const message = JSON.stringify({
      type: RABBIT_MSG_TYPES.SET_ACTIVE_SESSION,
      payload: collectionName,
    });
    await RabbitMQService.sendMessage(RABBITMQ_PARTICLES_QUEUE_NAME, message);
    console.log(`Message sent: ${message}`);
  } catch (error) {
    console.log("Error while sending message: ", error);
  }

  return res.status(200).json({
    collectionName,
    activeSession,
  });
};

export const StopActiveSession = async (req, res) => {
  // find if there is any active session
  const foundedActiveSession = await ActiveSession.find();

  if (foundedActiveSession.length !== 0) {
    const activeSession = foundedActiveSession[0];
    activeSession.name = null;
    await activeSession.save();
    console.log("Active session being set to null");

    // send a message to set active session in worker!
    try {
      const message = JSON.stringify({
        type: RABBIT_MSG_TYPES.RESET_ACTIVE_SESSION,
        payload: "",
      });
      await RabbitMQService.sendMessage(RABBITMQ_PARTICLES_QUEUE_NAME, message);
      console.log(`Message sent: ${message}`);
    } catch (error) {
      console.log("Error while sending message: ", error);
    }
  }

  return res.status(200).json({
    message: "active session stopped!",
  });
};

export const publishParticles = async (req, res) => {
  console.log("Request recieved!");
  const payload = req.body;

  // 1. process data <- this should be done in PointCloudIngestor project
  const batch = processParticles(JSON.stringify(payload.pointData));

  // 2. publish to rabbitMQ, send points in parallel
  const promises = batch.map(async (particle) => {
    try {
      console.log(`Message sent: ${JSON.stringify(particle)}`);

      return RabbitMQService.sendMessage(
        RABBITMQ_PARTICLES_QUEUE_NAME,
        JSON.stringify({
          type: RABBIT_MSG_TYPES.PUBLISH_PARTICLE,
          payload: particle,
        })
      );
    } catch (error) {
      console.log("Error while sending message: ", error);
    }
  });

  await Promise.all(promises);

  return res.json({
    message: "Particles batch recieved!",
    data: payload,
  });
};

export const handleRecordingStatus = async (req, res) => {
  const {status} = req.body;

  // 1. find if there is any IsRecording
  const foundedIsRecordingInstance = await IsRecordingModel.find();

  // 2. create or update active session
  let isRecordingInstance;
  if (foundedIsRecordingInstance.length === 0) {
    // create active session and set it to the collection name
    isRecordingInstance = await IsRecordingModel.create({
      isRecording: status,
    });
    console.log("IsRecording created to: ", status);
  } else {
    // update isRecording
    isRecordingInstance = foundedIsRecordingInstance[0];
    isRecordingInstance.isRecording = status;
    await isRecordingInstance.save();
    console.log("IsRecording updated to: ", status);
  }

  return res.status(200).json({
    message: status ? "recording started" : "recording stopped",
  });
};
