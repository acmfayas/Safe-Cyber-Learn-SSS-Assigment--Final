const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastename: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  otp: {
    type: String
  },
  isActive: {
    type: Boolean,
    required: true,
    default:false
  },
  role:{
    type:String,
    default:'normal'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;