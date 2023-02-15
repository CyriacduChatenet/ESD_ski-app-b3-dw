import { model, Schema } from "mongoose";
import { IUser } from "../types/user.type.";

const userSchema = new Schema<IUser>({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const User = model<IUser>("users", userSchema);

export default User;