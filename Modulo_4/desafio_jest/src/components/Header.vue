<template>
    <div>
        <h1 v-text="titulo" :style="{color: colorTitulo}"></h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        titulo: String,
        colorTitulo: String
    }
}
</script>