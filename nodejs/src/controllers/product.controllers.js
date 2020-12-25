import ProducerModel from '../models/producer.model';
import ProductModel from '../models/product.model'
const productCtrl = {}

productCtrl.getAllProduct = async () => {
    return ProducerModel.find()
}

productCtrl.getProductByApiQuery = async (math, option, sort) => {
    return ProductModel.find(math)
        .populate('category')
        .populate('producer')
        .sort(sort)
        .limit(option.limit)
        .skip(option.skip)
}
productCtrl.addProduct = async (product) => {
    const newProduct = new ProductModel(product)
    return newProduct.save();
}

productCtrl.updateProduct = async (productId, product) => {
    return ProducerModel.findOneAndUpdate({ productId }, product, { new: true })
}

productCtrl.deleteProduct = async (productId) => {
    return ProductModel.deleteOne({ productId })
}

productCtrl.findByProductId = async () => {
    return ProductModel.findOne({ productId })
}

productCtrl.fillter = async () => {

}

export default productCtrl