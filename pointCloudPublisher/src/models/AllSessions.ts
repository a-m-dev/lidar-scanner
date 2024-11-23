import mongoose, {Document, Schema} from "mongoose";

interface AllSessionsDoc extends Document {
  name: string;
}

const AllSessionsSchema = new Schema(
  {
    name: {type: String, required: true},
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

const AllSessions = mongoose.model<AllSessionsDoc>(
  "all_sessions",
  AllSessionsSchema
);

export {AllSessions};
