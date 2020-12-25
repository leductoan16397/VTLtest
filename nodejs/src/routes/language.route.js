import express from 'express'
import languageCtrl from '../controllers/language.controllers'
import i18n from 'i18n'
import path from 'path'

const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        const listLanguage = await languageCtrl.getAllLanguage()

        res.render('index', { listLanguage: listLanguage })
    })

router.get('/change-lang/:lang', (req, res) => {
    res.cookie('lang', req.params.lang, { maxAge: 900000 });
    res.redirect('back');

});

router.route('/languages')
    .get(async (req, res) => {
        try {
            const listlanguage = await languageCtrl.getAllLanguage()
            res.json(listlanguage)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .post(async (req, res) => {
        const language = req.body
        try {
            const newlanguage = await languageCtrl.addLanguage(language)
            const globalDirName = __dirname.slice(0, __dirname.lastIndexOf('js') + 2)
            const listName = await languageCtrl.getListName(globalDirName)
            i18n.configure({
                locales: listName,
                defaultLocale: 'vi',
                directory: path.join(globalDirName, 'locales'),
                cookie: 'lang',
            });
            res.json(newlanguage)

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    })

router.route('languages/:languageId')
    .get(async (req, res) => {
        try {
            const languageId = req.params.languageId
            const language = await languageCtrl.findByLanguageId(languageId)
            res.json(language)

        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .put(async (req, res) => {
        const language = req.body,
            languageId = req.params.languageId
        try {
            const newlanguage = await languageCtrl.updateLanguage(languageId, language)
            res.json(newlanguage)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .delete(async (req, res) => {
        const languageId = req.params.languageId
        try {
            const del = await languageCtrl.deleteLanguage(languageId)
            const globalDirName = __dirname.slice(0, __dirname.lastIndexOf('js') + 2)
            const listName = await languageCtrl.getListName(globalDirName)
            i18n.configure({
                locales: listName,
                defaultLocale: 'vi',
                directory: path.join(globalDirName, 'locales'),
                cookie: 'lang',
            });
            res.json(del)
        } catch (error) {
            res.status(500).json({ error })
        }
    })


export default router