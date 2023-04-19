import { defineStore } from 'pinia'
export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [],
    }),
    getters: {
        getMovies() {
            return this.movies
        }
    },
    actions: {
        setMovie(movie) {
            this.movies.push(movie)
        },
        setMovies(movies) {
            this.movies = movies
        },
        addMovie(movie) {
            this.movies.push(movie)
        }
    },
    watch: {
        movies() {
            console.log('movies changed')
        }
    }
});