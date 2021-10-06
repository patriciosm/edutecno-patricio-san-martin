<template>
  <div class="home">
    <h1 class="my-5 text-center">Lista de Juegos Disponibles</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <div class="col" v-for="(game, i) in games" :key="i">
        <Card :game="game" @clickOpenModal="openModal"/>
      </div>
      <Modal :gameName="gameName"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data(){
    return {
      gameName: null
    }
  },
  components: {
    Card,
    Modal
  },
  computed: {
    ...mapState(['games']),
  },
  methods: {
    openModal(name){
      this.gameName = name;
    }
  }
}
</script>
<style>

</style>