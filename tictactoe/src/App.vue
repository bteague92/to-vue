<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      values: {
        valOne: "",
        valTwo: "",
        valThree: "",
        valFour: "",
        valFive: "",
        valSix: "",
        valSeven: "",
        valEight: "",
        valNine: "",
      },
      turn: true,
      winner: "",
    };
  },
  computed: {
    winning_patterns() {
      return [
        `${this.values.valOne}, ${this.values.valTwo}, ${this.values.valThree}`,
        `${this.values.valFour}, ${this.values.valFive}, ${this.values.valSix}`,
        `${this.values.valSeven}, ${this.values.valEight}, ${this.values.valNine}`,
        `${this.values.valOne}, ${this.values.valFour}, ${this.values.valSeven}`,
        `${this.values.valTwo}, ${this.values.valFive}, ${this.values.valEight}`,
        `${this.values.valThree}, ${this.values.valSix}, ${this.values.valNine}`,
        `${this.values.valOne}, ${this.values.valFive}, ${this.values.valNine}`,
        `${this.values.valThree}, ${this.values.valFive}, ${this.values.valSeven}`,
      ];
    },
  },
  methods: {
    changeVal(val) {
      if (this.turn === true) {
        this.values[val] = "X";
      } else {
        this.values[val] = "O";
      }
      this.turn = !this.turn;
      for (let i = 0; i < this.winning_patterns.length; i++) {
        console.log("This is I: ", this.winning_patterns[i]);
        if (this.winning_patterns[i] === "X, X, X") {
          console.log("x wins");
          this.winner = "X's";
        } else if (this.winning_patterns[i] === "O, O, O") {
          console.log("o wins");
          this.winner = "O's";
        }
      }
    },
    reset() {
      Object.keys(this.values).map((i) => {
        this.values[i] = "";
      });
      // this.valOne = "";
      // this.valTwo = "";
      // this.valThree = "";
      // this.valFour = "";
      // this.valFive = "";
      // this.valSix = "";
      // this.valSeven = "";
      // this.valEight = "";
      // this.valNine = "";
      this.winner = "";
      this.turn = true;
    },
  },
};
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Tic Tac Vue</h1>
    <h1 class="winner_message" v-if="winner">{{ winner }} WIN!!!!!</h1>
    <button class="play_button" @click="reset" v-if="winner">PLAY AGAIN</button>
    <div v-if="winner === ''" class="grid">
      <div @click="changeVal('valOne')" class="grid_cell one">
        {{ values.valOne }}
      </div>
      <div @click="changeVal('valTwo')" class="grid_cell two">
        {{ values.valTwo }}
      </div>
      <div @click="changeVal('valThree')" class="grid_cell three">
        {{ values.valThree }}
      </div>
      <div @click="changeVal('valFour')" class="grid_cell four">
        {{ values.valFour }}
      </div>
      <div @click="changeVal('valFive')" class="grid_cell five">
        {{ values.valFive }}
      </div>
      <div @click="changeVal('valSix')" class="grid_cell six">
        {{ values.valSix }}
      </div>
      <div @click="changeVal('valSeven')" class="grid_cell seven">
        {{ values.valSeven }}
      </div>
      <div @click="changeVal('valEight')" class="grid_cell eight">
        {{ values.valEight }}
      </div>
      <div @click="changeVal('valNine')" class="grid_cell nine">
        {{ values.valNine }}
      </div>
      <h1 v-if="name">Brandon</h1>
      <h1 v-else>None</h1>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.grid_cell {
  height: 197px;
  width: 197px;
  margin: 0;
  padding: 0;
  font-size: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.one {
  border-right: 1px solid black;
}

.two {
  border-right: 1px solid black;
}

.three {
}

.four {
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.five {
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.six {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.seven {
  border-right: 1px solid black;
}

.eight {
  border-right: 1px solid black;
}

.nine {
}

.winner_message {
  font-size: 6rem;
  font-weight: 900;
}

.play_button {
  font-size: 3rem;
  border-radius: 10px;
  padding: 5px;
  background: limegreen;
}
</style>
