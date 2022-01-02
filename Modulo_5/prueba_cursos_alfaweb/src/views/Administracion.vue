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
        <v-simple-table class="mb-5 elevation-1">
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
                <td>
                  <v-chip color="success" outlined>
                    {{ formatoMoneda(curso.costo) }}
                  </v-chip>
                </td>
                <td>{{ terminado(curso.terminado) }}</td>
                <td>
                  <v-chip color="success" outlined>
                    {{ formatDate(curso.fechaRegistro.toDate()) }}
                  </v-chip>
                </td>
                <td>
                  <v-btn icon color="deep-purple" :to="`/edicion/${curso.id}`">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon color="red accent-2" @click="showModalDelete(curso.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="12" class="mt-2">
        <template class="mt-5">
          <v-alert dense outlined elevation="1" text color="purple accent-3" icon="mdi-account-group">
            Cantidad total de alumnos permitidos: {{ totalCupos }} alumnos
          </v-alert>
          <v-alert dense outlined elevation="1" text color="blue lighten-1" icon="mdi-account-multiple-check">
            Cantidad total de alumnos inscritos: {{ totalInscritos }} alumnos
          </v-alert>
          <v-alert dense outlined elevation="1" text color="red accent-3" icon="mdi-account-clock">
            Cantidad total de cupos restantes:
            {{ totalCupos - totalInscritos }} alumnos
          </v-alert>
          <v-alert dense outlined elevation="1" text color="pink accent-4" icon="mdi-cancel">
            Cantidad total de cursos terminados:
            {{ totalCursos - totalCursosActivos }} cursos
          </v-alert>
          <v-alert dense outlined elevation="1" text color="brown darken-1" icon="mdi-bell-ring">
            Cantidad total de cursos activos: {{ totalCursosActivos }} cursos
          </v-alert>
          <v-alert dense outlined elevation="1" text color="deep-orange darken-1" icon="mdi-bell-ring">
            Cantidad total de cursos: {{ totalCursos }} cursos
          </v-alert>
        </template>

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

        <template>
          <v-snackbar v-model="snackbar" :timeout="timeout" color="success" transition="slide-x-reverse-transition">
            <v-icon>mdi-check</v-icon>
            {{ snackbarText }}
          </v-snackbar>
        </template>

      </v-col>
    </v-row>
  </div>
</template>
<script>
import utils from "@/utils/functions.js";
import Modal from "@/components/Modal.vue";
const { formatDate, terminado, formatoMoneda } = utils;
import { mapState, mapGetters } from "vuex";

export default {
  name: "Administracion",
  components: {
    Modal,
  },
  data() {
    return {
      modal: false,
      modalDelete: false,
      idCurso: null,
      snackbar: false,
      timeout: 2000,
      snackbarText: ''
    };
  },
  computed: {
    ...mapState(["cursos"]),
    ...mapGetters([
      "totalCupos",
      "totalInscritos",
      "totalCursos",
      "totalCursosActivos",
    ]),
  },
  methods: {
    formatDate,
    terminado,
    formatoMoneda,
    showModal() {
      this.modal = !this.modal;
    },
    showModalDelete(id = null) {
      this.modalDelete = !this.modalDelete;
      this.idCurso = id;
    },
    deleteCurso() {
      this.$store.dispatch("deleteCurso", this.idCurso);
      this.showModalDelete();
      this.snackbarText = 'El curso ha sido eliminado';
      this.snackbar = true;
    },
  },
};
</script>
