import Shop from "../models/shop.model";

class ShopService {

  public async findAll() {
    return await Shop.find().populate(['posts', 'user']);
  };

  public async findOneById(id: string) {
    return await Shop.findById({_id: id}).populate(['posts', 'user']);
  };

  public async createOne(shop: Object) {
    return await Shop.create(shop);
  }

  public async updateOne(id: string, shop: Object) {
    return await Shop.findByIdAndUpdate(id, shop);
  }

  public async deleteOne(id: string) {
    return await Shop.findByIdAndDelete(id);
  }
}

export default ShopService;
