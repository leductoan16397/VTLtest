import mongoose from 'mongoose'

const { Schema } = mongoose

const CategorySchemma = Schema({
    name: { type: String, required: true },
    description: String
}, { timestamps: true })

const CategoryModel = mongoose.model("Category", CategorySchemma, "category")

export default CategoryModel