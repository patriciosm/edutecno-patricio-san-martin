<template>
  <div class="list">
    <h2 class="my-4">Tareas</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Item</th>
                <th>Tarea</th>
                <th>Editar</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ task.nombre }}</td>
            <td><button class="btn-acciones" @click="editTask(index)"><i class="fas fa-pencil-alt"></i></button></td>
            <td><button class="btn-acciones" @click="deleteTask(index)"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: {
    tasks: Array,
  },
  methods:{
    editTask(index){
      this.$emit('clickEditar', index);
    },
    deleteTask(index){
      this.$emit('clickEliminar', index);
    }
  }
};
</script>

<style scoped>
.btn-acciones {
  background-color: transparent;
  border: none;
}
</style>
