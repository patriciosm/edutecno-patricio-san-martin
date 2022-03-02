<template>
    <div id="app">
        <div class="container">
            <div class="row justify-content-center text-center py-4">
                <div class="col col-md-10 col-lg-8">
                    <h2>Crea una nueva tarea</h2>
                    <div class="row mt-4 mb-5">
                        <div class="col text-end">
                            <label class="col-form-label">Tarea</label>
                        </div>
                        <div class="col-9 col-md-10">
                            <div class="input-group">
                                <input type="text" class="form-control" v-model="nuevaTarea">
                                <button class="btn btn-dark" @click="crearTarea" type="button">Crear</button>
                            </div>
                        </div>
                    </div>
                    <h2>Lista</h2>
                    <div class="row mt-5 text-start justify-content-center">
                        <div class="col-7 col-sm-5 col-lg-4">
                            <ul>
                                <li v-for="(tarea, index) in tareas" :key="index">
                                    <input class="form-check-input me-1" type="checkbox" @click="completarTarea" v-model="tarea.completada">
                                    <label :class="{completada: tareaLista(tarea)}">{{ tarea.texto }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            tareas: [{texto:'Pasear al perro', completada: true}, {texto:'Ir al supermercado', completada: false}],
            nuevaTarea: '',
        };
    },
    methods: {
        crearTarea: function(){
            if(this.nuevaTarea.length > 0) {
                this.tareas.push({texto: this.nuevaTarea, completada:false});
                this.nuevaTarea = '';
            }
        },
        completarTarea: function(tarea){
            tarea.completada = true;
        },
        tareaLista: function(tarea){
            return tarea.completada;
        }
    }
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Georama:wght@300;600&display=swap');
    #app{
        font-family: 'Georama', sans-serif;
    }
    h2{
        font-weight: 600;
    }
    li{
        list-style: none;
    }
    .completada {
        text-decoration: line-through;
    }
</style>