const express = require('express')
const router = express.Router()

const customers = require('./customers')

// Add customers Routes
router.use(customers)

module.exports = router
