import amqp, {Channel, Connection} from "amqplib";
import {RABBITMQ_URI} from "../config";

class RabbitMQService {
  private connection: Connection | null = null;
  private channel: Channel | null = null;

  async connect(): Promise<void> {
    try {
      console.log(`RABBITMQ_URI: ${RABBITMQ_URI}`);

      this.connection = await amqp.connect(RABBITMQ_URI);
      this.channel = await this.connection.createChannel();
      console.log("[RabbitMQ]: connection success!");
    } catch (error) {
      console.log(error);
      console.log("[RabbitMQ]: connection failed!");
    }
  }

  async assertQueue(queueName: string): Promise<void> {
    if (!this.channel) {
      throw new Error("[RabbitMQ]: channel is not initialized!");
    }
    await this.channel.assertQueue(queueName);
  }

  async sendMessage(queueName: string, message: string): Promise<void> {
    if (!this.channel) {
      throw new Error("[RabbitMQ]: channel is not initialized!");
    }
    this.channel.sendToQueue(queueName, Buffer.from(message));
  }

  async consumeMessage(
    queueName: string,
    ackAvailableInCallback: boolean = false,
    cb: (
      msg: string,
      ack?: (msg: amqp.Message) => void,
      consumeMessageToAck?: amqp.ConsumeMessage
    ) => void
  ): Promise<void> {
    if (!this.channel) {
      throw new Error("[RabbitMQ]: channel is not initialized!");
    }

    await this.channel.consume(queueName, (msg) => {
      if (msg) {
        if (ackAvailableInCallback) {
          cb(msg.content.toString(), this.channel.ack, msg);
        } else {
          cb(msg.content.toString());
          this.channel.ack(msg);
        }
      }
    });
  }

  async close(): Promise<void> {
    if (this.channel) await this.channel.close();
    if (this.connection) await this.connection.close();
    console.log("[RabbitMQ]: connection closed!");
  }
}

export default new RabbitMQService();
