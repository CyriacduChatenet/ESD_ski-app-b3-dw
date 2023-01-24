import { model, Schema, SchemaTypes } from "mongoose";

import IPost from "../types/post.type";

const postSchema = new Schema<IPost>({
  title: String,
  image_url: String,
  weight: Number,
  size: Number,
  style: String,
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isAvailable: Boolean,
  bookings: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Booking",
    },
  ],
  comments: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ]
});

const Post = model("Post", postSchema);

export default Post;
