const router = require('express').Router()

router.get('/carts', (req, res) => {
  res.send('rota cart')
})
router.post('/cart', (req, res) => {
  res.json(req.body)
})

module.exports = router
