const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/mongoose_app_portal')
                    .then(success => {
                        console.log("connected to db");
                    })
                    .catch(err => {
                        console.log("unable to connect to database");
                    })
