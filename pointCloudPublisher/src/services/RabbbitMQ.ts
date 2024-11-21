import RabbitMQService from "./RabbitMQService";

export default async () => {
  try {
    await RabbitMQService.connect();
  } catch (error) {
    console.log(error);
    console.log("[RabbitMQ]: failed to connect to service!");
  }
};
