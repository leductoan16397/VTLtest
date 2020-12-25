import auth from './auth.route'
import userV1 from './routesV1/user.route'
import rankV1 from './routesV1/rank.route'
import categoryV1 from './routesV1/category.route'
import producerV1 from './routesV1/producer.route'
import productV1 from './routesV1/product.route'
import language from './language.route'

const routes = (app) => {
    app.use('/auth', auth);

    // Router version 1
    app.use('/v1/users', userV1);
    app.use('/v1/ranks', rankV1);
    app.use('/v1/categories', categoryV1);
    app.use('/v1/producers', producerV1);
    app.use('/v1/products', productV1);
    app.use('/', language);
}
export default routes