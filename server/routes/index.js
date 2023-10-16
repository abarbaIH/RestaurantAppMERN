const router = require('express').Router()

router.use("/restaurants", require('./restaurant.routes'))
router.use("/auth", require('./auth.routes'))


module.exports = router

