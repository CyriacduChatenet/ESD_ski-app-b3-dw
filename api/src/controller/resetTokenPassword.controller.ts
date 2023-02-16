import { Request, Response } from "express";

import { UserDTO } from "../dto/user.dto";
import ResetTokenPasswordService from "../services/resetTokenPassword.service";
import MailController from "./mail.controller";

const resetTokenPasswordService = new ResetTokenPasswordService();
const mailController = new MailController();

class ResetPasswordTokenController {

  public async findAllResetTokensPassword(req: Request, res: Response) {
    const resetTokenPasswords = await resetTokenPasswordService.findAll();
    return res.status(200).json(resetTokenPasswords);
  };

  public async findOneResetTokenPasswordById(req: Request, res: Response) {
    const resetTokenPassword = await resetTokenPasswordService.findOneById(req.params.id);
    return res.status(200).json(resetTokenPassword);
  };

  public async createResetTokenPassword(req: Request, res: Response) {
    const resetTokenPassword = await resetTokenPasswordService.createOne(req.params._id);
    return res.status(201).json(resetTokenPassword);
  }

  public async updateResetTokenPassword(req: Request, res: Response) {
    const resetTokenPassword = await resetTokenPasswordService.updateOne(req.params.id, UserDTO(req));
    return res.status(204).json(resetTokenPassword);
  }

  public async deleteResetTokenPassword(req: Request, res: Response) {
    const resetTokenPassword = await resetTokenPasswordService.deleteOne(req.params.id);
    return res.status(204);
  }
}

export default ResetPasswordTokenController;
