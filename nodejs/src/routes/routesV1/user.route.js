import express from 'express'
import userCtrl from '../../controllers/user.controllers'

const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            const listUser = await userCtrl.getAllUser()
            res.json(listUser)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .post(async (req, res) => {
        const user = req.body
        try {
            const newUser = await userCtrl.addUser(user)
            res.json(newUser)
        } catch (error) {
            res.status(500).json({ error })
        }
    })

router.route('/:userId')
    .get( async (req, res) => {
        try {
            const userId = req.params.userId
            const user = await userCtrl.findByUserId(userId)
            res.json(user)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .put(async (req, res) => {
        const user = req.body,
            userId = req.params.userId
        try {
            const newUser = await userCtrl.updateUser(userId, user)
            res.json(newUser)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .delete(async (req, res) => {
        const userId = req.params.userId
        try {
            const del = await userCtrl.deleteUser(userId)
            res.json(del)
        } catch (error) {
            res.status(500).json({ error })
        }
    })

export default router