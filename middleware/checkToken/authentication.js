const jwt = require('jsonwebtoken')
const statusCode = require('http-status')
require('dotenv').config()

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) return res.status(statusCode.UNAUTHORIZED).json({ response: 'É necessário o token de autenticação' })
  const authHeader = req.headers.authorization.split(' ')[1]
  if (authHeader) {
    jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(statusCode.UNAUTHORIZED).json({ success: false, resposnse: 'Falha de autenticação' })
      req.user = user
      next()
    })
  } else {
    res.status(statusCode.BAD_REQUEST).json({ resposnse: 'Formato do token de autenticação invalido' })
  }
}

const verifyTokenAndRole = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.body.id || req.user.role === 0) return next()
    res.status(statusCode.UNAUTHORIZED).json({ response: 'Você não permição de administrador para realizar essa ação' })
  })
}

const verifyTokenOnlyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 0) return next()
    res.status(statusCode.UNAUTHORIZED).json({ response: 'Você não permição de administrador para realizar essa ação' })
  })
}

module.exports = {
  verifyToken,
  verifyTokenAndRole,
  verifyTokenOnlyAdmin
}
