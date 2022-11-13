import { model, Schema } from 'mongoose';

interface IUser {
  username: string,
  passwordHash: string
}
const userSchema = new Schema<IUser>({
  username: { type: String, required: true, minlength: 4 },
  passwordHash: { type: String, required: true },
});

export default model<IUser>('User', userSchema);
