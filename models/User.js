const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        min: 4,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max:50,
        unique:true
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 20
    },
    
    isAdmin: {
        type: Boolean,
        default: false
    },
    position: {
        type: Int,
        unique: true,
        default: -1
    }

},{timestamps:true})

module.exports = mongoose.model("User",UserSchema)
