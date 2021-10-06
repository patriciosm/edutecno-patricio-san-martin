<template>
    <b-modal id="my-modal" v-model="modalShow" centered v-bind:title="`Escribe tu opnión para el juego: ${gameName}`" @ok.prevent="addOpinion">
          
      <form>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="usuario">
        </div>
        <div class="mb-3">
          <label for="opiniones" class="form-label">Opiniones</label>
          <textarea class="form-control" id="opiniones" v-model="opinion"></textarea>
        </div>
      </form>

      <template #modal-footer>
        <b-button class="float-right" @click="modalShow=false">Cerrar</b-button>
        <b-button variant="primary" class="float-right" @click="addOpinion">Guardar</b-button>
      </template>

    </b-modal>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            modalShow: false,
            usuario: '',
            opinion: ''
        }
    },
    props: ["gameName"],
    methods: {
      addOpinion(){
        if(this.nombre != '' && this.opinion != '') {
          this.$store.commit('ADD_OPINION', [this.gameName, this.usuario, this.opinion])
          this.usuario = '';
          this.opinion = '';
          this.modalShow = false;
        }
      }
    }
}
</script>