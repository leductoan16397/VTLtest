import express from 'express'
import productCtrl from '../../controllers/product.controllers'
import categoryCtrl from '../../controllers/category.controllers'
import producerCtrl from '../../controllers/producer.controllers'
const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        const option = {}, math = {}, sort = {}

        if (req.query.limit) {
            option.limit = parseInt(req.query.limit)
            option.skip = req.query.limit * req.query.page || 0
        }

        sort[req.query.sortBy ? req.query.sortBy : 'createAt'] = req.query.OrderBy === 'desc' ? -1 : 1

        if (req.query.category) {
            const categoryId = await categoryCtrl.getCategoryIdByName(req.query.category)
            math.category = categoryId
        }

        if (req.query.producer) {
            const producerId = await producerCtrl.getProducerIdByName(req.query.producer)
            math.producer = producerId
        }

        try {
            const listProduct = await productCtrl.getProductByApiQuery(math, option, sort)
            res.json(listProduct)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error })
        }
    })
    .post(async (req, res) => {
        const product = req.body
        try {
            const newProduct = await productCtrl.addProduct(product)
            res.json(newProduct)
        } catch (error) {
            res.status(500).json({ error })
        }
    })

router.route('/:productId')
    .get(async (req, res) => {
        try {
            const productId = req.params.productId
            const product = await productCtrl.findByProductId(productId)
            res.json(product)

        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .put(async (req, res) => {
        const product = req.body,
            productId = req.params.productId
        try {
            const newproduct = await productCtrl.updateProduct(productId, product)
            res.json(newproduct)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .delete(async (req, res) => {
        const productId = req.params.productId
        try {
            const del = await productCtrl.deleteProduct(productId)
            res.json(del)
        } catch (error) {
            res.status(500).json({ error })
        }
    })


export default router