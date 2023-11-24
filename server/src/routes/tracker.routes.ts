import { Router } from 'express'
import { AccountController } from '../controllers/account.controller'
import { paramIdValidator } from '../middlewares/validator'
import { isAuthenticated } from '../middlewares/auth'

const router = Router()

router.get('/', isAuthenticated,  (req, res) => {
    const accountController = new AccountController() 
    
    accountController.getTrackers({ _id: req.user.id })
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})
// the user id get on token
router.post('/', isAuthenticated,  (req, res) => {
    const accountController = new AccountController()
    accountController.createTracker({ _id: req.user.id }, req.body)
        .then((account) => {
            console.log(account)
         return   res.status(200).json(account)
        }).catch((error) => { 
         return res.status(500).json({ message: error.message })
        })
})
//  the param id should be the tracker id, the user id get on token
router.delete('/:id', isAuthenticated,paramIdValidator,  (req, res) => {
    
    const accountController = new AccountController() 
    accountController.removeTracker({ _id: req.user.id }, req.params.id as string)
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})
//  the param id should be the tracker id, the user id get on token
router.put('/:id', isAuthenticated,paramIdValidator,  (req, res) => {
    
    const accountController = new AccountController() 
    accountController.updateTracker({ _id: req.user.id }, req.params.id as string, req.body)
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

export default router