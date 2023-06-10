const router = require('express').Router()

router.get('/users', (req, res) => {
  res.send('rota user')
})

router.post('/user', (req, res) => {
  res.json(req.body)
})

module.exports = router
