const mongoose = require ("mongoose")

const User = mongoose.model('user', {
    name: String,
    email: String,
    age: String,
    password: String
})

module.exports = User;