const mongoose = require('mongoose');
const User = require('../../../server/models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = {  
    secrets_home : function(req, res){
        res.render('./secrets/views/secrets');
    }
}