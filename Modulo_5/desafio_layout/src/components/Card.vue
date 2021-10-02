<template>
    <b-card
        v-bind:title="personaje.nombre"
        v-bind:img-src="personaje.imagen"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-5 text-left shadow-sm"
    >
    </b-card>
</template>

<script>
export default {
    name: 'Card',
    props:["personaje"]
}
</script>