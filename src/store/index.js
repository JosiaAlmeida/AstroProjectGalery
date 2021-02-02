import Vue from 'vue'
import Vuex from 'vuex'
import produtosJson from '@/data/produtos.json'; 

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts: state => {
      state.products = produtosJson;
    }
  },
  getters: {
    getProducts: state => {
      return state.products;
    }
  },
  actions:{
    setProducts: context => {
        context.commit('setProducts');
    }
  },
});
