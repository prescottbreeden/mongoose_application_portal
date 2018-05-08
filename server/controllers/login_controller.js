const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = {
   
    root : function(req, res){
        res.render('index');
    },
    register : function(req, res) {
        var error_message = [];
        var password = req.body.password;
        User.find({email: req.body.email}, function(err, user) {
            if(err){
                error_message.push("server fail")
            }
            else {
                if(user.length > 0) {
                    error_message.push("email already exists")
                }
                else if(password === req.body.cpassword) {
                    bcrypt.hash(password, 10, function(err, hash) {
                        if(err){
                            error_message.push("server fail")
                        }
                        else {
                            password = hash;
                            var newUser = new User({
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                email: req.body.email,
                                password: password
                            })
                            newUser.save(function(){
                                res.redirect('/success');
                            })
                        }
                    })      
                }
                else {
                    error_message.push("something went wrong")
                    res.render('failed', {errors: error_message});
                }
            }
        })                  
    },
    login : function(req, res) {
        var error_message = [];
        console.log(req.body.login_email);
        User.findOne({email: req.body.login_email}, function(err, user) {
            if(err){
                error_message.push("shits fucked")
            }
            else if(user === null)
            {
                error_message.push("sigh....")
            }
            else {
                bcrypt.compare(req.body.login_password, user.password, function(err, result) {
                    if(err) {
                        error_message.push("still fucked, what did you expect?")
                    }
                    else {
                        //insert query for posts
                        res.redirect('success');
                    }
                })
            }
            if(error_message.length > 0) {
                res.render('failed', {errors: error_message});
            }
        })       
    }
}
    