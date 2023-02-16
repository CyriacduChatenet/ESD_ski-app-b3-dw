import { Request } from "express"

export const UserDTO = (req: Request) => {
    return {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
}