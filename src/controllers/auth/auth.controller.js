const config = require("../../config/config");
const User = require("../../models/User");

const CTRL = {};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

CTRL.login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "Username/Password invalid!",
      });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(404).json({
        ok: false,
        msg: "Username/Password invalid!",
      });
    }

    let token = jwt.sign({ data: user }, config.SECRET_KEY, {
      expiresIn: "2h",
    });

    return res.status(201).json({
      ok: true,
      user,
      token,
    });
  });
};

module.exports = CTRL;
