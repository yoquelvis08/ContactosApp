const mongoose = require('mongoose');

const { CONTACT_APP_MONGODB_HOST, CONTACT_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${CONTACT_APP_MONGODB_HOST}/${CONTACT_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));