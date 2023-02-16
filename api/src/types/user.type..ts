import { IResetTokenPassword } from "./reset_token.type";

export type IUser = {
    username: string;
    email: string;
    password: string;
    resetTokenPassword: IResetTokenPassword[];
}