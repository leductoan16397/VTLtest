import ProducerModel from '../models/producer.model'
const producerCtrl = {}

producerCtrl.getAllProducer = async () => {
    return ProducerModel.find()
}

producerCtrl.addProducer = async (producer) => {
    const newProducer = new ProducerModel(producer)
    return newProducer.save();
}

producerCtrl.updateProducer = async (producerId, producer) => {
    return ProducerModel.findOneAndUpdate({ producerId }, producer)
}

producerCtrl.deleteProducer = async (producerId) => {
    return ProducerModel.deleteOne({ producerId })
}

producerCtrl.findByProducerId = async (producerId) => {
    return ProducerModel.findOne({ producerId })
}

producerCtrl.getProducerIdByName = async (name) => {
    return ProducerModel.findOne({ name }).producerId
}

producerCtrl.getProducerIdByName = async (name) => {
    return ProducerModel.findOne({ name }).producerId
}
export default producerCtrl