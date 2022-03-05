<template>
    <div class="hellovue">
            <span>{{ message }}</span><br>
            <input v-model="message">
            <img :src="foto">
        <div v-if="mostrar">
            <img v-bind:src="imagen">
        </div>
        <button v-on:click="muestraOculta">Mostrar/Ocultar</button>

        <ul>
            <li v-for="(fruta, index) in frutas" :key="index">
                <span>{{ fruta.name }}</span>
            </li>
        </ul>
        
        Ingrese su nombre
        <input type="text" v-model="name">
        <p>Su nombre es: {{ name }}</p>
        
        <span>Déjanos tu comentario:</span>
        <p style="white-space: pre-line">{{ comment }}</p>
        <textarea v-model="comment" placeholder="Añade tu comentario"></textarea>

        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        <br>

        <input type="checkbox" id="frutilla" value="Frutilla" v-model="checkeado">
        <label for="frutilla">Frutilla</label>
        <input type="checkbox" id="manzana" value="Manzana" v-model="checkeado">
        <label for="manzana">Manzana</label>
        <input type="checkbox" id="kiwi" value="Kiwi" v-model="checkeado">
        <label for="kiwi">Kiwi</label>
        <br>
        <span>Los frutas checkeadas son: {{ checkeado }}</span>
    </div>
</template>

<script>
export default {
    name: "HelloVue",
    data() {
        return {
            checked: true, 
            checkeado: [],
            mostrar: false,
            name: '',
            comment: '',
            message: 'Vue two way binding',
            imagen: 'https://w7.pngwing.com/pngs/854/811/png-transparent-hisoka-hunter-%C3%97-hunter-gon-freecss-anime-character-hisoka-purple-manga-cartoon-thumbnail.png',
            foto: 'https://www.ecured.cu/images/2/21/Gon.jpg',
            frutas:[
                {name: 'Frutillas'},
                {name: 'Manzanas'},
                {name: 'Kiwis'},
            ]
        };
    },
    methods: {
        muestraOculta: function(){
            this.mostrar = !this.mostrar;
        }
    }
};
</script>

<style scoped>
    .hellovue {
        color: royalblue;
        font-size: 20px;
    }
</style>