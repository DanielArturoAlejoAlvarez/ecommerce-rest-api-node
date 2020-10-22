# ECOMMERCE REST API WITH NODE V1.0

## Description

This repository is a Software of Application with NodeJS, Express, Mongoose, JWT, MongoDB, etc.

## Installation

Using Node 12.19, NPM 6.14 preferably.

## Database

Using MongoDB

## Apps

Client Rest: Postman, Insomnia, Talend API Tester, etc

## Plugins

You can use the libs Express, JWT, Bcrypt, Morgan, Cors, etc


## Usage

```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/ecommerce-rest-api-node[NAME APP]

$ yarn install

$ npm run dev [development]

$ npm start [production]

```

Follow the following steps and you're good to go! Important:

![alt text](https://miro.medium.com/max/1202/1*tx_GMMffHZeBDr1RDnStlg.gif)

## Coding

### Config
```js
...
const config = require('./config')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err)=>{
    if (err) {
      console.log(err)
    }
    console.log('DB is connect!')
})
...
```

### Routes
```js
...
const router = require('express').Router()

const authCTRL = require('../controllers/auth/auth.controller')

router.post('/login', authCTRL.login)

module.exports=router
...
```

### Middlewares
```js
...
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
...
```

### Controllers
```js
...
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

...
```

### Models
```js
...
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
...
```





## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/ecommerce-rest-api-node. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

```

```