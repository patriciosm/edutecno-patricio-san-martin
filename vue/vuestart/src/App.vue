<template>
    <div id="app">
        {{ message }}
        <HelloVue></HelloVue>
    </div>
</template>

<script>
import HelloVue from './HelloVue.vue';

export default {
    name: "App",
    components: {
        HelloVue
    },
    data() {
        return {
            message: 'Hola Desafio Latam!!',
        };
    },
};
</script>