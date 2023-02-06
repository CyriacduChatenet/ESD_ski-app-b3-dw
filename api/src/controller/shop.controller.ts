import { Request, Response } from "express";
import { ShopDTO } from "../dto/shop.dto";
import ShopService from "../services/shop.service";

const shopService = new ShopService;

class ShopController {

  public async findAllShops(req: Request, res: Response) {
    const shops = await shopService.findAll();
    return res.status(200).json(shops);
  };

  public async findOneShopById(req: Request, res: Response) {
    const shop = await shopService.findOneById(req.params.id);
    return res.status(200).json(shop);
  };

  public async createShop(req: Request, res: Response) {
    const shop = await shopService.createOne(ShopDTO(req));
    return res.status(201).json(shop);
  }

  public async updateShop(req: Request, res: Response) {
    const shop = await shopService.updateOne(req.params.id, ShopDTO(req));
    return res.status(204).json(shop);
  }

  public async deleteShop(req: Request, res: Response) {
    const shop = await shopService.deleteOne(req.params.id);
    return res.status(204);
  }
}

export default ShopController;
