import mongoose from 'mongoose'

const { Schema } = mongoose

const ProducerSchemma = Schema({
    name: { type: String, required: true },
    nation: String,
    description: String
}, { timestamps: true })

const ProducerModel = mongoose.model("Producer", ProducerSchemma, "producer")

export default ProducerModel