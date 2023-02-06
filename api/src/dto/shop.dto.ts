import { Request } from "express"

export const ShopDTO = (req: Request) => {
    return {
        name: req.body.name,
        posts: req.body.posts,
        addresse: req.body.addresse,
    }
}