import { createStore } from 'vuex';
import todos from './modules/todos';
import SideBar from './modules/SideBar';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos,
    SideBar
  }
})
