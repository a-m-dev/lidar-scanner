import mongoose from "mongoose";
import {RABBITMQ_BATCH_STORE_QUEUE_NAME} from "../config";
import {RABBIT_MSG_TYPES} from "../constants";
import RabbitMQService from "../services/RabbitMQService";
import {SessionSchema} from "../models/Sessions";
import amqp from "amqplib";

type MessageStructure<T = any> = {
  type: (typeof RABBIT_MSG_TYPES)[keyof typeof RABBIT_MSG_TYPES];
  payload: T;
};

export const StoreMessagesWorker = async () => {
  try {
    await RabbitMQService.assertQueue(RABBITMQ_BATCH_STORE_QUEUE_NAME);

    console.log(
      `[INGESTOR]: store message worker is ready and listening to the queue...`
    );

    let targetCollectionName = "";

    await RabbitMQService.consumeMessage(
      RABBITMQ_BATCH_STORE_QUEUE_NAME,
      true,
      async (
        message: string,
        ack: (msg: amqp.Message) => void,
        consumeMessageToAck: amqp.ConsumeMessage
      ) => {
        if (message != null) {
          try {
            const parsedMessage = JSON.parse(message) as MessageStructure;
            switch (parsedMessage.type) {
              case RABBIT_MSG_TYPES.SET_ACTIVE_SESSION: {
                targetCollectionName = parsedMessage.payload;
                break;
              }
              case RABBIT_MSG_TYPES.RESET_ACTIVE_SESSION: {
                targetCollectionName = null;
                break;
              }
              case RABBIT_MSG_TYPES.STORE_PARTICLES_BATCH: {
                if (targetCollectionName) {
                  try {
                    const model = mongoose.model(
                      targetCollectionName,
                      SessionSchema
                    );
                    await model.insertMany(parsedMessage.payload);
                    ack(consumeMessageToAck);
                  } catch (error) {
                    console.log(error);
                    console.log(`[INGESTOR]: Failed to insert many`);
                  }
                }
                break;
              }
              default: {
                // console.log("Nothing to do with this message: ", parsedMessage);
                break;
              }
            }
          } catch (error) {
            console.log("Failed to parse message");
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
    console.error("Error listening to queue!");
  }
};
