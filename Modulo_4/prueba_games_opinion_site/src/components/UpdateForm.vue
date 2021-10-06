<template>
<div>
    <h2 class="text-center">Editando la opinión de: {{ opinion.game }}</h2>
    <form @submit.prevent="actualizar">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="usuario">
        </div>
        <div class="mb-3">
          <label for="opiniones" class="form-label">Opiniones</label>
          <textarea class="form-control" id="opiniones" v-model="comentario"></textarea>
        </div>
        <button type="button" class="btn btn-secondary mr-2" @click="cancelar">Cancelar</button>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'UpdateForm',
    props: ["opinion"],
    data() {
        return {
            id: this.opinion.id,
            usuario: this.opinion.usuario,
            comentario: this.opinion.opinion,
        }
    },
    methods: {
        actualizar() {
            this.$store.commit("UPDATE_OPINION", [this.id, this.usuario, this.comentario])
            this.$emit('clickActualizarOpinion');
        },
        cancelar(){
            this.$emit('clickCancelar');
        }
    }
}
</script>