import CategoryModel from '../models/category.model'
const categoryCtrl = {}

categoryCtrl.addCategory = async (category) => {
    const newCategory = new CategoryModel(category);
    return newCategory.save()
}

categoryCtrl.deleteCategory = async (categoryId) => {
    return CategoryModel.deleteOne({ categoryId })
}

categoryCtrl.findByCategoryId = async (categoryId) => {
    return CategoryModel.findOne({ categoryId })
}

categoryCtrl.fillter = async () => {

}

categoryCtrl.getAllCategory = async () => {
    return CategoryModel.find()
}

categoryCtrl.updateCategory = async (categoryId, category) => {
    return CategoryModel.findByIdAndUpdate({ categoryId }, category)
}

categoryCtrl.getCategoryIdByName = async (name) => {
    return CategoryModel.findOne({ name }).categoryId
}


export default categoryCtrl