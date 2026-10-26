const express = require('express')
const app = express()
const movie = require('./routes/movieRoutes')

app.use(express.json())
app.use('/movies', movies)

app.get('/', (req, res) => {
    res.send('What is your favourite studio ghibli movie?')
})

module.exports = app