export const SERVER_PORT = process.env.SERVER_PORT;
// mongodb://root:example@localhost:27017/point-cloud-storage
export const MONGO_URI = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.DB_NAME}`;
