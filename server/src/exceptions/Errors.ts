
export abstract class RequestError extends Error {
    abstract readonly statusCode: number
    constructor(message: string) {
        super(message)
    }

    public getMessage() {
        return this.message;
    }

    public getStatusCode() {
        return this.statusCode;
    }

}

/**
 * 
 */
export class BadRequest extends RequestError {
    private readonly code: number = 400
    readonly statusCode: number


    constructor(message: string) {
        super(message)
        this.statusCode = this.code

    }


}

/**
 * 
 */
export class AuthRequest extends RequestError {

    private readonly code: number = 401
    readonly statusCode: number


    constructor(message: string) {
        super(message)
        this.statusCode = this.code

    }


}

/**
 * 
 */
export class ForbbidenRequest extends RequestError {
    private readonly code: number = 403
    readonly statusCode: number


    constructor(message: string) {
        super(message)
        this.statusCode = this.code

    }


}
/**
 * 
 */
export class NotFoundRequest extends RequestError {
    private readonly code: number = 404
    readonly statusCode: number


    constructor(message: string) {
        super(message)
        this.statusCode = this.code

    }

}