<template>
  <div>
      <h1>Edición</h1>
      <p>{{ curso }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Edicion",
  props: ["id"],
  computed: {
    ...mapGetters([
      "cursoPorId"
    ]),
    curso(){
      const { id } = this;
      return this.cursoPorId(id);
    }
  }
}
</script>