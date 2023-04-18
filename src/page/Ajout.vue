<template>
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
</template>

<script>
export default {
  name: "Ajout",
  methods: {
    addMovie() {
      this.movies.push({
        name: this.name,
        year: this.year
      });
      this.name = "";
      this.year = "";
    },
    editMovie(movie) {
      this.name = movie.name;
      this.year = movie.year;
      this.movies.splice(this.movies.indexOf(movie), 1);
    }
  },
}
</script>

<style scoped>

</style>