<template>
  <h2>Ajouter un film</h2>
  <div class="form">
    <label for="name">Nom du film</label>
    <input type="text" v-model="movie.name">
    <label for="year">Année</label>
    <input type="number" v-model="movie.year" min="1900" max="2023" step="1">
    <label for="realisateurName">Nom réalisateur</label>
    <input type="text" id="realisateurName" v-model="movie.realisateur.name">
    <label for="genre">Genre du film</label>
    <input type="text" id="genre" v-model="genre.name">
    <div v-for="movie in movie.genre">
    </div>
    <label>Evalutation /5</label>
    <input type="text" v-model="movie.rating">
    <label for="poster">Poster</label>
    <input type="text" id="poster" v-model="movie.poster">
    <label for="synopsis">Synopsis</label>
    <input type="text" id="synopsis" v-model="movie.synopsis">
    <button @click="addMovie">Ajouter</button>
  </div>
  <h2>Liste des films</h2>
  <div v-for="movie in movies">
    <p>{{movie.name}}</p>
    <button @click="editMovie(movie)">Modifier</button>
  </div>
</template>

<script>
import { useMoviesStore} from "@/stores/movies";

export default {
  name: "Ajout",
  data() {
    return {
      dataMovies: useMoviesStore(),
      movies:null,
      genre: {
        id: 0,
        name: "",
      },
      movie: {
        id: 0,
        name: "",
        year: 0,
        realisateur: {
          id: 1,
          name:"",
          nationality: "",
          birth: 0,
        },
        genres: [],
        rating: 0,
        poster: "",
        synopsis: "",
      }
    }
  },
  methods: {
    addMovie() {
      let movie = {
        id: this.movies.getMovies.length + 1,
        name: this.movie.name,
        year: this.movie.year,
        realisateur: {
          id: 1,
          name: this.movie.realisateur.name,
          nationality: "",
          birth: 0,
        },
        genres: [
          {
            id: 1,
            name: this.genre.name,
          }
        ],
        rating: this.movie.rating,
        poster: this.movie.poster,
        synopsis: this.movie.synopsis,
      }
      this.movies.addMovie(movie)
      console.log(this.movies.getMovies)
    }
  },
  mounted() {
    this.movies = this.dataMovies.getMovies
    console.log(this.movies)
  }
}
</script>

<style scoped>

</style>