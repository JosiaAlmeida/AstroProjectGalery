<template>
  <div class="Galeria">
    <Navbar />
    <div class="container-fluid" id="GaleryFund">
      <div class="row">
        <div class="col-12">
          <h1>Galeria</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
name:'Galeria',
components:{
  Navbar,
} 
}
</script>
<style scoped>
#GaleryFund{
  position:relative;
  height: 100vh;
}
#GaleryFund::before{
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position:absolute;
  background: url('../assets/imgs/img45.jpg')no-repeat center center fixed;
  background-size:cover;
  filter: brightness(.4);
}
</style>
