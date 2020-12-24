<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{ count }}</p>
    <input v-model="newTodo" />
    <button class="addButton" @click="addTodo">Add Todo</button>
    <div class="todos">
      <div class="todo" v-bind:key="todo" v-for="todo in todos">
        {{ todo.todo }}
        <button @click="deleteTodo(todo)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "./vuex/store";

export default {
  name: "App",
  store: store,
  components: {},
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo() {
      this.$store.commit("addTodo", {
        todo: this.newTodo,
      });
      this.newTodo = "";
    },
    deleteTodo(todo) {
      this.$store.commit("delete", {
        payload: todo,
      });
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todos {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo {
  border: 1px solid black;
  width: 80%;
  margin: 10px;
  text-align: center;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
}

button {
  background: red;
  color: white;
}

.addButton {
  background: greenyellow;
  color: black;
  border-radius: 5px;
}
</style>
