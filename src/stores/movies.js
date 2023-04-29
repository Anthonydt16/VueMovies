import { defineStore } from 'pinia'
export const useMoviesStore = defineStore('movies', {
    state: () => ({
        //movies dans le local storage
        movies: []
    }),
    getters: {
        getMovies() {
            this.movies = JSON.parse(localStorage.getItem('movies')) || []
            return this.movies
        }
    },
    actions: {
        setMovie(movie) {
            //set movie dans le local storage
            this.movies.push(movie)
        },
        setMovies(movies) {
            this.movies = movies
        },
        addMovie(movie) {
            this.movies.push(movie)
        },
        deleteMovie(movie) {
            this.movies = this.movies.filter(m => m.id !== movie.id)
        },
        saveMovies() {
            localStorage.setItem('movies', JSON.stringify(this.movies))
        }
    },
    watch: {
        movies() {
            console.log('movies changed')
        }
    }
});
