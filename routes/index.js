const router = require('express').Router()
const UserRouter = require('./User')
const ProductRouter = require('./Product')
const CardRouter = require('./cart')
const OrderRouter = require('./order')
const AuthRouter = require('./auth')

router.use('/', UserRouter)
router.use('/', ProductRouter)
router.use('/', CardRouter)
router.use('/', OrderRouter)
router.use('/', AuthRouter)

module.exports = router
