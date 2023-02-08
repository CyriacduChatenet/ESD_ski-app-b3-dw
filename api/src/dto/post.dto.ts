import { Request } from "express"

export const PostDTO = (req: Request) => {
    return {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        weight: req.body.weight,
        size: req.body.size,
        style: req.body.style,
        price: req.body.price,
        description: req.body.description,
        comments: req.body.comments,
        createdAt: req.body.createdAt,
        bookings: req.body.bookings,
        isAvailable: req.body.isAvailable,
    }
}