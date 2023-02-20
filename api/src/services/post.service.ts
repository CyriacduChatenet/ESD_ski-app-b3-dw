import { Request } from "express";

import Post from "../models/post.model";

export class PostService {
  
  public async findAll () {
    return await Post.find().populate(['comments', 'bookings']);
  };

  public async FindOneById (req: Request) {
    return await Post.find({ _id: req.params.id }).populate(['comments', 'bookings']);
  };

  public async createOne (post: Object) {
    return await Post.create(post);
  };

  public async updateOne (id: string, post: Object) {
    return await Post.findByIdAndUpdate({ _id: id }, { $set: post });
  };

  public async deleteOne (req: Request) {
    return await Post.findByIdAndDelete({_id: req.params.id});
  };
}