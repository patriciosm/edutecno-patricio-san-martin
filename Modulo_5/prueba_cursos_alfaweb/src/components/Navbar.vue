<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="user.loggedIn">
        <v-btn text @click="logout">
          {{ user.data.email }}<v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-btn text to="/login">
          Login
        </v-btn>
        <v-btn text to="/registro">
          Registro
        </v-btn>
      </template>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item to="/administracion">
            <v-list-item-icon>
              <v-icon>mdi-account-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Administración</v-list-item-title>
          </v-list-item>

          <v-list-item to="/edicion">
            <v-list-item-icon>
              <v-icon>mdi-square-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Edición</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth, signOut } from "firebase/auth";
export default {
    data: () => ({
      drawer: false,
      group: null
    }),
    computed: {
      ...mapGetters({
        user: "user"
      })
    },
    methods: {
      logout(){
        const auth = getAuth();
        signOut(auth).then(() => {
          this.$router.push('/login');
        }).catch((err) => {
          console.log(`Error: ${err.code}`);
        });
      }
    }
}
</script>