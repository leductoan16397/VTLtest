import express from 'express'
import { isAuth } from '../../middleware/auth.middleware'

const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            console.log(req);
            res.json({ mes: "user get" })
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .post(async (req, res) => {
        try {
            console.log(req);
            res.json({ mes: "user post" })
        } catch (error) {
            res.status(500).json({ error })
        }
    })

router.route('/:userId')
    .get(isAuth, async (req, res) => {
        try {
            console.log(req);

            res.json({ mes: `user id get ${req.params.userId}` })

        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .put(async (req, res) => {
        try {
            console.log(req);
            res.json({ mes: "userdi put" })
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .delete(async (req, res) => {
        try {
            console.log(req);
            res.json({ mes: "userid del" })

        } catch (error) {
            res.status(500).json({ error })
        }
    })

export default router