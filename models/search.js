const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const searchSchema =new mongoose.Schema({
    jobTitle:{type: String, required: true},
    location:{type: String, required: true}
  })


  