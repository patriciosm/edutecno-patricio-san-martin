<template>
    <b-navbar toggleable="lg" type="dark">
        
        <router-link to="/">
            <h4><i class="fas fa-headset"></i>Games Opinion</h4>
        </router-link>
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/"><i class="fas fa-home"></i>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/opiniones"><i class="fas fa-comments"></i>Opiniones</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administracion"><i class="fas fa-users-cog"></i>Administración</router-link>
                </li>
            </ul>
        </b-collapse>
    
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #CCCCCC;
}
a:hover {
    color: #FFFFFF;
}
i {
    margin-right: 8px;
}
.navbar-nav a {
    margin-left: 20px;
}
</style>