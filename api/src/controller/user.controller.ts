import { Request, Response } from "express";
import { UserDTO } from "../dto/user.dto";

import UserService from "../services/user.service";

const userService = new UserService;

class UserController {

  public async findAllUsers(req: Request, res: Response) {
    const shops = await userService.findAll();
    return res.status(200).json(shops);
  };

  public async findOneUserById(req: Request, res: Response) {
    const shop = await userService.findOneById(req.params.id);
    return res.status(200).json(shop);
  };

  public async createUser(req: Request, res: Response) {
    const shop = await userService.createOne(UserDTO(req));
    return res.status(201).json(shop);
  }

  public async updateUser(req: Request, res: Response) {
    const shop = await userService.updateOne(req.params.id, UserDTO(req));
    return res.status(204).json(shop);
  }

  public async deleteUser(req: Request, res: Response) {
    const shop = await userService.deleteOne(req.params.id);
    return res.status(204);
  }
}

export default UserController;
