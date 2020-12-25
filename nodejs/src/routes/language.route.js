import express from 'express'
const router = express.Router()

router.route('/inex')
    .get(async (req, res) => {
        res.render('index')
    })

router.get('/change-lang/:lang', (req, res) => {
    res.cookie('locale', req.params.lang, { maxAge: 900000 });
    res.redirect('back');
});
export default router