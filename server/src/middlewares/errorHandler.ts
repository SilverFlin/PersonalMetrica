import { Request, Response, NextFunction } from 'express'
import { AuthRequest, BadRequest, RequestError, ForbbidenRequest, NotFoundRequest } from '../exceptions/Errors'


export const errorHandler = (err: Error, req: Request, res: Response,next:NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    if (err instanceof BadRequest) {

        return errorResponse(err, res)
    }
    if (err instanceof AuthRequest) {

        return errorResponse(err, res)
    }
    if (err instanceof ForbbidenRequest) {

        return errorResponse(err, res)
    }

    if (err instanceof NotFoundRequest) {

        return errorResponse(err, res)
    }

    return res.status(500).send({ msg: err.message });
}


const errorResponse = (err: RequestError, res: Response) => {

    res.status(err.getStatusCode())
        .json(
            {
                msg: err.message,
                status: err.getStatusCode()

            })
}

