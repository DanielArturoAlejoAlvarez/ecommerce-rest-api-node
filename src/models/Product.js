const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  price: Number,
  stock: Number,
  image: {
    type: String,
    maxlength: 512,
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

module.exports = mongoose.model("Product", ProductSchema);
