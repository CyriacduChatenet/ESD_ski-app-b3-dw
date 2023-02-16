import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import ResetTokenPassword from "../models/resetTokenPassword.model";

dotenv.config();

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

  public async createOne(_id: string) {
    const reset_token = await jwt.sign({_id}, String(process.env.JWT_ACCESS_TOKEN));
    return await ResetTokenPassword.create({reset_token, user: [`${_id}`]});
  }

  public async updateOne(id: string, user: Object) {
    return await ResetTokenPassword.findByIdAndUpdate(id, user);
  }

  public async deleteOne(id: string) {
    return await ResetTokenPassword.findByIdAndDelete(id);
  }
}

export default ResetTokenPasswordService;
