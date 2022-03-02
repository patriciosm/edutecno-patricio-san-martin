<template>
  <div id="app">
    <div class="container-fluid bg-dark">
      <Navbar />
    </div>
    <div class="container py-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { mapActions } from "vuex"
export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["get_games"])
  },
  mounted(){
    this.get_games();
  }
}
</script>

<style>
  .bg-magenta{
    background-color: #ebb5c6;
    color: #832e2e;
  }
</style>
