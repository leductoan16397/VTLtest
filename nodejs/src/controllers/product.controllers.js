import ProductModel from '../models/product.model'
const productCtrl = {}

productCtrl.addProduct = async (product) => {
    const newProduct = new ProductModel(product)
    return newProduct.save();
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