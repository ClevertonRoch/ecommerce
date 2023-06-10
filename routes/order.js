const router = require('express').Router()

router.get('/orders', (req, res) => {
  res.send('rota order')
})
router.post('/order', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

module.exports = router
