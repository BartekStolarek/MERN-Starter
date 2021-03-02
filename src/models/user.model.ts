import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  date: Date;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model<IUser>('User', userSchema);
export { User };
