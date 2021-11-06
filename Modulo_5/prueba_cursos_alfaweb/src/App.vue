<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['getCursos']),
  },
  mounted(){
    this.getCursos();
  }
};
</script>
