const router = require('express').Router()
const authToken = require('../middleware/checkToken/authentication')
const userSchema = require('./../middleware/yupAuthenticate/Shema/user')
const validationData = require('./../middleware/yupAuthenticate')
const userController = require('./../controllers/UserControllers')

router.get('/admin/users',
  authToken.verifyTokenAndRole,
  userController.FindAll
)

router.get('/admin/user/:id?',
  validationData(userSchema.checkId, 'params'),
  authToken.verifyTokenAndRole,
  userController.FindId
)

// GET USER STATS
router.get('/admin/stats',
  authToken.verifyTokenOnlyAdmin,
  userController.stats)

router.put('/admin/user',
  validationData(userSchema.checkUpdate, 'body'),
  authToken.verifyTokenAndRole,
  userController.Update
)

router.delete('/admin/user/:id?',
  validationData(userSchema.checkId, 'params'),
  authToken.verifyTokenAndRole,
  userController.Delete
)

module.exports = router
