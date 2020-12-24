import ProducerModel from '../models/producer.model'
const producerCtrl = {}

producerCtrl.addProducer = async (producer) => {
    const newProducer = new ProducerModel(producer)
    return newProducer.save();
}

producerCtrl.deleteProducer = async (producerId) => {
    return ProducerModel.deleteOne({ producerId })
}

producerCtrl.findByProducerId = async (producerId) => {
    return ProducerModel.findOne({ producerId })
}

producerCtrl.fillter = async () => {

}

export default producerCtrl