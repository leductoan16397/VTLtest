import express from 'express'
import rankCtrl from '../../controllers/rank.controllers'
const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            const listrank = await rankCtrl.getAllRank()
            res.json(listrank)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .post(async (req, res) => {
        const rank = req.body
        try {
            const newrank = await rankCtrl.addRank(rank)
            res.json(newrank)
        } catch (error) {
            res.status(500).json({ error })
        }
    })

router.route('/:rankId')
    .get(async (req, res) => {
        try {
            const rankId = req.params.rankId
            const rank = await rankCtrl.findByRankId(rankId)
            res.json(rank)

        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .put(async (req, res) => {
        const rank = req.body,
            rankId = req.params.rankId
        try {
            const newrank = await rankCtrl.updateRank(rankId, rank)
            res.json(newrank)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .delete(async (req, res) => {
        const rankId = req.params.rankId
        try {
            const del = await rankCtrl.deleteRank(rankId)
            res.json(del)
        } catch (error) {
            res.status(500).json({ error })
        }
    })


export default router