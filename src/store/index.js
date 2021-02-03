import Vue from 'vue'
import Vuex from 'vuex'
import produtosJson from '@/data/produtos.json'; 
import Galeria from '@/data/GaleriaImg.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    galery:[]
  },
  mutations: {
    setProducts: state => {
      state.products = produtosJson;
    },
    setGalery:state=>{
      state.galery=Galeria;
    }
  },
  getters: {
    getProducts: state => {
      return state.products;
    },
    getGalery: state=> {
      return state.galery;
    }
  },
  actions:{
    setProducts: context => {
        context.commit('setProducts');
    },
    setGalery: context=>{
      context.commit('setGalery')
    }
  },
});
