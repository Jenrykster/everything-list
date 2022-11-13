import { Document, model, Schema } from 'mongoose';

interface IUser {
  username: string,
  passwordHash?: string
}
const userSchema = new Schema<IUser>({
  username: { type: String, required: true, minlength: 4 },
  passwordHash: { type: String, required: true },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject: Document<unknown, any, IUser> & IUser) => {
    const toReturn = { ...returnedObject };
    delete toReturn._id;
    delete toReturn.__v;
    delete toReturn.passwordHash;
    return { ...toReturn, id: returnedObject._id };
  },
});

export default model<IUser>('User', userSchema);
