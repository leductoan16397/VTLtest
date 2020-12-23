import auth from './auth.route'

const routes = (app) => {
    app.use('/auth', auth)
}
export default routes