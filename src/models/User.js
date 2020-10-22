const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    maxlength: 512,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
  },
  status: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
