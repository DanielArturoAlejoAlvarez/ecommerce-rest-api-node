const router = require('express').Router()

const userCTRL = require('../controllers/user.controller')

const { isAuth } = require('../middlewares/authentication')

router.get('/', userCTRL.getUsers)
router.get('/:userId', userCTRL.getUser)
router.post('/', isAuth, userCTRL.createUser)
router.put('/:userId', isAuth, userCTRL.updateUser)
router.delete('/:userId', isAuth, userCTRL.deleteUser)

module.exports=router

