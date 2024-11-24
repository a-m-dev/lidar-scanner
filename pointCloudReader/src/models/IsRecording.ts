import mongoose, {Document, Schema} from "mongoose";

interface IsRecordingDoc extends Document {
  isRecording: string;
}

const IsRecordingSchema = new Schema(
  {
    isRecording: {type: Boolean},
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

const IsRecordingModel = mongoose.model<IsRecordingDoc>(
  "is_recording",
  IsRecordingSchema
);

export {IsRecordingModel};
