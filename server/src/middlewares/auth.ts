// jwt middleware auth

// Path: src/middlewares/auth.ts

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AuthRequest, ForbbidenRequest } from '../exceptions/Errors';
import { AuthConfig } from '../types/auth';


if (!process.env.AUTH_KEY) {
    process.exit(1)
}

async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.header("x-auth-token")
        if (!token) {
            return res.status(403).json({ message: 'Access Denied' })
        }
        const decoded = jwt.verify(token, process.env.AUTH_KEY as string)
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({ message: 'Invalid Token' })
    }
}


export {
    isAuthenticated
}