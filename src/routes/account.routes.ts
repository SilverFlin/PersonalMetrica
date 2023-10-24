import { Router } from 'express'
import { AccountController } from '../controllers/account.controller'
import { BadRequest } from '../exceptions/Errors'
import { accountValidator, paramIdValidator } from '../middlewares/validator'
import { isAuthenticated } from '../middlewares/auth'

const router = Router()

// TODO move callback to controller

router.post('/', accountValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.createAccount(req.body)
        .then((account) => {
            res.status(201).json(account)
        })
})

router.get('/:id', paramIdValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.findAccount({ _id: req.params.id })
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

router.put('/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.updateAccount({ _id: req.params.id }, req.body)
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

// TODO move to its own router
router.post('/tracker/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.createTracker({ _id: req.params.id }, req.body)
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})
// TODO move to its own router
router.put('/tracker/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.updateTracker({ _id: req.params.id }, req.query.name as string, req.body.data)
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})


router.delete('/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.deleteAccount({ _id: req.params.id })
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})


export default router