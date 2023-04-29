<template>
  <img :src="film.poster" alt="film poster" />
  <h2>{{ film.name }}</h2>
  <h5>année de sortie: {{ film.year }}</h5>
  <h4>
    {{ film.rating}}
    <span>⭐</span>
  </h4>
  <h5>
    réalisé par:
    <span>{{ film.realisateur.name }}</span>
    <span>{{film.realisateur.nationality}}</span>
  </h5>
  <h4>
    genre:
    <span class="genre" v-for="genre in film.genres" :key="genre.id">{{ genre.name }}</span>
  </h4>
  <h3>Synopsis</h3>
  <p>{{film.synopsis}}</p>
</template>

<script>
import { useMoviesStore} from "@/stores/movies";
export default {
  name: "card",
  props:{
    film: {
      type: Object,
      required: true
    },
modif: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      dataMovies: useMoviesStore(),
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
