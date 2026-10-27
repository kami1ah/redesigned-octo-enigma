const movies = require ('../movies.json')


class Title {
    constructor(movie) {
        this.id = movie.id
        this.title = movie.title
        this.original_title = movie.original_title
        this.original_title_romanised = movie.original_title
        this.image = movie.image
        this.movie_banner = movie.movie_banner
        this.description = movie.description
        this.director = movie.director
        this.producer = movie.producer
        this.release_date = movie.release_date
        this.running_time = movie.running_time
        this.rt_score = movie.rt_score
        this.people = movie.people
        this.species = movie.species
        this.locations = movie.locations
        this.vehicles = movie.vehicles
        this.url = movie.url

    }

    static showAll() {
        return movies.map(q => newFruit(q))
    }
    static show(title) {
        const movie = movies.find((movie) => movie.title.toLowerCase() == title)
        if (movie) {
            return new Title(movie)
        } 
        else {
            throw 'This movie does not exist'
        }
    }
}



module.exports = Title 