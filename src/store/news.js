import axios from "axios";

const state = {
  lists: [],
  error: "",
  totalResults: 0,
};

const mutations = {
  setNews(state, param) {
    state.lists = param.articles;
    state.totalResults = param.totalResults;
  },
  setError(state, param) {
    state.error = param;
  },
};

const actions = {
  fetchListNews(store) {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2855be0bd75a436cb0f78dd5e74313cf`
      )
      .then((response) => {
        console.log("fetchListNews set global state");
        store.commit("setNews", response.data); // ambil dari sini
      })
      .catch((error) => {
        console.log("fetchListNews set global state error", error.message);
        console.log("error status: ", error.response.status);
        store.commit("setError", error.msg);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
