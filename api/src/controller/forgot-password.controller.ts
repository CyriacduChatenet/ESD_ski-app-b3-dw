import { Request, Response } from 'express';

import ResetTokenPasswordService from '../services/resetTokenPassword.service';
import UserService from '../services/user.service';
import MailController from './mail.controller';

const mailController = new MailController();
const userService = new UserService();
const resetTokenPasswordService = new ResetTokenPasswordService()

class ForgotPasswordController {
    public sendToken = async (req:Request, res: Response) => {
        try {
            const userInDB = await userService.findOneByEmail(req.body.email) as any;
            const resetToken = await resetTokenPasswordService.createOne(userInDB._id);
            userService.updateOne(userInDB._id, {resetTokenPassword: resetToken._id})
            return mailController.sendResetPasswordMail(req.body.email)
        } catch (err: any) {
            throw new Error(err);
        }
    }; 
}

export default ForgotPasswordController;