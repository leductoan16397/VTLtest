import express from 'express'
const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        console.log('aa');
        try {
            
        } catch (error) {
            res.status(500).json({ error })

        }
    })
    .post(async (req, res) => {
        console.log('aa');
        try {
            
        } catch (error) {
            res.status(500).json({ error })

        }
    })

router.route('/:producerId')
    .get(async (req, res) => {
        console.log('aa');
        try {
            
        } catch (error) {
            res.status(500).json({ error })

        }
    })
    .put(async (req, res) => {
        console.log('aa');
        try {
            
        } catch (error) {
            res.status(500).json({ error })

        }
    })
    .delete(async (req, res) => {
        console.log('aa');
        try {
            
        } catch (error) {
            res.status(500).json({ error })

        }
    })


export default router