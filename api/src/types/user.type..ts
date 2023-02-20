import { IResetTokenPassword } from "./reset_token.type";
import { IShop } from "./shop.type";

export type IUser = {
    username: string;
    email: string;
    password: string;
    resetTokenPassword?: IResetTokenPassword;
    shop?: IShop[];
}