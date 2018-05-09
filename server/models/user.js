var mongoose = require('mongoose');

// user schema
const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'First name cannot be blank']},
    last_name: {type: String, required: [true, 'Last name cannot be blank']},
    email: {type: String, required: [true, 'Email cannot be blank'], lowercase: true},
    password: {type: String, min: [8, 'Password must be 8 characters long'], required: [true, 'Password must be 8 characters long']}
}, {timestamps: true})


module.exports = mongoose.model('User', UserSchema);