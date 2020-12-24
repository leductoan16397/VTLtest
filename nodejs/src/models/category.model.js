import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const CategorySchemma = Schema({
    categoryId: { type: Number, unique: true, min: 1 },
    name: { type: String, required: true },
    description: String
}, { timestamps: true })

CategorySchemma.plugin(autoIncrement.plugin, { model: 'Categoty', field: 'categoryId', startAt: 1, incrementBy: 1 })

const CategoryModel = mongoose.model("Category", CategorySchemma, "category")

export default CategoryModel