<template>
    <v-row justify="center">
        <v-dialog v-model="mostrarModal" max-width="500px" @click:outside="closeModal">

        <v-card>
            <v-card-title>
            <span class="text-h5">Agregando Curso</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                <v-col cols="12">
                    <v-text-field label="Nombre" :counter="40" required v-model="nombre">
                    </v-text-field>
                
                    <v-text-field label="URL de la imagen del curso" required v-model="imagen">
                    </v-text-field>
                
                    <v-text-field label="Cupos del curso" type="number" required v-model.number="cupos">
                    </v-text-field>
                
                    <v-text-field label="Inscritos del curso" type="number" required v-model.number="inscritos">
                    </v-text-field>

                    <v-text-field label="Duración del curso" required v-model="duracion">
                    </v-text-field>

                    <v-text-field label="Costo del curso" type="number" required v-model.number="costo">
                    </v-text-field>

                    <v-text-field label="Código del curso" required v-model="codigo">
                    </v-text-field>

                    <v-textarea outlined label="Descripción del curso" v-model="descripcion"></v-textarea>
                </v-col>
                
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="red darken-1" @click="closeModal()">
                Cancelar
            </v-btn>
            <v-btn dark color="deep-purple" @click="addCurso()">
                Agregar Curso
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return {
        nombre:'',
        imagen: '',
        cupos: null,
        inscritos: null,
        duracion: '',
        costo: null,
        codigo: '',
        descripcion: ''
        }
    },
    props:['mostrarModal'],
    methods: {
        closeModal(){
           this.$emit("close");
        },
        addCurso(){
            this.$store.dispatch("addCurso",[this.codigo, this.costo, this.cupos, this.descripcion, this.duracion, false, this.imagen, this.inscritos, this.nombre]);
            this.closeModal();
            this.nombre = '',
            this.imagen = '',
            this.cupos = null,
            this.inscritos = null,
            this.duracion = '',
            this.costo = null,
            this.codigo = '',
            this.descripcion = ''
        }
    }
}
</script>