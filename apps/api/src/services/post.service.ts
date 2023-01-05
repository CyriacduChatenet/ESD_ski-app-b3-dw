import Post from "../models/post.model";

export const getAllPostsService = async () => {
  return await Post.find();
};

export const getPostByIdService = async (id: string) => {
  return await Post.find({ _id: id });
};

export const createPostService = async (post: Object) => {
  return await Post.create(post);
};

export const updatePostService = async (id: string, post: Object) => {
  return await Post.findByIdAndUpdate({ _id: id }, { $set: post });
};
