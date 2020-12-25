import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const ProducerSchemma = Schema({
    producerId: { type: Number, unique: true, min: 1, immutable: true },
    name: { type: String, required: true, unique: true, trim: true },
    nation: String,
    description: String
}, { timestamps: true })

autoIncrement.initialize(mongoose.connection);

ProducerSchemma.plugin(autoIncrement.plugin, { model: 'Producer', field: 'producerId', startAt: 1, incrementBy: 1 })

const ProducerModel = mongoose.model("Producer", ProducerSchemma, "producer")

export default ProducerModel