import ResetTokenPassword from "../models/resetTokenPassword.model";


class ResetTokenPasswordService {

  public async findAll() {
    return await ResetTokenPassword.find().populate(['user']);
  };

  public async findOneById(id: string) {
    return await ResetTokenPassword.findById({_id: id}).populate(['user']);
  };

  public async findOneByEmail(email: string) {
    return await ResetTokenPassword.findOne({email}).populate(['user']);
  };

  public async createOne(user: Object) {
    return await ResetTokenPassword.create(user);
  }

  public async updateOne(id: string, user: Object) {
    return await ResetTokenPassword.findByIdAndUpdate(id, user);
  }

  public async deleteOne(id: string) {
    return await ResetTokenPassword.findByIdAndDelete(id);
  }
}

export default ResetTokenPasswordService;
