import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    delete(state, payload) {
      state.todos = state.todos.filter((t) => {
        return t.todo !== payload.payload.todo;
      });
    },
  },
});
export default store;
