const router = require('express').Router()
const UserModal = require('./../models/User')
const statusCode = require('http-status')
router.post('/auth', async (req, res) => {
  const newUser = new UserModal({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  try {
    const saveUser = await newUser.save()
    console.log(saveUser)
    res.status(statusCode.CREATED).json({ response: 'Registro realizado' })
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json({ erro: error })
  }
})

module.exports = router
