<template>
  <div class="accueil">
    <h1>Accueil</h1>
    <h2>Ajouter un film</h2>
    <div class="form">
      <label for="name">Nom du film</label>
      <input type="text" v-model="name">
      <label for="year">Année</label>
      <input type="number" v-model="year" min="1900" max="2023" step="1">
      <button @click="addMovie">Ajouter</button>
    </div>
    <h2>Liste des films</h2>
    <div v-for="movie in movies">
      {{ movie.name }} ({{ movie.year }})<button @click="movies.splice(movies.indexOf(movie), 1)">Supprimer</button>
      <button @click="editMovie(movie)">Modifier</button>
    </div>
    <h2>Recherche dans la liste</h2>
    <div>
      <input type="text" v-model="search">
      <div v-for="movie in moviesFiltered">
        {{ movie.name }} ({{ movie.year }})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accueil",
  data() {
    return {
      movies: [
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
          genre:[
            {
              id: 1,
              name: "Fantasy"
            },
            {
              id: 2,
              name: "Aventure"
            }
          ]
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
          genre:[
            {
              id: 1,
              name: "Fantasy"
            },
            {
              id: 2,
              name: "Aventure"
            }
          ]
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
          genre:[
            {
              id: 1,
              name: "Fantasy"
            },
            {
              id: 2,
              name: "Aventure"
            }
          ]
        }
      ],
      moviesFiltered: [],
      name: "",
      year: 0,
      search: ""
    }
  },
  methods: {
    addMovie() {
      if (this.name !== "" || this.year !== 0) {
        this.movies.push({
          id : this.movies.length + 1,
          name: this.name,
          year: this.year
        })
      }
    },
    searchMovie() {
      this.moviesFiltered =  this.movies.filter(movie => movie.name.includes(this.search))
    },
    editMovie(movie) {
      //remplie les champs du formulaire avec les données du film
      this.name = movie.name
      this.year = movie.year
      //supprime le film de la liste
      this.movies.splice(this.movies.indexOf(movie), 1)
      console.log(movie)

    }

  },
  mounted() {
    this.addMovie()
  },
  watch: {
    search() {
      this.searchMovie()
    }
  }
}
</script>
