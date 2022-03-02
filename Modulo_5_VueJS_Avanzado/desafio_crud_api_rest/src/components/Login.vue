<template>
    <div class="row justify-content-center" id="login">
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body py-4">
                    <h3 class="card-title text-center mb-5">Login</h3>
                    <form @submit.prevent="login">
                        <div class="text-danger mb-3">{{ error }}</div>
                        <div class="mb-3">
                            <label for="correoLogin" class="form-label">Email</label>
                            <input type="email" class="form-control" id="correoLogin" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="passwordLogin" class="form-label">Password</label>
                            <input type="password" class="form-control" id="passwordLogin" v-model="password">
                        </div>
                        <div class="text-center mt-5">
                            <button type="submit" class="btn btn-primary">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'login',
    data() {
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        //email: simon@gmail.com
        //password: desafiolatam
        login(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                this.$router.push('/home');
            })
            .catch((err) => {
                this.error = `El email o la contraseña no son correctos`;
                console.log(`Error: ${err.code}`);
            });
        }
    }
}
</script>