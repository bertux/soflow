import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    _id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
