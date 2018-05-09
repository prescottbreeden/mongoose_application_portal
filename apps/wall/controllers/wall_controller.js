const mongoose = require('mongoose');
const User = require('../../../server/models/user');
const Post = require('../../../server/models/post');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = {  
    wall_home : function(req, res){
        res.render('./wall/views/wall');
    }
}