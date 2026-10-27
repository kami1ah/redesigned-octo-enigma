const Title = require('../models/movieModel')


//Creating routes
const index = async (req, res) => {
    try {
        const movies = await Title.showAll()
        res.status(200).send(movies)
    }catch(err) {
        res.status(500).send({error: 'Server error'})
    }
}




module.exports = {index}