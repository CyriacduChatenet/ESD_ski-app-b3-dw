import { IUser } from "./user.type.";

export type IResetTokenPassword = {
    reset_token: string;
    user: IUser;
};