import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { AccountController } from '../controllers/account.controller';
import { AccountDTO } from '../types';
import { AuthConfig } from '../types/auth';



const router = Router()

if (!process.env.AUTH_KEY) {
    process.exit(1)
}

const authConfig: AuthConfig = {
    expiresIn: '1d',
    secretKey: process.env.AUTH_KEY
}

router.post('/login', async (req, res) => {
    const accountController = new AccountController()
    const { email, password } = req.body;
    if (email === undefined || password === undefined) {
        return res.status(400).json({ message: 'Missing email or password' })
    }

    let account: AccountDTO;
    try {
        account = await accountController.findAccount({ email: email })
    } catch (e) {
        return res.status(401).json({ message: 'Invalid Credentials' })
    }

    const isValidPassword = await accountController.checkAccountPassword(password, account)
    console.log(isValidPassword)
    if (isValidPassword) {
        const token = jwt.sign(
            { id: account.id },
            authConfig.secretKey,
            { expiresIn: authConfig.expiresIn }
        )
        return res.json({ token })
    }
    return res.status(401).json({ message: 'Invalid credentials' })
})


export default router;