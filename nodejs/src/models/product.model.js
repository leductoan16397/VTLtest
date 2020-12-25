import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const ProductSchema = Schema({
    productId: { type: Number, unique: true, min: 1, immutable: true },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    inventory: { type: Number, min: 0, default: 0 },
    sold: { type: Number, min: 0, default: 0 },
    price: [{
        startDate: { type: Date, required: true, min: '2000-1-1' },
        endData: { type: Date, required: true, min: '2000-1-1' },
        price: { type: Number, required: true, min: 1000 }
    }],
    discount: [{
        startDate: { type: Date, required: true, min: '2000-1-1' },
        endData: { type: Date, required: true, min: '2000-1-1' },
        discount: { type: Number, default: 0, min: 0, max: 100 }
    }],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    producer: { type: Schema.Types.ObjectId, ref: 'Producer' }
}, { timestamps: true })

autoIncrement.initialize(mongoose.connection);

ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'productId', startAt: 1, incrementBy: 1 })


const ProductModel = mongoose.model("Product", ProductSchema, "product")

export default ProductModel 