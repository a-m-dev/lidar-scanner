export const SERVER_PORT = process.env.SERVER_PORT;

const {
  // mongo
  MONGO_DB_USER,
  MONGO_DB_PASS,
  MONGO_DB_HOST,
  MONGO_DB_PORT,
  DB_NAME,
} = process.env;

// mongodb://root:example@localhost:27017/point-cloud-storage
export const MONGO_URI = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_DB_HOST}:${MONGO_DB_PORT}/${DB_NAME}`;
