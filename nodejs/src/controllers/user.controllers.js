import UserModel from '../models/user.model'
const userCtrl = {}


userCtrl.addUser = async (user) => {
    const newUser = new UserModel(user)
    return newUser.save()
}

userCtrl.deleteUser = async (userId) => {
    return UserModel.deleteOne({ userId })
}

userCtrl.findByUserId = async (userId) => {
    return UserModel.findOne({ userId })
}

userCtrl.getAllUser = async () => {
    return UserModel.find()
}

userCtrl.updateUser = async (userId, user) => {
    return UserModel.findOneAndUpdate({ userId }, user, { new: true })
}

userCtrl.fillter = async () => {

}

export default userCtrl