<template>
  <div id="app">
    <div class="coords">
      <img
        id="original"
        @click="showOverlay"
        @mouseover="show"
        @mouseleave="hide"
        @mousemove="changeXY"
        class="test"
        src="https://picsum.photos/id/238/300/300"
      />
      <div
        @click="showOverlay"
        @mouseover="show"
        @mouseleave="hide"
        @mousemove="changeXY"
        id="hoverBox"
        class="hoverBox"
      ></div>
      <div id="zoomer_side_view" class="zoomer_side_view">
        <img id="side_image" src="https://picsum.photos/id/238/300/300" />
      </div>
      <div id="overlay" class="overlay">
        <button @click="closeOverlay">X</button>
        <div class="mainOverlayImage">
          <v-zoomer
            style="width: 500px; height: 500px; border: solid 1px silver;"
          >
            <img
              style="object-fit: contain; width: 100%; height: 100%;"
              src="https://picsum.photos/id/238/300/300"
            />
          </v-zoomer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueZoomer from "vue-zoomer";
Vue.use(VueZoomer);
export default {
  name: "App",
  data() {
    return {
      x: "",
      y: "",
    };
  },
  methods: {
    changeXY: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
      let sideImg = document.getElementById("side_image");
      let hoverBox = document.getElementById("hoverBox");
      let hoverSpec = hoverBox.getBoundingClientRect();
      let original = document.getElementById("original");
      let spec = original.getBoundingClientRect();
      let sideView = document.getElementById("zoomer_side_view");
      let sideSpec = sideView.getBoundingClientRect();
      let sideImgSpec = sideImg.getBoundingClientRect();

      sideImg.style.left = `-${hoverSpec.left * 2 - spec.left * 2}px`;
      sideImg.style.top = `-${hoverSpec.top * 2 - spec.top * 2}px`;

      console.log("HoverSpec: ", hoverSpec);
      console.log("Spec: ", spec);
      console.log("Side Spec: ", sideSpec);
      console.log("SideImgSpec: ", sideImgSpec);
      console.log("X: ", this.x, "Y: ", this.y);

      sideView.style.left = `-${spec.left + spec.width}px`;
      sideView.style.top = `-${spec.top}px`;
      // if (
      //   this.x > spec.bottom ||
      //   this.y > spec.right ||
      //   this.x <= spec.top ||
      //   this.y <= spec.left
      // ) {
      //   this.hide();
      // } else {
      //   this.show();
      // }
      if (this.x > spec.right - 50) {
        hoverBox.style.top = `${e.clientY - 50}px`;
        hoverBox.style.left = `${spec.right - 100}px`;
        if (this.y > spec.bottom - 50) {
          hoverBox.style.top = `${spec.bottom - 100}px`;
        } else if (this.y < spec.top + 50) {
          hoverBox.style.top = `${spec.top}px`;
        }
      } else if (this.x < spec.left + 50) {
        hoverBox.style.top = `${e.clientY - 50}px`;
        hoverBox.style.left = `${spec.left}px`;
        if (this.y > spec.bottom - 50) {
          hoverBox.style.top = `${spec.bottom - 100}px`;
        } else if (this.y < spec.top + 50) {
          hoverBox.style.top = `${spec.top}px`;
        }
      } else if (this.y > spec.bottom - 50) {
        hoverBox.style.left = `${e.clientX - 50}px`;
        hoverBox.style.top = `${spec.bottom - 100}px`;
      } else if (this.y < spec.top + 50) {
        hoverBox.style.left = `${e.clientX - 50}px`;
        hoverBox.style.top = `${spec.top}px`;
      } else {
        hoverBox.style.left = `${e.clientX - 50}px`;
        hoverBox.style.top = `${e.clientY - 50}px`;
      }
    },
    show: function() {
      // let box = document.getElementById("zoomer_side_view");
      // box.style.display = "block";
      let hoverBox = document.getElementById("hoverBox");
      hoverBox.style.display = "block";
    },
    hide: function() {
      // let box = document.getElementById("zoomer_side_view");
      // box.style.display = "none";
      let hoverBox = document.getElementById("hoverBox");
      hoverBox.style.display = "none";
    },
    showOverlay: function() {
      let overlay = document.getElementById("overlay");
      overlay.style.display = "flex";
    },
    closeOverlay: function() {
      let overlay = document.getElementById("overlay");
      overlay.style.display = "none";
    },
    zoom_in: function() {
      let overlayImg = document.getElementById("overlayImg");
      if (this.zoom === 1) {
        overlayImg.style.transform = "scale(1.5)";
        this.zoom = 1.5;
      } else if (this.zoom === 1.5) {
        overlayImg.style.transform = "scale(2)";
        this.zoom = 2;
      } else {
        alert("max zoom reached");
      }
    },
    zoom_out: function() {
      let overlayImg = document.getElementById("overlayImg");
      if (this.zoom === 2) {
        overlayImg.style.transform = "scale(1.5)";
        this.zoom = 1.5;
      } else if (this.zoom === 1.5) {
        overlayImg.style.transform = "scale(1)";
        this.zoom = 1;
      } else {
        alert("min zoom reached");
      }
    },
  },
};
</script>
<style>
#app {
  padding: 6%;
}
.spacer {
  width: 300px;
  height: 300px;
  border: 1px dashed black;
}
.block {
  display: block;
  width: 100%;
}
.zoom_buttons {
  width: 100%;
  position: fixed;
  top: 50px;
  left: 50%;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 80px;
  display: flex;
  justify-content: space-around;
}
#hoverBox {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  position: fixed;
}
.overlay {
  position: fixed;
  width: 80%;
  height: 80vh;
  left: 10%;
  top: 50px;
  background: white;
  border: 1px solid black;
  display: none;
  touch-action: pan-right pinch-zoom;
}
.overlayImages {
  width: 20%;
  height: 100%;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.placeholder {
  margin: 20px 0;
  width: 80px;
  height: 80px;
  background: white;
  border: 1px solid black;
}
.mainOverlayImage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
.single {
  width: 500px;
  height: 500px;
  left: 0px;
  top: 0px;
  cursor: move;
}
.overlay button {
  position: fixed;
  left: 0px;
  top: 0px;
  font-size: 3rem;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11000;
}
.coords {
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 400px;
}
.zoomer_side_view {
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: block;
  border: 1px solid black;
}
.zoomer_side_view #side_image {
  width: 800px;
  height: 800px;
  position: relative;
}
#original {
  width: 400px;
  height: 400px;
}
body,
html {
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
