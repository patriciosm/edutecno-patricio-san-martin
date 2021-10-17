<template>
    <div>
        <h2 class="text-center mb-5">Administrando la Lista de Opiniones</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Juego</th>
                    <th scope="col">Opinión</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(op, i) in get_opinions" :key="i">
                    <th scope="row">{{ i + 1}}</th>
                    <td>{{ op.usuario }}</td>
                    <td>{{ op.game }}</td>
                    <td>{{ op.opinion }}</td>
                    <td>
                        <button type="button" class="btn btn-danger mr-2" @click="eliminarOpinion(op.id)">Eliminar</button>
                        <button type="button" class="btn btn-info" @click="editarOpinion(op)">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TablaOpiniones',
    computed: {
    ...mapGetters(['get_opinions'])
  },
    methods: {
        editarOpinion(opinion){
            this.$emit('clickEditarOpinion', opinion)
        },
        eliminarOpinion(id){
            this.$store.dispatch("delete_opinion", id)
        }
    }
}
</script>