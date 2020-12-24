import express from 'express'
import categoryCtrl from '../../controllers/category.controllers'
const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            const listcategory = await categoryCtrl.getAllCategory()
            res.json(listcategory)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .post(async (req, res) => {
        const category = req.body
        try {
            const newcategory = await categoryCtrl.addCategory(category)
            res.json(newcategory)
        } catch (error) {
            res.status(500).json({ error })
        }
    })

router.route('/:categoryId')
    .get(async (req, res) => {
        try {
            const categoryId = req.params.categoryId
            const category = await categoryCtrl.findByCategoryId(categoryId)
            res.json(category)

        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .put(async (req, res) => {
        const category = req.body,
            categoryId = req.params.categoryId
        try {
            const newcategory = await categoryCtrl.updateCategory(categoryId, category)
            res.json(newcategory)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .delete(async (req, res) => {
        const categoryId = req.params.categoryId
        try {
            const del = await categoryCtrl.deleteCategory(categoryId)
            res.json(del)
        } catch (error) {
            res.status(500).json({ error })
        }
    })


export default router