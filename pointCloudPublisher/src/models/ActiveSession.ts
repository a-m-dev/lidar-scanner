import mongoose, {Document, Schema} from "mongoose";

interface ActiveSessionDoc extends Document {
  name: string;
}

const ActiveSessionSchema = new Schema(
  {
    name: {type: String},
  },
  {
    toJSON: {
      transform(doc, returnVal) {
        delete returnVal.__v;
      },
    },
    timestamps: true,
  }
);

const ActiveSession = mongoose.model<ActiveSessionDoc>(
  "active_session",
  ActiveSessionSchema
);

export {ActiveSession};
