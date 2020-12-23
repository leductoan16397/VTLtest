import mongoose from 'mongoose'

const { Schema } = mongoose

const RankSchemma = Schema({
    name: { type: String, required: true },
    score: {
        min: { type: Number, required: true, min: 0 },
        max: {
            type: Number, required: true, max: 0,
            validate: { validator: function () { return this.score.max > this.score.min }, message: 'score.max must be greater than score.min' }
        }
    },
    discount: { type: Number, default: 0, min: 0, max: 100 },
}, { timestamps: true })

const RankModel = mongoose.model("Rank", RankSchemma, "rank")

export default RankModel