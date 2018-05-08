const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/the_wall')
                    .then(success => {
                        console.log("connected to db");
                    })
                    .catch(err => {
                        console.log("unable to connect to database");
                    })
