<template>
  <div>
    <h1 class="mb-5 text-center">Lista de Opiniones</h1>
    <div v-if="cuentaOpiniones > 0">
      <div v-for="(opinion, i) in get_opinions" :key="i">
          <Acordeon :opinion="opinion"/>
      </div>
    </div>
    <div class="bg-magenta p-2" v-else>
      <p>No existen opiniones por mostrar.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Acordeon from '@/components/Acordeon.vue'
export default {
  name: 'Opiniones',

  components: {
    Acordeon
  },
  computed: {
    ...mapGetters(['get_opinions']),
    cuentaOpiniones(){
      return this.get_opinions.length;
    }
  }
}
</script>