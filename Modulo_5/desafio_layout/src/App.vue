<template>
  <div id="app">
    <b-container fluid class="bg-light shadow">
      <Navbar />
    </b-container>
    <b-container class="pt-5">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/components/Navbar.vue'
export default {
  name: "App",
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['get_Personajes']),
  },
  mounted(){
    this.get_Personajes();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
