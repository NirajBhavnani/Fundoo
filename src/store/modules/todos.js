import axios from "axios";

// state is basically == data()
const state = {
  todo: [],
};

const getters = {
  returnAllTodos: (state) => state.todo,
};

const actions = {
  async getAllTodos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
    commit("setTodos", res.data); //commit is used for mutation
  },
  async addTodos({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
    });
    console.log(res);
    commit("addTodos", res.data);
  },
  async deleteTodos({ commit }, id) {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(res);
    commit("deleteTodos", id);
  },
};

// mutations are basically used for the ease of debugging(dev gets to know which function was triggered for data manipulation)
const mutations = {
  setTodos: (state, todo) => (state.todo = todo),
  addTodos: (state, todo) => state.todo.unshift(todo),
  deleteTodos: (state, id) =>
    (state.todo = state.todo.filter((todo) => todo.id != id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
