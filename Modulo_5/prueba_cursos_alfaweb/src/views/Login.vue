<template>
    <v-row class="justify-center mt-5 py-5">
        <v-col cols="12" sm="10" md="8" lg="6">
            <h1>Login</h1>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="login">

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo electrónico"
                required
                ></v-text-field>

                <v-text-field
                v-model="password"
                :counter="8"
                :rules="passwordRules"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                name="password"
                label="Contraseña"
                required
                @click:append="show = !show">
                </v-text-field>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4 mt-4"
                type="submit"
                >
                Iniciar
                </v-btn>

                <v-btn
                color="error"
                class="mr-4 mt-4"
                @click="reset"
                >
                Limpiar Formulario
                </v-btn>

                <v-btn
                color="warning"
                class="mt-4"
                @click="resetValidation"
                >
                Limpiar Validación
                </v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'Login',
    data: () => ({
      valid: true,
      password: '',
      show: false,
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => (v && v.length >= 8) || 'La contraseña debe tener un mínimo de 8 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El correo eletrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo eletrónico debe ser válido',
      ]
    }),
    methods: {
        login(){
            this.validate();
            if(this.valid == true) {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                   this.$router.push('/');
                })
                .catch((err) => {
                    console.log(`Error: ${err.code}`);
                });
            }
        },
        validate () {
            this.$refs.form.validate();
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    }
}
</script>