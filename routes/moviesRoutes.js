const express = require('express')
const router = express.Router()
const movies = require('../controllers/moviesControllers')

router.get('/', movies.index)



module.exports = router