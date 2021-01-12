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
        <div class="overlayImages">
          <div class="placeholder"></div>
          <div class="placeholder"></div>
          <div class="placeholder"></div>
          <div class="placeholder"></div>
        </div>
        <div class="mainOverlayImage">
          <div class="zoom_buttons">
            <div @click="zoom_out" class="minus">-</div>
            <div @click="zoom_in" class="plus">+</div>
          </div>
          <img
            @click="dragElement"
            id="overlayImg"
            draggable="true"
            class="single"
            v-scroll="handleScroll"
            src="https://picsum.photos/id/238/300/300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      x: "",
      y: "",
      single: true,
      singleHalf: false,
      double: false,
    };
  },
  methods: {
    changeXY: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
      let sideImg = document.getElementById("side_image");
      sideImg.style.left = `-${e.clientX * 1.5}px`;
      sideImg.style.top = `-${e.clientY * 1.5}px`;

      let hoverBox = document.getElementById("hoverBox");
      hoverBox.style.left = `${e.clientX - 50}px`;
      hoverBox.style.top = `${e.clientY - 50}px`;

      let original = document.getElementById("original");
      let spec = original.getBoundingClientRect();

      if (
        this.x > spec.bottom ||
        this.y > spec.right ||
        this.x <= spec.top ||
        this.y <= spec.left
      ) {
        this.hide();
      } else {
        this.show();
      }

      console.log(spec);
    },
    show: function() {
      let box = document.getElementById("zoomer_side_view");
      box.style.display = "block";
      let hoverBox = document.getElementById("hoverBox");
      hoverBox.style.display = "block";
    },
    hide: function() {
      let box = document.getElementById("zoomer_side_view");
      box.style.display = "none";
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
    handleScrool: function() {
      let overlayImg = document.getElementById("overlay_image");
      overlayImg.style.transform = "translate(width: 400px)";
    },
    zoom_in: function() {
      let overlayImg = document.getElementById("overlayImg");
      if (this.single) {
        this.single = false;
        this.singleHalf = "true";
        overlayImg.className = "singleHalf";
      } else if (this.singleHalf) {
        this.singleHalf = false;
        this.double = "true";
        overlayImg.className = "double";
      } else {
        alert("max zoom acheived");
      }
    },
    zoom_out: function() {
      let overlayImg = document.getElementById("overlayImg");
      if (this.double) {
        this.double = false;
        this.singleHalf = "true";
        overlayImg.className = "singleHalf";
      } else if (this.singleHalf) {
        this.singleHalf = false;
        this.single = "true";
        overlayImg.className = "single";
      } else {
        alert("max zoomout acheived");
      }
    },
    dragElement: function() {
      let elmnt = document.getElementById("overlayImg");
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (elmnt) {
        // if present, the header is where you move the DIV from:
        elmnt.onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
  },
};
</script>

<style>
#App {
  width: 100%;
  display: flex;
  justify-content: center;
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

.minus {
  width: 50%;
  border-right: 1px solid black;
}

.plus {
  width: 50%;
}

.minus:hover {
  cursor: pointer;
}

.plus:hover {
  cursor: pointer;
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
  width: 80vw;
  height: 80vh;
  left: 10vw;
  top: 10vh;
  background: white;
  border: 1px solid black;
  display: flex;
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
  width: 80%;
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

.singleHalf {
  width: 750px;
  height: 750px;
  left: 0px;
  top: 0px;
  cursor: move;
}

.double {
  width: 1000px;
  height: 1000px;
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
}

.coords {
  display: flex;
  width: 600px;
  overflow: hidden;
  height: 400px;
}

.zoomer_side_view {
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: none;
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
