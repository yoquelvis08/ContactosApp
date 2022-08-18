const mongoose = require('mongoose');
require('dotenv').config();

const connectMongo = async () => {
    await mongoose.connect(CONTACT_APP_MONGODB_URL || 'mongodb://localhost/contacts-app', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(db => console.log('Database is connected'))
        .catch(err => console.log(err));
};

module.exports = { connectMongo };