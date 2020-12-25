import mongoose from 'mongoose'

const connectDatabase = () => {
    const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
        option = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            // user: 'myUserName',
            // pass: 'myPassword',
        }
    // const mongoDbUrl = `mongodb://mongoDB:27017/dockerLearn`
    console.log(`connecting to ${mongoDbUrl}`);
    mongoose.Promise = global.Promise

    mongoose.connect(mongoDbUrl, option)
        .then(() => {
            console.log('Successfully connected to the database');
        })
        .catch((err) => {
            console.log(`could not connect to the database. Exitin now...\n${err}`);
        })
}

export default connectDatabase