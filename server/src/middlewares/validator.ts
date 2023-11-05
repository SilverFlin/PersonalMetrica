import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../exceptions/Errors";
import { AccountDTO } from "../types";


//middleware to validate accoount data, if 'email' or 'password' is not defined,
//it generates BadRequest error and it delegates to the error handler..
export const accountValidator = (req: Request, res: Response, next: NextFunction) => {

    const account = req.body as AccountDTO

    if (account.email == undefined) {
        return next(new BadRequest('email is required'));
    }
    if (account.password == undefined) {
        return next(new BadRequest('password is required'));
    }

    next()

}

// middleware to validate param id, if id characters length is not equal 24 
//it generates BadRequest error and delegates to the error handler 
export const paramIdValidator = (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id

    if (!id) {
        return next(new BadRequest('Param id is required'));
    }

    if (id.toString().length !== 24) {
        return next(new BadRequest('Invalid ObjectId'));
    }

    next()

}

