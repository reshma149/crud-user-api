const mongoose = require('mongoose');

const connectDb = async () => {
    return mongoose.connect(process.env.MONGO_DEV)
    .then(res => {
         console.log(`Mongodb connected successfully`);
    }).catch(err => console.log(err))
}

module.exports = connectDb;