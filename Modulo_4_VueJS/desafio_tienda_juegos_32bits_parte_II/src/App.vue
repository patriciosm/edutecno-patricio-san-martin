<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/busquedas">Búsquedas</router-link>
      <router-link to="/ventas">Ventas</router-link>
      <router-link to="/total">Total</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #111111;
  padding: 40px 20px;
  width: 100%;
  max-width: 540px;
  margin-right: auto;
  margin: auto;
}
nav {
  margin-bottom: 60px;
}
nav a {
  text-decoration: none;
  background-color: #1A1A1A;
  color: #ffffff;
  padding: 10px;
}
nav a:hover {
  background-color: #000000;
  color: #ffffff;
}
</style>