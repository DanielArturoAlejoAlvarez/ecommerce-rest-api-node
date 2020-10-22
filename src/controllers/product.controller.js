const Product = require("../models/Product");

const CTRL = {};

CTRL.getProducts = (req, res) => {
  Product.find({})
    .populate("category")
    .exec((err, products) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json({
        ok: true,
        products,
      });
    });
};

CTRL.getProduct = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json({
        ok: true,
        product,
      });
    });
};

CTRL.createProduct = (req, res) => {
  const newProduct = new Product({
    code: req.body.code,
    name: req.body.name,
    excerpt: req.body.excerpt,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    image: req.body.image,
    category: req.body.category,
    status: req.body.status
  });

  newProduct.save((err, product) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      product,
    });
  });
};

CTRL.updateProduct = (req, res) => {
  const { productId } = req.params;
  
  Product.findByIdAndUpdate(
    productId,
    req.body,
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        product,
      });
    }
  );
};

CTRL.deleteProduct = (req, res) => {
  const { productId } = req.params;
  Product.findByIdAndRemove(productId, (err, product) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      product,
    });
  });
};

module.exports = CTRL;
