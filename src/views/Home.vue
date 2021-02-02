<template>
  <div class="Home">
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <section class="col-12 home">
          <div class="row">
            <div class="col-12">
              <h1 class="TextHomeTitulo">Astro Galeria</h1>
              <p class="TextHomeText">A GALERIA COM AS MELHORES IMAGENS</p>
            </div>
          </div>
        </section>
        <section class="col-12 fundo" id="Imagens">
          <div class="row">
            <div class="col-12">
              <h3 data-aos="fade-right" data-aos-duration="1000">
                Nossas Melhores Imgens
              </h3>
              <ImagensP />
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
import ImagensP from "@/components/ImagensP";

export default {
  name: "Home",
  components: {
    Navbar,
    ImagensP,
  },
};
</script>
<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.home::before {
  content: "";
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/imgs/img10.jpg") no-repeat;
  background-size: cover;
  filter: brightness(0.5) opacity(0.9);
  -webkit-filter: brightness(0.5) opacity(0.9);
  -moz-filter: brightness(0.5) opacity(0.9);
  -ms-filter: brightness(0.5) opacity(0.9);
}
.TextHomeTitulo {
  text-align: center;
  color: rgb(220, 228, 227);
  margin: 10% auto !important;
  font-size: 100px;
}
h3 {
  text-align: center;
  color: rgb(220, 228, 227);
  font-size: 48px;
}
.TextHomeText {
  text-align: center;
  color: rgb(220, 228, 227);
  margin: 100px auto !important;
  font-size: 48px;
  /* font: bold; */
}
.fundo {
  position: relative;
  margin: 10px auto;
}
.fundo::before {
  content: " ";
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/imgs/img9.jpg") no-repeat center center fixed;
  filter: brightness(0.5);
  -webkit-filter: brightness(0.5);
  -moz-filter: brightness(0.5);
  -ms-filter: brightness(0.5);
}
@media only screen and (max-width: 600px) {
  .TextHomeText {
    text-align: center;
    color: rgb(220, 228, 227);
    margin: 100px auto !important;
    font-size: 38px;
    /* font: bold; */
  }
  .TextHomeTitulo {
    text-align: center;
    color: rgb(220, 228, 227);
    margin: 10% auto !important;
    font-size: 80px;
  }
}
</style>
