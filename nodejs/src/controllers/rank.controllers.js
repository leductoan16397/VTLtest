import RankModel from '../models/rank.model'
const rankCtrl = {}

rankCtrl.addRank = async (rank) => {
    const newRank = new RankModel(rank)
    return newRank.save()
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