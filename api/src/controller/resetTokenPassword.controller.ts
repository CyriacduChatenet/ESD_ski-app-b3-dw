import { Request, Response } from "express";

import { UserDTO } from "../dto/user.dto";
import ResetTokenPasswordService from "../services/resetTokenPassword.service";

const resetTokenPasswordService = new ResetTokenPasswordService();

class ResetPasswordTokenController {

  public async findAllResetTokensPassword(req: Request, res: Response) {
    const shops = await resetTokenPasswordService.findAll();
    return res.status(200).json(shops);
  };

  public async findOneResetTokenPasswordById(req: Request, res: Response) {
    const shop = await resetTokenPasswordService.findOneById(req.params.id);
    return res.status(200).json(shop);
  };

  public async createResetTokenPassword(req: Request, res: Response) {
    const shop = await resetTokenPasswordService.createOne(UserDTO(req));
    return res.status(201).json(shop);
  }

  public async updateResetTokenPassword(req: Request, res: Response) {
    const shop = await resetTokenPasswordService.updateOne(req.params.id, UserDTO(req));
    return res.status(204).json(shop);
  }

  public async deleteResetTokenPassword(req: Request, res: Response) {
    const shop = await resetTokenPasswordService.deleteOne(req.params.id);
    return res.status(204);
  }
}

export default ResetPasswordTokenController;
