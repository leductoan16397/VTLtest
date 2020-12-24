import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose

const validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = Schema({
    userId: { type: Number, unique: true, min: 1, immutable: true },
    name: { type: String, required: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: { type: String, required: true },
    score: { type: Number, default: 0, min: 0 },
    scoreUsed: { type: Number, default: 0, min: 0 },
    sex: {
        type: String,
        enum: ['male', 'female', 'unknown'],
        default: 'unknown'
    },
    birthday: { type: Date },
    address: [{
        location: String,
        locationType: {
            type: String,
            enum: ['home', 'office', 'unknown'],
            default: 'unknown'
        }
    }]
}, { timestamps: true })

autoIncrement.initialize(mongoose.connection);

UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1, incrementBy: 1 })

const UserModel = mongoose.model("User", UserSchema, "user")

export default UserModel 