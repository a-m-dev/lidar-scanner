import mongoose from "mongoose";
import {
  // RABBITMQ_BATCH_STORE_QUEUE_NAME,
  RABBITMQ_PARTICLES_QUEUE_NAME,
} from "../config";
import {RABBIT_MSG_TYPES} from "../constants";
import RabbitMQService from "../services/RabbitMQService";
// import amqp from "amqplib";
import {SessionSchema} from "../models/Sessions";

type MessageStructure<T = any> = {
  type: (typeof RABBIT_MSG_TYPES)[keyof typeof RABBIT_MSG_TYPES];
  payload: T;
};

export const DigestMessagesWorker = async () => {
  const DEFAULY_BATCH_SIZE = 5000;
  let targetCollectionName = "";
  let isWorkerActive = false;
  let batch = [];

  try {
    await RabbitMQService.assertQueue(RABBITMQ_PARTICLES_QUEUE_NAME);
    // await RabbitMQService.assertQueue(RABBITMQ_BATCH_STORE_QUEUE_NAME);

    console.log(
      `[INGESTOR]: digest msg worker is ready and listening to the queue`
    );

    await RabbitMQService.consumeMessage(
      RABBITMQ_PARTICLES_QUEUE_NAME,
      false,
      async (message: string) => {
        if (message != null) {
          console.log("RECEVIED MSG:", message);

          try {
            const parsedMessage = JSON.parse(message) as MessageStructure;
            switch (parsedMessage.type) {
              case RABBIT_MSG_TYPES.CHECK_HEALTH: {
                break;
              }
              case RABBIT_MSG_TYPES.SET_ACTIVE_SESSION: {
                targetCollectionName = parsedMessage.payload;
                break;
              }
              case RABBIT_MSG_TYPES.RESET_ACTIVE_SESSION: {
                targetCollectionName = null;
                break;
              }
              case RABBIT_MSG_TYPES.PUBLISH_PARTICLE: {
                const [x, y, z, r, g, b] = parsedMessage.payload;
                batch.push({x, y, z, r, g, b});

                // if (batch.length >= DEFAULY_BATCH_SIZE) {
                //   await RabbitMQService.sendMessage(
                //     RABBITMQ_BATCH_STORE_QUEUE_NAME,
                //     JSON.stringify({
                //       type: RABBIT_MSG_TYPES.STORE_PARTICLES_BATCH,
                //       payload: batch,
                //     })
                //   );
                //   batch = [];
                // }

                // Trigger worker if not already running
                if (!isWorkerActive) processQueue(batch);
                break;
              }
              default: {
                // console.log("Nothing to do with this message: ", parsedMessage);
                break;
              }
            }
          } catch (error) {
            console.log(error);
            console.log("Failed to parse message");
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
    console.error("Error listening to queue!");
  }

  // Worker function to process the queue
  async function processQueue(collection) {
    if (batch.length === 0) {
      isWorkerActive = false;
      return; // Stop worker if queue is empty
    }

    isWorkerActive = true;

    // Extract a batch
    const targetBatch = batch.splice(0, DEFAULY_BATCH_SIZE);

    try {
      const model = mongoose.model(targetCollectionName, SessionSchema);
      await model.insertMany(targetBatch);
      console.log(`Inserted batch of ${targetBatch.length}`);
    } catch (error) {
      console.error("Error inserting batch:", error);
      batch.unshift(...targetBatch); // Re-add batch to the queue on failure
    }

    // Continue processing recursively
    processQueue(collection);
  }
};
