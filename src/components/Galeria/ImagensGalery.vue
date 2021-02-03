<template>
  <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 ImagemGrelha">
    <!-- <img src="../../assets/imgs/img54.jpg" alt="" class="img-fluid" /> -->
    <img :src="loadImg(img.foto)" class="img-fluid img" />
  </div>
</template>
<script>
const ImgGalery = require.context(
  "@/assets/imgs",
  false,
  /\.png$|\.jpg$|\.jpeg$/
);
export default {
  name: "ImagensGalery",
  data() {
    return {};
  },
  props: {
    img: {
      type: Object,
      required: true,
      default: () => {
        return {
        };
      },
    },
  },
  methods: {
    loadImg(imgPath) {
      return ImgGalery("./" + imgPath);
    },
  },
};
</script>
<style scoped>
.ImagemGrelha {
  width: 100%;
  margin: 1% 0;
  padding: 1% 2%;
  height: 650px;
}
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
</style>