<template>
    <div id="home" class="row">
        <div class="col text-center">
            <h2 class="mt-3 mb-5">Bienvenido al área del Home</h2>
            <button class="btn btn-primary" @click="logout">Salir</button>
        </div>
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
    name: 'home',
    methods: {
        logout(){
            const auth = getAuth();
            signOut(auth).then(() => {
                this.$router.push('/login');
            }).catch(() => {});
        }
    }
}
</script>
