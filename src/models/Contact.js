const {Schema, model} = require('mongoose');

const ContactSchema = new Schema({
    name: {
        type: String,
        requires: true
    },
    lastname: {
        type: String,
        requires: true
    },
    email: {
        type: String,
        requires: true
    },
    phone: {
        type: String,
        requires: true
    },
    user: {
        type: String,
        requires: true
    },

}, {
    timestamps: true
});

module.exports = model('Contact', ContactSchema);