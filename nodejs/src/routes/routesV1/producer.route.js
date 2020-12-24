import express from 'express'
import producerCtrl from '../../controllers/producer.controllers'
const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            const listproducer = await producerCtrl.getAllProducer()
            res.json(listproducer)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .post(async (req, res) => {
        const producer = req.body
        try {
            const newproducer = await producerCtrl.addProducer(producer)
            res.json(newproducer)
        } catch (error) {
            res.status(500).json({ error })
        }
    })

router.route('/:producerId')
    .get(async (req, res) => {
        try {
            const producerId = req.params.producerId
            const producer = await producerCtrl.findByProducerId(producerId)
            res.json(producer)

        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .put(async (req, res) => {
        const producer = req.body,
            producerId = req.params.producerId
        try {
            const newproducer = await producerCtrl.updateProducer(producerId, producer)
            res.json(newproducer)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .delete(async (req, res) => {
        const producerId = req.params.producerId
        try {
            const del = await producerCtrl.deleteProducer(producerId)
            res.json(del)
        } catch (error) {
            res.status(500).json({ error })
        }
    })


export default router