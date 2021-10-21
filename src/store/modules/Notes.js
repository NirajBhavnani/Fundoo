import axios from "axios";

const state = {
  notes: [],
  archives: [],
};

const getters = {
  returnAllNotes: (state) => state.notes,
  returnAllArchives: (state) => state.archives
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
  async getAllArchives({commit}){
    try{
        const res = await axios.get('/notes/archive', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        commit('GET_ARCHIVED_NOTES', res.data)
    }catch(error){
        console.log(error)
    }
},
};

const mutations = {
    GET_ALL_NOTES: (state, data) => (state.notes = data.reverse()),
    GET_ARCHIVED_NOTES: (state, data) => (state.archives = data)
};

export default {
    state,
    getters,
    actions,
    mutations
};