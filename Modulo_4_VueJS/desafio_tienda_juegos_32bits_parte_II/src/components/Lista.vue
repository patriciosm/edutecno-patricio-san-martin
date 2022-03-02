<template>
    <div>
        <ul>
            <li v-for="(juego, index) in juegos" :key="index">
                <p :style="{backgroundColor:juego.color}">{{ juego.codigo}} | {{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Lista",
    props: {juegos: Array}
}
</script>
<style scoped>
    ul {
        margin-bottom: 30px;
    }
    li {
        list-style: none;
    }
    li p {
        margin: 0;
        text-align: left;
        padding: .3rem .6rem;
    }
</style>