<template>
  <div id="app" class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <h2 class="my-4">Crea una nueva tarea</h2>
        <div class="input-group">
            <label class="input-group-text" for="tarea">Tarea</label>
            <input class="form-control" type="text" name="inputTarea" id="inputTarea" v-model="nuevaTarea">
            <button class="btn btn-primary" @click="agregarTarea" v-if="!editando">Crear</button>
            <button class="btn btn-primary" @click="guardarTarea(tareaEditada)" v-if="editando">Guardar</button>
        </div>
        <ToDoList :tasks="tareas" @clickEliminar="eliminarTarea" @clickEditar="editarTarea"></ToDoList>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: { ToDoList },
  data(){
    return {
      nuevaTarea: '',
      editando: false,
      tareaEditada: null,
      tareas: [
        {
          nombre:'Pasear al perro',
          estado:'Pendiente'
        },
      ],
    };
  },
  methods:{
    agregarTarea(){
      if(this.nuevaTarea.length > 0) {
        this.tareas.push({nombre: this.nuevaTarea, estado: 'Pendiente'});
        this.nuevaTarea = '';
      }
    },
    eliminarTarea(index){
      this.tareas.splice(index,1);
    },
    editarTarea(index){
      this.editando = true;
      this.nuevaTarea = this.tareas[index].nombre;
      this.tareaEditada = index;
    },
    guardarTarea(index){
      this.tareas[index].nombre = this.nuevaTarea;
      this.nuevaTarea = '';
      this.editando = false;
    }
  }
}
</script>

<style scoped>
  #app {
    text-align: center;
  }
</style>
