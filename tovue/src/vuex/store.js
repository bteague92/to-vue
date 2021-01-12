import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        body: "todo one",
        completed: false,
      },
    ],
    newTodo: "",
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo;
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodo,
        completed: false,
      });
    },
  },
  actions: {
    getTodo({ commit }, todo) {
      commit("GET_TODO", todo);
    },
    addTodo({ commit }) {
      commit("ADD_TODO");
    },
  },
  getters: {
    newTodo: function(state) {
      return state.newTodo;
    },
    todos: function(state) {
      return state.todos;
    },
  },
});
