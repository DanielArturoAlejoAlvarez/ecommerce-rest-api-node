const config = require("../config/config");
const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  let token = req.get("Authorization");

  jwt.verify(token, config.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msg: "Token invalid!",
      });
    }

    req.user = user.data;

    next();
  });
};

module.exports = {
  isAuth,
};
