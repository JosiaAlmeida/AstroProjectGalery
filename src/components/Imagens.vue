<template>
  <div
    class="col-lg-6 col-md-6 col-xl-6 col-sm-12 ImagemGrelha"
  >
    <img :src="loadImg(product.foto)" class="img-fluid img" />
  </div>
</template>

<script>
const productImage = require.context(
  "@/assets/imgs",
  false,
  /\.png$|\.jpg$|\.jpeg$/
);
// const productIcon = require.context('@/assets/svg/', false, /\.png$|\.jpg$|\.svg$/)
export default {
  name: "Imagens",
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {
        return {
          titulo: "Produto",
          foto: "img1.jpeg",
          icon: "ao.svg",
          quantidade: "",
          caracteristica: "",
        };
      },
    },
  },
  methods: {
    loadImg(imgPath) {
      return productImage("./" + imgPath);
    },

    callDetalhePage() {
      this.$router.push({
        name: "detalhes-produto",
        params: { _id: String(this.product._id) },
      });
    },
  },
};
</script>

<style scoped>
.ImagemGrelha {
  width: 100%;
  margin: 1% 0;
  padding: 1% 2%;
  height: 400px;
}
/* .ImagemGrelha:hover{
    cursor: pointer;
} */
.img {
  width: 100%;
  height: 100%;
  border-radius: 7px 7px 0 0;
  object-fit: cover;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-out;
}

.img:hover {
  filter: brightness(80%);
  transition: 0.3s;
  transform: scale(0.9);
}

@media only screen and (max-width: 300px) {
}
</style>
