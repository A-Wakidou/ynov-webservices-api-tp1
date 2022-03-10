const express = require ('express')
const router = express.Router()
const movies = require('../controllers/movies')

router.get('/moviesList', movies.getMoviesList)
router.get('/getMovie', movies.getMovie)
router.post('/createMovie', movies.createMovie)
router.put('/editMovie', movies.editMovie)
router.delete('/deleteMovie', movies.deleteMovie)
module.exports = router