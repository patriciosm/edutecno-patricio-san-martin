<template>
    <b-navbar toggleable="lg" type="light">
        
    <b-navbar-brand to="/"><i class="fas fa-hamburger"></i>Mi App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">INICIO</b-nav-item>
            <b-nav-item to="/buscar">BUSCAR</b-nav-item>
            <b-nav-item to="/acerca-de">ACERCA DE</b-nav-item> 
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
i {
    margin-right: 20px;
}
.navbar-nav {
    font-weight: bold;
}
</style>