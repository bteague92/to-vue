<template>
  <div id="app">
    <div class="input">
      <input type="text" v-model="valueOne" />
    </div>
    <div class="button">
      <button @click="toAdd" :class="{ active: type === 'add' }">
        +
      </button>
      <button @click="toSubtract" :class="{ active: type === 'subtract' }">
        -
      </button>
      <button @click="toMultiply" :class="{ active: type === 'multiply' }">
        x
      </button>
      <button @click="toDivide" :class="{ active: type === 'divide' }">
        ÷
      </button>
    </div>
    <div class="input">
      <input type="text" v-model="valueTwo" />
    </div>
    <div class="totalDisplay">
      <button @click="calculate">CALCULATE</button>
      <h2>{{ total }}</h2>
    </div>
  </div>
</template>

<script>
import Bobby from "././././";

export default {
  name: "App",
  components: {
    Bobby: Bobby,
  },
  data: function() {
    return {
      total: 0,
      valueOne: 0,
      valueTwo: 0,
      type: "add",
    };
  },
  methods: {
    toAdd: function() {
      this.type = "add";
    },
    toSubtract: function() {
      this.type = "subtract";
    },
    toMultiply: function() {
      this.type = "multiply";
    },
    toDivide: function() {
      this.type = "divide";
    },
    calculate: function() {
      if (this.type === "add") {
        return (this.total = parseInt(this.valueOne) + parseInt(this.valueTwo));
      } else if (this.type === "subtract") {
        return (this.total = parseInt(this.valueOne) - parseInt(this.valueTwo));
      } else if (this.type === "multiply") {
        return (this.total = parseInt(this.valueOne) * parseInt(this.valueTwo));
      } else {
        return (this.total = parseInt(this.valueOne) / parseInt(this.valueTwo));
      }
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

input {
  text-align: center;
}

.active {
  background: orange;
}

.inactive {
}

.input {
  margin: 20px 0;
}
input {
  height: 40px;
  width: 200px;
  font-size: 1.5rem;
}

.totalDisplay {
  text-align: center;
}

.button button {
  margin: 0 5px;
  font-size: 1.5rem;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
</style>
