import LanguageModel from '../models/language.model'
import fs from 'fs'

const languageCtrl = {}

languageCtrl.addLanguage = async (language) => {
    const newLanguage = new LanguageModel(language);
    return newLanguage.save()
}

languageCtrl.getListName = async (dir) => {
    const rs = await LanguageModel.find({}, { _id: 0, name: 1 })
    const arrName = rs.map(el => el.name)
    console.log(rs);
    const localesFolder = dir + '\\locales', promiseArr = []
    arrName.forEach(name => {
        promiseArr.push(languageCtrl.createFileDictionary(localesFolder, name))
    });
    await Promise.all(arrName)
    return arrName
}

languageCtrl.createFileDictionary = async (localesFolder, name) => {
    const language = await LanguageModel.findOne({ name })
    console.log(JSON.stringify(language.dictionary), `${language.name}.json`);
    fs.writeFile(`${localesFolder}\\${language.name}.json`, JSON.stringify(language.dictionary), (err) => {
        if (err) console.log(err);
    })
}

languageCtrl.deleteLanguage = async (languageId) => {
    return LanguageModel.deleteOne({ languageId })
}

languageCtrl.findByCategoryId = async (languageId) => {
    return LanguageModel.findOne({ languageId })
}

languageCtrl.getAllLanguage = async () => {
    return LanguageModel.find()
}

languageCtrl.updateLanguage = async (languageId, language) => {
    return LanguageModel.findByIdAndUpdate({ languageId }, language, { new: true })
}


export default languageCtrl