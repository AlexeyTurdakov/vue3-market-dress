import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [],
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },

  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
});

export default store;
