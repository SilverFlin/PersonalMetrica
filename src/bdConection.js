const mongoose = require('mongoose');

mongoose.connect(process.env.URI_DB || "mongodb://127.0.0.1:27017/testDb")



mongoose.connection.on('open', _ => {
    console.log('connection to mongo succesfuly')
})