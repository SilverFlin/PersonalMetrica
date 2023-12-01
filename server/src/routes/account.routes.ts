import { Router } from 'express'
import { AccountController } from '../controllers/account.controller'
import { BadRequest } from '../exceptions/Errors'
import { accountValidator, paramIdValidator } from '../middlewares/validator'
import { isAuthenticated } from '../middlewares/auth'
import multer from "../utils/multer.config";
import { AccountDTO } from '../types'

const router = Router()

// TODO move callback to controller

router.post('/', accountValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.createAccount(req.body)
        .then((account) => {
            res.status(201).json(account)
        })
})

router.get("/profile", isAuthenticated, (req, res) => {
    const accountController = new AccountController()
    accountController.findAccount({ _id: req.user?.id })
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
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



router.delete('/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const accountController = new AccountController()
    accountController.deleteAccount({ _id: req.params.id })
        .then((account) => {
            res.status(200).json(account)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

router.post('/upload',isAuthenticated, multer.single('file'),(req, res) => {
    console.log("test")
    
    const file: Express.Multer.File = req.file as Express.Multer.File
    console.log(file)
    if(!file){
        res.status(400).json({ message: "No file uploaded" });
    }
    const accountController = new AccountController()
    accountController.findAccount({_id: req.user?.id})
    .then(async(accountFound) => {
        // TODO: delete before url img if not default img
        
        const url =   `http://localhost:3000/static/${file.filename}`
        
        accountFound.url_img = url
        console.log(accountFound)
      const update= await accountController.updateAccount({_id: req.user?.id}, accountFound)
      return  res.status(200).json({url_img:url})
    }).catch((error)=>{
        console.log(error)
        return res.status(500).json({ message: error.message })
    })
 });

export default router