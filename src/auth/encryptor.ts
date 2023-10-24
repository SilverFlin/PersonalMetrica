import bcrypt from 'bcrypt';

async function encrypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

async function compare(passwordAttempt: string, hash: string): Promise<boolean> {
    console.log(passwordAttempt, hash)
    return await bcrypt.compare(passwordAttempt, hash)
}



export {
    encrypt,
    compare
}