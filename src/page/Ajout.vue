<link rel="stylesheet" href="../style/page/Ajout.scss">
<template>
  <h2>Ajouter un film</h2>
  <div class="form">
    <label for="name" >Nom du film</label>
    <input type="text" v-model="movie.name" @keyup="searchMovie">
    <label for="year">Année</label>
    <input type="number" v-model="movie.year" min="1900" max="2023" step="1">
    <label for="realisateurName">Nom réalisateur</label>
    <input type="text" id="realisateurName" v-model="movie.realisateur.name">
    <label for="genre">Genre du film</label>
    <input type="text" id="genre" @keyup="changeGenre(this)">
    <div class="genre" v-for="genre in genres">
      <span>{{genre.name}}</span>
      <div>X</div>
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
  <div class="list_movies">
    <div class="card" v-for="movie in movies">
      <Card :film="movie" />
      <button @click="editMovie(movie)">Modifier</button>
    </div>
  </div>

</template>

<script>
import { useMoviesStore} from "@/stores/movies";
import Card from "@/components/card.vue";
import axios from "axios";

export default {
  name: "Ajout",
  components: {Card},
  data() {
    return {
      dataMovies: useMoviesStore(),
      movies:null,
      genres: [],
      genre: "",
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
    changeGenre(value){
      let key = event.key
      console.log(key)
      //
    },
    searchMovie() {
      let key = event.key
      console.log(this.movie.name)
      //si l'user dans le champs de recherche appuie sur entrée alors ça valide les données
      if (this.movie.name.length > 2) {
        this.fetchMovies(key)
      }

    },
    async fetchMovies(key) {
      console.log(key)
      if (key === "Enter") {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e4e280d99cfacf94c16adeb58ca0d2cf&query=${this.movie.name}&language=fr-FR`)
        let movie = response.data.results[0]
        this.movie.name = movie.title
        //que l'année
        this.movie.year = movie.release_date.slice(0,4)
        this.movie.rating = movie.vote_average
        this.movie.poster = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
        this.movie.synopsis = movie.overview
        this.movie.realisateur.name = movie.original_title
        console.log(this.movie)
      }


    },

    editMovie(movie) {
      
      this.movie = movie
      this.genres = movie.genres
      console.log(this.genres)
      //supprime le film de la liste
      this.movies.splice(this.movies.indexOf(movie), 1)
      console.log(this.movie)

    },
    addMovie() {
      let movie = {
        id: this.movies.length + 1,
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
            name: this.genre,
          }
        ],
        rating: this.movie.rating,
        poster: this.movie.poster,
        synopsis: this.movie.synopsis,
      }
      this.dataMovies.addMovie(movie)
      console.log(this.dataMovies.getMovies)
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