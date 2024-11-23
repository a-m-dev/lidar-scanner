import {Document, Schema} from "mongoose";

export interface SessionDoc extends Document {
  x: number;
  y: number;
  z: number;
  r: number;
  g: number;
  b: number;
}

export const SessionSchema = new Schema(
  {
    x: {type: Number, default: 0.0},
    y: {type: Number, default: 0.0},
    z: {type: Number, default: 0.0},
    r: {type: Number, default: 0.0},
    g: {type: Number, default: 0.0},
    b: {type: Number, default: 0.0},
  },
  {
    toJSON: {
      transform(doc, returnVal) {
        delete returnVal.__v;
      },
    },
  }
);
