const mongoose = require('mongoose');
const User = require('../../../server/models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = {
    login_home : function(req, res){
        res.render('./login/views/index');
    },
    register : function(req, res) {
        var error_message = [];
        var password = req.body.password;
        User.find({email: req.body.email}, function(err, user) {
            var validation = false;
            if(err)
            {
                error_message.push("server fail")
            }
            if(!user) 
            {
                if(password === req.body.cpassword) 
                {
                    bcrypt.hash(password, 10, function(err, hash) 
                    {
                        if(err)
                        {
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
                            newUser.save(function(err, success)
                            {
                                if(err)
                                {
                                    console.log(err);
                                }   
                                else
                                {
                                    validation = true;
                                    res.redirect('/success');
                                }
                            })
                        }
                    })      
                }
            }
            if(validation === false) 
            {
                res.render('./login/views/failed');
            }
            else
            {
                
            }
        })                  
    },
    login : function(req, res) {
        var error_message = [];
        console.log(req.body.login_email);
        console.log(req.body.login_password);
        User.findOne({email: req.body.login_email}, function(err, user) {
            if(err){
                error_message.push("server broke")
                res.render('./login/views/failed');
            }
            else if(!user)
            {
                res.render('./login/views/failed');
            }
            else 
            {
                bcrypt.compare(req.body.login_password, user.password, function(err, result) {
                    console.log("inside bcrypt call");
                    if(err) 
                    {
                        res.render('./login/views/failed');
    
                    }
                    else if(result === true)  
                    {
                        //insert query for posts
                        res.redirect('/success');
                    }
                    else 
                    {
                        error_message.push("incorrect password");
                        res.redirect('/failed');
    
                    }
                })
            }
        })       
    },
    success : function(req, res) {
        res.render('./login/views/success');
    },
    failed : function(req, res) {
        res.render('./login/views/failed');
    }
}
    