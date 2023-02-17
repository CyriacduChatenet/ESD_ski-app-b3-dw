import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const validateUser = (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        if(!token) {
            return res.status(401).send('Unauthorized')
        }
        const decodedToken = jwt.verify(token, String(process.env.JWT_ACCESS_TOKEN))
        if(!decodedToken) {
            return res.status(401).send('Unauthorized')
        }
        req.user = decodedToken;
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
    next();
};

export default validateUser;