const mongoose = require('mongoose');

const bookMarkSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    redirect_url: String,
    title: String,
    label: String,
    location: String,
    description: String
  })
 
