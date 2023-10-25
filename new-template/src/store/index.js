import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "@/plugins/http-common";
import axios from "axios"

Vue.use(Vuex);
function getQueryString(data = {}) {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}
export default new Vuex.Store({
  state: {
    oke:"oke"
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setShowNav(state, show) {
      state.showSide = show;
    },
  },
  getters: {
    showSide: state => state.showSide,
    email: state => state.email,
    token: state => state.token
  },
  actions: {
    async postRegister( { commit, state }, payload) {
      return await HTTP.post(
        `profile`,
        payload
      );
    },
    async postLogin( { commit, state }, payload) {
      // return await HTTP.post(
      //   `login`,
      //   payload
      // );
      return axios
        .post(`login`, payload, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          withCredentials: true,
          transformRequest: getQueryString
        });
    },
  }
});
