import axios from "axios";

const state = {
  notes: [],
};

const getters = {
  returnAllNotes: (state) => state.notes,
};

const actions = {
  async getAllNotes({ commit }) {
    try {
      const res = await axios.get("/notes", {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      console.log(res.data);
      commit("GET_ALL_NOTES", res.data); //commit is used for mutation
    } catch (error) {
        console.log(error);
    }
  },
};

const mutations = {
    GET_ALL_NOTES: (state, data) => (state.notes = data.reverse()),
};

export default {
    state,
    getters,
    actions,
    mutations
};