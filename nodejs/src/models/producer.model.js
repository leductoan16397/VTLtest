import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const ProducerSchemma = Schema({
    producerId: { type: Number, unique: true, min: 1 },
    name: { type: String, required: true },
    nation: String,
    description: String
}, { timestamps: true })

ProducerSchemma.plugin(autoIncrement.plugin, { model: 'Producer', field: 'producerId', startAt: 1, incrementBy: 1 })

const ProducerModel = mongoose.model("Producer", ProducerSchemma, "producer")

export default ProducerModel