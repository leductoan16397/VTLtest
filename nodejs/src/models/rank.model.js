import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const RankSchemma = Schema({
    rankId: { type: Number, unique: true, min: 1, immutable: true },
    name: { type: String, required: true, trim: true },
    score: {
        min: { type: Number, required: true, min: 0 },
        max: {
            type: Number, required: true, min: 0,
            validate: { validator: function () { return this.score.max > this.score.min }, message: 'score.max must be greater than score.min' }
        }
    },
    discount: { type: Number, default: 0, min: 0, max: 100 },
}, { timestamps: true })

autoIncrement.initialize(mongoose.connection);

RankSchemma.plugin(autoIncrement.plugin, { model: 'Rank"', field: 'rankId', startAt: 1, incrementBy: 1 })

const RankModel = mongoose.model("Rank", RankSchemma, "rank")

export default RankModel