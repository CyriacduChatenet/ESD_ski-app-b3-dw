import User from "../models/user.model";


class UserService {

  public async findAll() {
    return await User.find().populate(['resetTokenPassword','shop']);
  };

  public async findOneById(id: string) {
    return await User.findById({_id: id}).populate(['resetTokenPassword','shop']);
  };

  public async findOneByEmail(email: string) {
    return await User.findOne({email: email}).populate(['resetTokenPassword','shop']);
  };

  public async createOne(shop: Object) {
    return await User.create(shop);
  }

  public async updateOne(id: string, shop: Object) {
    return await User.findByIdAndUpdate(id, shop);
  }

  public async deleteOne(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

export default UserService;
