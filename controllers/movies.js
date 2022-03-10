const Movies = require('../models/movies')

exports.getMoviesList = (req, res, next) => {
    Movies.findAll()
        .then( (response => {
            res.status(200).json({movies: response})
        }))
        .catch( err => {
            return res.status(400).json({error: err})
        }) 
}

exports.getMovie = (req, res) => {
    Movies.findOne( {
        where : { id: req.query.movieId}
    })
        .then( (response => {
            res.status(200).json({movie: response})
        }))
        .catch( err => {
            return res.status(404).json({error: err})
        }) 
}

exports.createMovie = (req, res, next) => {
    console.log(req)
    const movieToCreate = new Movies( {
        name: req.query.name,
        description: req.query.description,
        date: req.query.date,
        note: req.query.note
    })

    movieToCreate.save()
        .then ( () => {
            res.status(201).json({message:'Create success'})
        })
        .catch( err => {
            return res.status(404).json({error: err})
        })
}

exports.editMovie = (req, res) => {
    Movies.update(
        {
            name: req.query.name,
            description: req.query.description,
            date: req.query.date,
            note: req.query.note
        },
        {
            where: {
                id: req.query.movieId
            }
        }
    )
        .then( () => {
            res.status(200).json({message: 'Movie updated'})
        })
}

exports.deleteMovie = (req, res) => {
    Movies.destroy({
        where: { id: req.query.movieId}
    })
        .then ( () => {
            res.status(200).json({message:'Delete success'})
        })
        .catch( err => {
            return res.status(404).json({error: err})
        })
}