import { Router } from 'express'
import { RecordListController } from '../controllers/record.controller'
import { paramIdValidator } from '../middlewares/validator'
import { isAuthenticated } from '../middlewares/auth'

const router = Router()

// TODO move callback to controller

router.post('/', isAuthenticated, (req, res) => {
    const recordListController = new RecordListController()
    recordListController.createRecord(req.body)
        .then((record) => {
            res.status(201).json(record)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

router.get('/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const recordListController = new RecordListController()
    recordListController.findRecord({ _id: req.params.id })
        .then((record) => {
            res.status(200).json(record)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

router.put('/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const recordListController = new RecordListController()
    recordListController.updateRecord({ _id: req.params.id }, req.body)
        .then((record) => {
            res.status(200).json(record)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})

router.delete('/:id', isAuthenticated, paramIdValidator, (req, res) => {
    const recordListController = new RecordListController()
    recordListController.deleteRecord({ _id: req.params.id })
        .then((record) => {
            res.status(200).json(record)
        }).catch((error) => {
            res.status(500).json({ message: error.message })
        })
})
//TODO: move to its own route
router.put('/recordItem/:id', paramIdValidator, (req, res) => {
    const recordListController = new RecordListController()
    recordListController.insertRecord({ _id: req.params.id }, req.body)
        .then((record) => {
            res.status(200).json(record)
        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        })

})


export default router