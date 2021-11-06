<template>
  <div>
    <h1 class="my-5">Administración</h1>
    <v-row>
      <v-col cols="12" class="mb-5">
        <v-btn depressed color="deep-purple" dark @click="showModal()">
          Agregar curso
        </v-btn>
        <Modal :mostrarModal="modal" @close="showModal" />
      </v-col>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Cupos</th>
                <th>Inscritos</th>
                <th>Duración</th>
                <th>Costo</th>
                <th>Terminado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="curso in cursos" :key="curso.id">
                <td>{{ curso.nombre }}</td>
                <td>{{ curso.cupos }}</td>
                <td>{{ curso.inscritos }}</td>
                <td>{{ curso.duracion }}</td>
                <td>{{ curso.costo }}</td>
                <td>{{ curso.terminado }}</td>
                <td>{{ formatDate(curso.fechaRegistro.toDate()) }}</td>
                <td>
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon @click="showModalDelete(curso.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>

                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <template>
          <v-dialog v-model="modalDelete" persistent max-width="400px">
            <v-card class="py-5">
              <v-card-title class="mb-5 justify-center">
                <span class="text-h5">Desea eliminar el curso</span>
              </v-card-title>
              <v-card-actions class="d-flex justify-space-around">
                <v-btn color="deep-purple" dark @click="showModalDelete()">
                  Cancelar
                </v-btn>
                <v-btn color="red darken-1" dark @click="deleteCurso()">
                  Si, borrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import utils from "@/utils/functions.js";
import Modal from "@/components/Modal.vue";
const { formatDate } = utils;
import { mapGetters } from "vuex";

export default {
  name: "Administracion",
  components: {
    Modal,
  },
  data() {
    return {
      modal: false,
      modalDelete: false,
      idCurso: null
    };
  },
  computed: {
    ...mapGetters(["cursos"]),
  },
  methods: {
    formatDate,
    showModal() {
      this.modal = !this.modal;
    },
    showModalDelete(id = null){
      this.modalDelete = !this.modalDelete;
      this.idCurso = id;
    },
    deleteCurso(){
      this.$store.dispatch("deleteCurso", this.idCurso);
      this.showModalDelete();
    }
  },
};
</script>
