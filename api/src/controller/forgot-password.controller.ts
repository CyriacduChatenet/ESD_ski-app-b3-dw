import { Request, Response } from 'express';

import ResetTokenPasswordService from '../services/resetTokenPassword.service';
import UserService from '../services/user.service';
import { IUser } from '../types/user.type.';
import MailController from './mail.controller';

const mailController = new MailController();
const userService = new UserService();
const resetTokenPasswordService = new ResetTokenPasswordService()

class ForgotPasswordController {
    public sendToken = async (req:Request, res: Response) => {
        try {
            const userInDB = await userService.findOneByEmail(req.body.email) as any;
            resetTokenPasswordService.createOne(userInDB._id);
            return mailController.sendResetPasswordMail(req.body.email)
        } catch (err: any) {
            throw new Error(err);
        }
    }; 
}

export default ForgotPasswordController;