import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
    barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
    barImage: "./assets/pricing.jpg",
    drawer: null,
    APIData: null,
    login_data: null
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload;
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
    SET_USER_DATA(state, login_data) {
      console.log(
        "Storejs: " + login_data.username + " " + login_data.access_token
      );
      state.login_data = login_data;
      localStorage.setItem("username", login_data.username);
      localStorage.setItem("access_token", login_data.access_token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${login_data.access_token}`;
    },
    CLEAR_USER_DATA(state) {
      localStorage.removeItem("username");
      localStorage.removeItem("access_token");
      state.login_data = null;
      state.APIData = null;
      axios.defaults.headers.common["Authorization"] = null;
    }
  },
  actions: {
    login({ commit }, credentials) {
      console.log(
        "Login store.js: " + credentials.username + " " + credentials.password
      );
      return axios
        .post(`http://localhost:8000/login`, credentials, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          withCredentials: true,
          transformRequest: getQueryString
        })
        .then(response => {
          var user_data = {
            username: credentials.username,
            access_token: response["data"].access_token,
            token_type: response["data"].token_type
          };

          commit("SET_USER_DATA", user_data);
        });
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
    update_drawer({ commit }) {
      commit("SET_DRAWER");
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.login_data;
    }
  }
});
