<template>
  <v-card>
    <v-img height="200px" contain :src="curso.imagen">
    </v-img>
    
    <v-card-text class="grey lighten-3">
      <div class="font-weight-bold ml-8 mb-2">
      {{ curso.nombre }}
      </div>

      <v-timeline align-top dense>
        <v-timeline-item color="deep-purple lighten-1" small>
          <div>
            <div class="font-weight-normal">
              Costo: <strong>{{ formatoMoneda(curso.costo) }}</strong>
            </div>
            <div>Duración: {{ curso.duracion }}</div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="green" small>
          <div>
            <div class="font-weight-normal">
              Cupos: <strong>{{ curso.cupos }}</strong>
            </div>
            <div>Completado: {{ terminado(curso.terminado) }}</div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="deep-purple lighten-1" small>
          <div>
            <div class="font-weight-normal">
              Fecha de Registro:
            </div>
            <div>{{ formatDate(curso.fechaRegistro) }}</div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="green" small>
          <div>
            <div class="font-weight-normal">
              Descripción:
            </div>
            <div>{{ curso.descripcion }}</div>
          </div>
        </v-timeline-item>

      </v-timeline>

    </v-card-text>
  </v-card>
</template>

<script>
import utils from '@/utils/functions.js'
const { formatDate, terminado, formatoMoneda } = utils;
  export default {
    data(){
      return {

      }
    },
    props:['curso'],
    methods: {
      formatDate,
      terminado,
      formatoMoneda
    }
  }
</script>