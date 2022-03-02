<template>
  <v-row class="justify-center mt-5 py-5">
    <v-col cols="12" sm="10" md="8" lg="6">
      <h1>Registro</h1>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="registrar"
      >
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
          @click:append="show = !show"
        >
        </v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 mt-4"
          type="submit"
        >
          Registrar
        </v-btn>

        <v-btn color="error" class="mr-4 mt-4" @click="reset">
          Limpiar Formulario
        </v-btn>

        <v-btn color="warning" class="mt-4" @click="resetValidation">
          Limpiar Validación
        </v-btn>
        <v-alert v-model="alert" dense outlined type="error" class="mt-5">
          El usuario ya existe
        </v-alert>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Registro",
  data: () => ({
    valid: true,
    password: "",
    show: false,
    alert: false,
    passwordRules: [
      (v) => !!v || "La contraseña es requerida",
      (v) =>
        (v && v.length >= 8) ||
        "La contraseña debe tener un mínimo de 8 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "El correo eletrónico es requerido",
      (v) => /.+@.+\..+/.test(v) || "El correo eletrónico debe ser válido",
    ],
  }),
  methods: {
    registrar() {
      this.validate();
      if (this.valid == true) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            this.alert = false;
            this.$router.push("/");
          })
          .catch(() => {
            this.alert = true;
          });
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
