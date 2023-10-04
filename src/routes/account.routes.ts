import { Router } from 'express'
import { AccountController } from '../controllers/account.controller'

const router = Router()

// TODO move callback to controller

router.post('/', (req, res) => {
    const accountController = new AccountController()
    accountController.createAccount(req.body)
        .then((account) => {
            res.status(201).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

router.get('/:id', (req, res) => {
    const accountController = new AccountController()
    accountController.findAccount({ _id: req.params.id })
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

router.put('/:id', (req, res) => {
    const accountController = new AccountController()
    accountController.updateAccount({ _id: req.params.id }, req.body)
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

// TODO move to its own router
router.put('/tracker/:id', (req, res) => {
    const accountController = new AccountController()
    accountController.updateAccount({ _id: req.params.id }, req.body)
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})


router.delete('/:id', (req, res) => {
    const accountController = new AccountController()
    accountController.deleteAccount({ _id: req.params.id })
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})


export default router