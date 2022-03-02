<template>
  <div id="app">
    <img src="../src/assets/pokemon_logo.png" alt="Logo Pokemon">
    <h1>PokeGuía</h1>
    <div>
      <label for="nombre_pokemon">Nombre</label>
      <input type="text" id="nombre_pokemon" v-model="pokemon.name" @keyup.enter="consultar">
      <button @click="consultar">Buscar</button>
    </div>
    <div v-if="mostrar">
      <img :src="image">
      <h2>Movimientos</h2>
      <ul>
        <li v-for="(a, index) in abilities" :key="index">
          {{ a.ability.name }}
        </li>
      </ul>
      <h2>Habilidades</h2>
      <ul>
        <li v-for="(m, index) in moves" :key="index" v-text="m.move.name"></li>
      </ul>
    </div>
    <p class="mensaje-error" v-else>{{ error_message }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      pokemon: {
        name: 'pikachu',
        abilities:{},
        moves:{},
        sprites:{
          front_default: '',
        },
      },
      error_message: 'No se ha encontrado al pokemon',
      mostrar: true,
    }
  },
  methods:{
    consultar(){
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemon.name}`)
      .then(resp => resp.json())
      .then(data => {
        this.pokemon = data;
        this.mostrar = true;
      })
      .catch(() => {
        this.mostrar = false;
      });
    }
  },
  computed:{
    abilities(){
      return this.pokemon.abilities;
    },
    moves(){
      return this.pokemon.moves;
    },
    image(){
      return this.pokemon.sprites.front_default;
    },
  },
  created(){
    this.consultar();
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Georama:wght@400;700&display=swap');
#app {
  text-align: center;
  color: #3d3e3f;
  margin-top: 60px;
  font-family: 'Georama', sans-serif;
  font-weight: 400;
  font-size: 18px;
}
h1 {
  font-size: 32px;
  font-weight: 700;
}
h2 {
  font-size: 26px;
}
input {
  margin: 0 10px;
  border: 2px solid #5590ff;
  border-radius: 3px;
  padding: .25rem;
  font-family: 'Georama', sans-serif;
  font-weight: 400;
}
button {
  background-color: #5590ff;
  border: 2px solid #5590ff;
  border-radius: 3px;
  color: #ffffff;
  font-weight: bolder;
  padding: .25rem .4rem;
}
ul {
  padding: 0;
  margin-bottom: 40px;
}
li {
  list-style: none;
}
li::first-letter {
  text-transform: uppercase;
}
.mensaje-error {
  color: #ec0000;
}
</style>
