import RankModel from '../models/rank.model'
const rankCtrl = {}

rankCtrl.getAllRank = async () => {
    return RankModel.find()
}

rankCtrl.addRank = async (rank) => {
    const newRank = new RankModel(rank)
    return newRank.save()
}

rankCtrl.updateRank = async (rankId, rank) => {
    return RankModel.findByIdAndUpdate({ rankId }, rank)
}

rankCtrl.deleteRank = async (rankId) => {
    return RankModel.deleteOne({ rankId })
}

rankCtrl.findByRankId = async () => {
    return RankModel.findOne({ rankId })
}

rankCtrl.fillter = async () => {

}

export default rankCtrl