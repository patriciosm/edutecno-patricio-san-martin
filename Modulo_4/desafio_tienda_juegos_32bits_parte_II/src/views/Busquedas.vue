<template>
  <div>
    <h1>Listado de Juegos</h1>
    <label>Filtrar por código</label>
    <input type="text" v-model="buscar" placeholder="0001">

    <Lista :juegos="filtrarPorCodigo"></Lista>
    
    <p class="negrillas">Cantidad de juegos totales: {{ juegosTotales }} | Total stock: {{ stockTotal }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Lista from '@/components/Lista.vue';

export default {
    data(){
        return {
            buscar:'',
        }
    },
    components: {
        Lista
    },
    computed: {
       ...mapGetters(['listadoJuegos','juegosTotales','stockTotal']),
       filtrarPorCodigo(){
           return this.$store.getters.filtrarPorCodigo(this.buscar);
       }
    }   
}

</script>

<style scoped>
    input {
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #EEEEEE;
        border: 1px solid #555555;
        border-radius: 3px;
    }
    input::placeholder{
        font-style: italic;
    }
    label {
        margin-right: 10px;
        font-weight: bold;
    }
    .negrillas{
        font-weight: bold;
    }
</style>