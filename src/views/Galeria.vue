<template>
  <div class="Galeria">
    <Navbar />
    <div class="container-fluid" id="GaleryFund">
      <div class="row">
        <div class="col-12">
          <h1>Galeria</h1>
        </div>
        <div class="col-12">
          <div class="row" id="product-content">
            <ImagensGalery
              v-for="(imgs, index) in Imagem"
              :img="imgs"
              :key="index"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import ImagensGalery from "../components/Galeria/ImagensGalery";
export default {
  name: "Galeria",
  components: {
    Navbar,
    ImagensGalery,
  },

  data() {
    return {
      perPage: 8,
      currentPage: 1,
      allimagem: [],
      Imagem: [],
      rows: 1,
      titleBarBgImg: "img34.jpg",
      start: 0,
      end: 0,
    };
  },
  mounted() {
    this.$store.dispatch("setGalery");
    this.allimagem = this.getGalery;
    this.rows = this.allimagem.length;
    this.setGalery(this.currentPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
  watch: {
    currentPage: function (current) {
      this.setGalery(current);
      let element = document.getElementById("product-content");
      let position = element.getBoundingClientRect();
      window.scrollTo({
        top: position.top,
        behavior: "smooth",
      });
    },
  },
  methods: {
    setGalery(current) {
      let temp = current * this.perPage;
      this.start = this.perPage * (current - 1);
      this.end = this.rows <= temp ? this.rows : temp;
      this.Imagem = this.allimagem.slice(this.start, this.end);
    },
  },
  computed: {
    getGalery() {
      return this.$store.getters.getGalery;
    },
  },
};
</script>
<style scoped>
#GaleryFund {
  position: relative;
}
#GaleryFund::before {
  content: "";
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background: url("../assets/imgs/img45.jpg") no-repeat center center fixed;
  background-size: cover;
  filter: brightness(0.4);
}
</style>
