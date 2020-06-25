const express = require('express')
const router = express.Router()

const PeriodController = require('../controllers/PeriodController')

router.get('/', PeriodController.index)
router.get('/:id', PeriodController.show)
router.post('/', PeriodController.store)

module.exports = router
