<template>
  <div>
    <h1>Ventas</h1>
    <p>Cantidad de juegos con stock: {{ juegosConStock }}</p>
    <table>
      <tbody>
        <tr v-for="(juego, index) in listaJuegosConStock" :key="index">
          <td>{{ juego.nombre }} - {{ juego.stock }}</td>
          <td><button @click="vender(juego)">Vender</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["listaJuegosConStock", "juegosConStock"]),
  },
  methods: {
    vender(juego) {
      this.$store.dispatch("vender", juego);
    },
  },
};
</script>

<style scoped>
  table {
    margin: 30px auto;
    text-align: left;
    border-collapse: collapse;
  }
  td {
    border: 1px solid #DDDDDD;
    padding: .5rem;
  }
  button {
    background-color: #0a8611;
    border:none;
    padding: .4rem 1rem;
    border-radius: 4px;
    color: #FFFFFF;
    cursor: pointer;
  }
  button:hover {
    background-color: #12b61a;
  }
</style>