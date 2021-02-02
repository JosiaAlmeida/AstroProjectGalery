<template>
  <div id="Produtos">
    <div class="container-fluid">
      <div class="row">
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
    </div>
  </div>
</template>
<script>
import Imagens from "./Imagens";
// import { mapGetters } from 'vuex'

export default {
  name: "Produtos",
  components: {
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
.altura {
  height: 250px !important;
}
</style>