const router = require('express').Router()

router.get('/products', (req, res) => {
  res.send('rota product')
})
router.post('/product', (req, res) => {
  res.json(req.body)
})

module.exports = router
