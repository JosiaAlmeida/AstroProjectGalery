<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">AstroGalery</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/"><b-nav-item href="/">Inicio</b-nav-item></router-link>
        <router-link to="/Galeria"> <b-nav-item href="/Galeria">Galeria</b-nav-item></router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
.navbar {
  z-index: 1 !important;
  position: fixed!important;
  width: 100%;
}
</style>