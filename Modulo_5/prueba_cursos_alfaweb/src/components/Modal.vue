<template>
    <v-row justify="center">
        <v-dialog v-model="mostrarModal" persistent max-width="500px" @click:outside="closeModal">
            <v-form ref="form" v-model="validForm" lazy-validation @submit.prevent="addCurso">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Agregando Curso</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field label="Nombre" :counter="40" required v-model="nombre" :rules="nombreRules">
                                </v-text-field>
                            
                                <v-text-field label="URL de la imagen del curso" required v-model="imagen" :rules="imagenRules">
                                </v-text-field>
                            
                                <v-text-field label="Cupos del curso" type="number" required v-model.number="cupos" :rules="cuposRules">
                                </v-text-field>
                            
                                <v-text-field label="Inscritos del curso" type="number" v-model.number="inscritos" :rules="inscritosRules">
                                </v-text-field>

                                <v-text-field label="Duración del curso" required v-model="duracion" :rules="duracionRules">
                                </v-text-field>

                                <v-text-field label="Costo del curso" type="number" required v-model.number="costo" :rules="costoRules">
                                </v-text-field>

                                <v-text-field label="Código del curso" required v-model="codigo" :rules="codigoRules">
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
                        <v-btn dark color="deep-purple" type="submit">
                            Agregar Curso
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
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
            descripcion: '',
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
                v => ( v <= this.cupos ) || "Los alumnos inscritos no pueden ser mayores a los cupos",
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
    props:['mostrarModal'],
    methods: {
        closeModal(){
           this.$emit("close");
           this.reset();
        },
        validate () {
            this.$refs.form.validate();
        },
        addCurso(){
            this.validate();
            if(this.validForm == true) {
                this.$store.dispatch("addCurso",[this.codigo, this.costo, this.cupos, this.descripcion, this.duracion, false, this.imagen, this.inscritos, this.nombre]);
                this.closeModal();
            }
        },
        reset(){
            this.$refs.form.reset()
        }
    }
}
</script>