import {RABBITMQ_QUEUE_NAME} from "../config";
import RabbitMQService from "../services/RabbitMQService";

export const ConsumeAndStoreParticlesWorker = async () => {
  try {
    await RabbitMQService.assertQueue(RABBITMQ_QUEUE_NAME);

    console.log(`[INGESTOR]: worker is ready and listening to the queue...`);

    await RabbitMQService.consumeMessage(
      RABBITMQ_QUEUE_NAME,
      (message: string) => {
        if (message != null) {
          console.log("RECEVIED MSG:", message);
        }
      }
    );
  } catch (error) {
    console.log(error);
    console.error("Error listening to queue!");
  }
};
