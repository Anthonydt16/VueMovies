<template>
  <div class="accueil">
    <h1>Vue Movie</h1>
    <div class="search">
      <input type="text" v-model="search">
      <div class="container_cards">
        <div class="card" v-for="movie in moviesFiltered">
          <Card :film="movie" :modif="false" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Card from "@/components/card.vue";
import { useMoviesStore } from "@/stores/movies";
export default {
  name: "accueil",
  components: {Card},
  data() {
    return {
      dataMovies: useMoviesStore(),
      moviesFiltered: [],
      name: "",
      year: 0,
      search: ""
    }
  },
  methods: {
    searchMovie() {
      this.moviesFiltered =  this.dataMovies.getMovies.filter(movie => movie.name.includes(this.search))
    },


  },
  mounted() {

    this.dataMovies.setMovies(
        [
          {
            id: 1,
            name: "Le seigneur des anneaux",
            year: 2001,
            realisateur: {
              id: 1,
              name: "Peter Jackson",
              nationality: "New Zealand",
              birth: 1961
            },
            genres:[
              {
                id: 1,
                name: "Fantasy"
              },
              {
                id: 2,
                name: "Aventure"
              }
            ],
            rating: 4.5,
            poster: "https://proxymedia.woopic.com/api/v1/images/822%2Faudiovisual%2Fmovie%2F277%2F3b7%2Fc6952dbfb3b7cdfcd043329e92%2Fmovies-289305-21954066.jpg",
            synopsis: "Frodon Sacquet, un Hobbit, hérite d'un puissant anneau. Il est alors entraîné dans une aventure épique pour détruire l'anneau avant que Sauron, le Seigneur des Ténèbres, ne le récupère."
          },
          {
            id: 2,
            name: "Le seigneur des anneaux 2",
            year: 2002,
            realisateur: {
              id: 1,
              name: "Peter Jackson",
              nationality: "New Zealand",
              birth: 1961
            },
            genres:[
              {
                id: 1,
                name: "Fantasy"
              },
              {
                id: 2,
                name: "Aventure"
              }
            ],
            rating: 4.5,
            poster: "https://proxymedia.woopic.com/api/v1/images/822%2Faudiovisual%2Fmovie%2F277%2F3b7%2Fc6952dbfb3b7cdfcd043329e92%2Fmovies-289305-21954066.jpg",
            synopsis: "Frodon Sacquet, un Hobbit, hérite d'un puissant anneau. Il est alors entraîné dans une aventure épique pour détruire l'anneau avant que Sauron, le Seigneur des Ténèbres, ne le récupère."

          },
          {
            id: 3,
            name: "Le seigneur des anneaux 3",
            year: 2003,
            realisateur: {
              id: 1,
              name: "Peter Jackson",
              nationality: "New Zealand",
              birth: 1961
            },
            genres:[
              {
                id: 1,
                name: "Fantasy"
              },
              {
                id: 2,
                name: "Aventure"
              }
            ],
            rating: 4.5,
            poster: "https://proxymedia.woopic.com/api/v1/images/822%2Faudiovisual%2Fmovie%2F277%2F3b7%2Fc6952dbfb3b7cdfcd043329e92%2Fmovies-289305-21954066.jpg",
            synopsis: "Frodon Sacquet, un Hobbit, hérite d'un puissant anneau. Il est alors entraîné dans une aventure épique pour détruire l'anneau avant que Sauron, le Seigneur des Ténèbres, ne le récupère."
          }
        ]
    );

    this.moviesFiltered = this.dataMovies.getMovies

  },
  watch: {
    search() {
      this.searchMovie()
    }
  }
}
</script>
