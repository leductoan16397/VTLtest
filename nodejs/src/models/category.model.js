import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const CategorySchemma = Schema({
    categoryId: { type: Number, unique: true, min: 1, immutable: true },
    name: { type: String, required: true },
    description: String
}, { timestamps: true })

autoIncrement.initialize(mongoose.connection);

CategorySchemma.plugin(autoIncrement.plugin, { model: 'Categoty', field: 'categoryId', startAt: 1, incrementBy: 1 })

const CategoryModel = mongoose.model("Category", CategorySchemma, "category")

export default CategoryModel