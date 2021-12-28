<template>
  <div>
    <h1>Lista de Cursos</h1>
    <v-container>
      <v-row justify="space-around">
        <template v-for="(curso,i) in cursos">
          <v-col :key="i" cols="12" sm="6" lg="4">
            <Card :curso="curso"/>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/components/Card.vue';
export default {
    name: 'Home',
    components: {
      Card
    },
    computed:{
      ...mapState(['cursos']),
    }
  }
</script>
