<template>
  <div>
    <div v-if="cuentaOpiniones > 0">
      <UpdateForm :opinion="opinion" @clickActualizarOpinion="actualizarOpinion" @clickCancelar="mostrarTabla" v-if="editar"/>
      <TablaOpiniones @clickEditarOpinion="editarOpinion" v-else/>
    </div>
    <div v-else>
      <h1 class="mb-5 text-center">Lista de Opiniones</h1>
      <div class="bg-magenta p-2">
        <p>No existen opiniones por administrar.</p>
      </div>
    </div>
  </div>
</template>

<script>
import TablaOpiniones from '@/components/TablaOpiniones.vue'
import UpdateForm from '@/components/UpdateForm.vue'
export default {
  name: 'Administracion',
  data(){
    return {
      editar: false,
      opinion: {},
    }
  },
  components: {
    TablaOpiniones,
    UpdateForm
  },
  computed: {
    cuentaOpiniones(){
        return this.$store.getters.get_opinions.length;
      }
  },
  methods: {
    editarOpinion(opinion){
      this.editar = true;
      this.opinion = opinion;
    },
    actualizarOpinion(){
      this.mostrarTabla();
    },
    mostrarTabla(){
      this.editar = false;
      this.opinion = {};
    }
  }
}
</script>