const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RoleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports=mongoose.model('Role', RoleSchema)