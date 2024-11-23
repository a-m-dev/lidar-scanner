export const SERVER_PORT = process.env.SERVER_PORT;

const {
  // mongo
  MONGO_DB_USER,
  MONGO_DB_PASS,
  MONGO_DB_HOST,
  MONGO_DB_PORT,
  DB_NAME,

  // rabitmq
  RABBITMQ_USER,
  RABBITMQ_PASS,
  RABBITMQ_HOST,
  RABBITMQ_PORT,
} = process.env;

// mongodb://root:example@localhost:27017/point-cloud-storage
export const MONGO_URI = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_DB_HOST}:${MONGO_DB_PORT}/${DB_NAME}`;

// 'amqp://guest:guest@localhost:5672'
export const RABBITMQ_URI = `amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`;

export const RABBITMQ_PARTICLES_QUEUE_NAME =
  process.env.RABBITMQ_PARTICLES_QUEUE;
