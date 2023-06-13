const router = require('express').Router()
const UserModal = require('./../models/User')
const statusCode = require('http-status')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userSchema = require('./../middleware/yupAuthenticate/Shema/user')
const validationData = require('./../middleware/yupAuthenticate')

router.post('/register', validationData(userSchema.checkCreate, 'body'), async (req, res) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(req.body.password, salt)

  const newUser = new UserModal({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })

  try {
    const checkEmail = await UserModal.findOne({ email: req.body.email })
    if (checkEmail) {
      res.status(statusCode.BAD_REQUEST).json({ response: 'Duplicidade de E-mail' })
      return
    }

    await newUser.save()
    res.status(statusCode.CREATED).json({ response: 'Registro realizado' })
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json({ erro: error })
  }
})

router.post('/login', validationData(userSchema.checklogin, 'body'), async (req, res) => {
  try {
    const user = await UserModal.findOne({ email: req.body.email })
    if (!user) {
      res.status(statusCode.NOT_FOUND).json({ erro: 'Usuario não encontrado' })
      return
    }
    const check = bcrypt.compareSync(req.body.password, user.password)
    if (!check) {
      res.status(statusCode.NOT_ACCEPTABLE).json({ erro: 'Senha invalida' })
      return
    }
    const checkPass = bcrypt.compareSync(req.body.password, user.password)
    if (!checkPass) {
      res.status(statusCode.NOT_ACCEPTABLE).json({ erro: 'Senha invalida' })
      return
    }
    const acessoToken = jwt.sign({
      id: user._id,
      name: user.username,
      email: user.email,
      role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '8h' })
    const data = {
      name: user.username,
      email: user.email,
      role: user.role

    }

    res.status(statusCode.OK).json({
      data,
      acessoToken
    })
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json({ erro: error })
  }
})

module.exports = router
