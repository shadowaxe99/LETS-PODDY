import mongoose, { Schema, Document } from 'mongoose';

export interface Audio extends Document {
  title: string;
  artist: string;
  duration: number;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const audioSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Audio>('Audio', audioSchema);