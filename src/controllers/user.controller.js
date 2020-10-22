const User = require("../models/User");
const bcrypt = require("bcrypt");

const CTRL = {};

CTRL.getUsers = (req, res) => {
  User.find({})
  .populate('role').exec((err, users) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      users,
    });
  });
};

CTRL.getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
  .populate('role').exec((err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      user,
    });
  });
};

CTRL.createUser = (req, res) => {
  const newUser = new User({
    displayName: req.body.displayName,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    avatar: req.body.avatar,
    role: req.body.role,
    status: req.body.status
  });

  console.log(newUser);
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      user,
    });
  });
};

CTRL.updateUser = (req, res) => {
  const { userId } = req.params;
  
  const updUser = {
    displayName: req.body.displayName,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    avatar: req.body.avatar,
    role: req.body.role,
    status: req.body.status
  }

  User.findByIdAndUpdate(userId, updUser, { new: true }, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      user,
    });
  });
};

CTRL.deleteUser = (req, res) => {
  const { userId } = req.params;
  User.findByIdAndRemove(userId, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      user,
    });
  });
};

module.exports = CTRL;
