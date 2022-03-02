<template>
  <div v-if="curso">
      <h1>Editando el curso: {{ curso.nombre }}</h1>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-form ref="form" v-model="validForm" lazy-validation>
              <v-text-field label="Nombre" :counter="40" required v-model="curso.nombre" :rules="nombreRules">
              </v-text-field>

              <v-text-field label="URL de la imagen del curso" required v-model="curso.imagen" :rules="imagenRules">
              </v-text-field>

              <v-text-field label="Cupos del curso" type="number" required v-model.number="curso.cupos" :rules="cuposRules">
              </v-text-field>

              <v-text-field label="Inscritos del curso" type="number" v-model.number="curso.inscritos" :rules="inscritosRules">
              </v-text-field>

              <v-text-field label="Duración del curso" required v-model="curso.duracion" :rules="duracionRules">
              </v-text-field>

              <v-text-field label="Costo del curso" type="number" required v-model.number="curso.costo" :rules="costoRules">
              </v-text-field>

              <v-text-field label="Código del curso" required v-model="curso.codigo" :rules="codigoRules">
              </v-text-field>

              <v-textarea outlined label="Descripción del curso" v-model="curso.descripcion"></v-textarea>
            
              <v-menu ref="menu" v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition" offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-bind:value="formatDate(curso.fechaRegistro)"
                    v-on:input="curso.fechaRegistro = $event.target.value"
                    label="Fecha de registro"
                    prepend-icon="mdi-calendar"
                    @blur="date = curso.fechaRegistro"
                    readonly v-bind="attrs" v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="curso.fechaRegistro"
                  :first-day-of-week="1"
                  no-title scrollable
                  locale="cl"
                  @input="menu = false">
                </v-date-picker>
              </v-menu>

              <v-switch v-model="curso.terminado" :label="`Terminado: ${terminado(curso.terminado)}`">
              </v-switch>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import utils from '@/utils/functions.js';
const { formatDate, terminado } = utils;
import { mapGetters } from 'vuex';
export default {
  name: "Edicion",
  props: ["id"],
  data() {
    return {
      menu: false,
      validForm: true,
      nombreRules:[
          v => !!v || 'El nombre del curso es requerido',
      ],
      imagenRules:[
          v => !!v || 'La imagen del curso es requerida',
      ],
      cuposRules:[
          v => !!v || 'La cantidad de cupos es requerida',
          v => ( v > 0) || 'Los cupos deben ser mayores que 0'
      ],
      inscritosRules: [
          v => ( v <= this.curso.cupos ) || "Los alumnos inscritos no pueden ser mayores a los cupos",
          v => ( v >= 0) || 'Los alumnos inscritos deben ser mayores o iguales que 0'
      ],
      duracionRules: [
          v => !!v || 'La duración del curso es requerida',
      ],
      costoRules: [
          v => !!v || 'El costo del curso es requerido',
          v => ( v > 0) || 'El costo debe ser mayor que 0'
      ],
      codigoRules: [
          v => !!v || 'El código del curso es requerido',
      ]
    }
  },
  computed: {
    ...mapGetters(["cursoPorId"]), 
    curso(){
      const { id } = this;
      return this.cursoPorId(id);
    }
  },
  methods: {
    terminado,
    formatDate
  }
}
</script>