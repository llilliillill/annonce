const Router = require('express').Router
const userController = require('../controllers/user-controller')
const router = new Router()
const { body } = require('express-validator')

router.post('/login', 
    body('username').isString(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.login
)

router.post('/logout', 
    userController.logout
)

router.get('/refresh', 
    userController.refresh
)

module.exports = router