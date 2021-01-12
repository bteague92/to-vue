<template>
  <div id="app" class="container">
    <input :value="newTodo" @change="getTodo" placeholder="I need to..." />
    <button class="btn btn-primary" @click="addTodo">Add Todo</button>
    <ul>
      <li :key="todo.body" v-for="todo in todos">{{ todo.body }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    getTodo(e) {
      this.$store.dispatch("getTodo", e.target.value);
    },
    addTodo() {
      this.$store.dispatch("addTodo");
      this.$store.dispatch("clearTodo");
    },
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    },
  },
};
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
