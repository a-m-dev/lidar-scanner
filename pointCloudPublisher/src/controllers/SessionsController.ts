import {getRandomComputerScientistName} from "../utils/CSNames";
import {ActiveSession} from "../models/ActiveSession";
import mongoose from "mongoose";
import {SessionDoc, SessionSchema} from "../models/Sessions";
import {AllSessions} from "../models/AllSessions";

export const CreateActiveSession = async (req, res) => {
  // 1. create active session name
  const collectionName = `${new Date().getTime()}__${getRandomComputerScientistName()}`;

  // 2. find if there is ant active session
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

  return res.status(200).json({
    collectionName,
    activeSession,
  });
};
