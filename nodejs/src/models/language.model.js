import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const LanguageSchemma = Schema({
    languageId: { type: Number, unique: true, min: 1, immutable: true },
    name: { type: String, required: true, trim: true, unique: true },
    nation: { type: String, required: true, trim: true, unique: true },
    dictionary: {
        Name: { type: String, required: true },
        Age: { type: String, required: true },
        Address: { type: String, required: true },
        Nationality: { type: String, required: true },
        University: { type: String, required: true }
    }
}, { timestamps: true })

autoIncrement.initialize(mongoose.connection);

LanguageSchemma.plugin(autoIncrement.plugin, { model: 'Language', field: 'languageId', startAt: 1, incrementBy: 1 })

const LanguageModel = mongoose.model("Language", LanguageSchemma, "language")

export default LanguageModel