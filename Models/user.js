var mongoose = require('mongoose');

// user schema
const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'First name cannot be blank']},
    last_name: {type: String, required: [true, 'Last name cannot be blank']},
    email: {type: String, required: [true, 'Email cannot be blank'], lowercase: true},
    password: {type: String, required: true}
}, {timestamps: true})


module.exports = mongoose.model('User', UserSchema);