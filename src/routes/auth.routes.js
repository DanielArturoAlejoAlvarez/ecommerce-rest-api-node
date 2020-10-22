const router = require('express').Router()

const authCTRL = require('../controllers/auth/auth.controller')

router.post('/login', authCTRL.login)

module.exports=router
