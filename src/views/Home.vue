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
            </div>
            <div class="col-12">
              <div class="row" id="product-content">
                <Imagens
                  v-for="(produto, index) in produtos"
                  :product="produto"
                  :key="index"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                />
              </div>
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
import Imagens from "@/components/Imagens";

export default {
  name: "Home",
  components: {
    Navbar,
    Imagens,
  },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      allProducts: [],
      produtos: [],
      rows: 1,
      titleBarBgImg: "img34.jpg",
      start: 0,
      end: 0,
    };
  },
  mounted() {
    this.$store.dispatch("setProducts");
    this.allProducts = this.getProducts;
    this.rows = this.allProducts.length;
    this.setProducts(this.currentPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
  watch: {
    currentPage: function (current) {
      this.setProducts(current);
      let element = document.getElementById("product-content");
      let position = element.getBoundingClientRect();
      window.scrollTo({
        top: position.top,
        behavior: "smooth",
      });
    },
  },
  methods: {
    setProducts(current) {
      let temp = current * this.perPage;
      this.start = this.perPage * (current - 1);
      this.end = this.rows <= temp ? this.rows : temp;
      this.produtos = this.allProducts.slice(this.start, this.end);
    },
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
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
  margin: 2px auto;
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
