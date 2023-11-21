import jwt, { JwtPayload } from 'jsonwebtoken';

const publicKey = import.meta.env.AUTH_KEY || '';

export interface MyJwtPayload extends JwtPayload {
    id: string;
    expiresIn: number;
}

export function decodeToken(token: string): Promise<MyJwtPayload | null> {
    console.log('Decoding token:', token);
    // TODO 
    return new Promise((resolve) => { resolve(null) })
    // return new Promise((resolve) => {
    //     // Decode the JWT
    //     const decodedToken = jwt.decode(token, { complete: true }) as MyJwtPayload | null;

    //     if (!decodedToken) {
    //         resolve(null);
    //     }

    //     // Verify the signature
    //     jwt.verify(token, publicKey, (err: any) => {
    //         if (err || !decodedToken) {
    //             resolve(null);
    //             return
    //         }
    //         // Token is valid
    //         console.log('Valid token:', decodedToken);

    //         // Check expiration time
    //         const currentTimestamp = Math.floor(Date.now() / 1000);

    //         if (decodedToken.expiresIn && decodedToken.expiresIn > currentTimestamp) {
    //             resolve(decodedToken);
    //         } else {
    //             resolve(null);
    //         }

    //     });
    // });
}