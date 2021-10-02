<template>
  <b-row cols="1" cols-md="2" cols-lg="3" class="home">
    <b-col v-for="(personaje, i) in personajes" :key="i">
      <Card :personaje="personaje"/>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState(['personajes'])
  }
}
</script>
