const mongoose = require('mongoose');

mongoose.connect('');

const userModel = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    transactionHistory: Array,
})

const accountModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const user = mongoose.model('User', userModel);
const account = mongoose.model('Account', accountModel);

module.exports = {
    user,
    account
};
