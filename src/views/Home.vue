<template>
  <div class="Home">
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <section class="col-12 home">
          <div class="row">
            <div class="col-12 ">
              <h1 class="TextHomeTitulo">Astro Galeria</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
<style scoped>
.home {
  position: relative;
  height: 90vh;
}
.home::before {
  content: "";
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/imgs/img10.jpg") fixed;
  background-size: cover;
  filter: brightness(.8) opacity(.9);
}
.TextHomeTitulo{
  text-align: center;
  color:rgb(220, 228, 227);
  margin:100px auto !important;
  font-size: 70px;
}
</style>
