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

export default categoryCtrl