<template>
    <div class="card mb-4">
        <div class="ratio ratio-16x9">
            <img :src="game.img" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ game.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{ game.rating }}</li>
            <li class="list-group-item">Released: {{ game.released }}</li>
            <li class="list-group-item">Updated: {{ formatoFecha(game.updated) }}</li>
        </ul>
        <div class="card-body text-center">
            <!-- <b-button v-b-modal.my-modal variant="primary">Opinar</b-button> -->
            <b-button variant="primary" @click="openModal(game.name)">Opinar</b-button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: ["game"],
    methods: {
        openModal(gameName){
            this.$bvModal.show('my-modal');
            this.$emit('clickOpenModal', gameName);
        },
        formatoFecha(fecha){
            return fecha.substring(0,10).split("-").reverse().join("-");
        }
    }
}
</script>