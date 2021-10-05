<template>
  <div class="fullscreen">
    <div class="navbar"
      >Accueil
      <div class="navbar-buttons">
        <button>Mon profil</button>
        <button>Archipel</button>
        <button>Chat&nbsp;!</button>
      </div>
      <div class="navbar-options">
        <input type="range" id="volume" name="volume" min="0" max="5" />
      </div>
    </div>
    <div class="main">
      <div class="tchat"></div>
      <div class="sidebar"></div>
    </div>
  </div>
  <div class="tchat"></div>
</template>

<script>
export default {
  name: "Account",
  components: {},
  data() {
    return {
      data: null
    };
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    }
  }
};
</script>
<style lang="scss">
body {
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
.fullscreen {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #6090be;
}

.navbar,
.navbar * {
  font-family: "Chimboz Heavy" !important;
  font-size: 16px;
}

.navbar {
  display: flex;
  background: black;
  justify-content: space-between;
  align-items: flex-end;
  background: linear-gradient(to bottom, transparent, #4a78a9);
  border-bottom: 1px solid #b6c9ff;
  color: #fff;
  padding: 0 6px;
}

.navbar-buttons button {
  border: 1px solid;
  color: white;
  margin: 0 2px;
  margin-bottom: -1px;
  border-bottom-color: #669acc;
  border-left-color: #b6c9ff;
  border-top-color: #b6c9ff;
  border-right-color: #21405c;
  padding: 0 6px;
  background: #669acc;
  border-radius: 6px 6px 0 0;
}

#volume {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  width: 40px;
  background: white;
  -webkit-appearance: none;
  height: 10px;
  border: 1px solid red;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 10px;
  cursor: pointer;
  background: #fff;
}

input[type="range"]::-webkit-slider-thumb {
  width: 1px;
  -webkit-appearance: none;
  height: 10px;
  cursor: ew-resize;
  background: #ff2c91;
  box-shadow: -80px 0 0 80px #ff2c91;
}

.main {
  position: relative;
  height: 100%;
}

.tchat {
  width: 100%;
  height: 100%;
  background-image: url("../asset/img/tchat.png");
  background-size: cover;
}

.sidebar {
  position: absolute;
  background: grey;
  top: 0;
  right: 0;
  height: 100%;
  min-width: 200px;
  max-width: 50%;
  resize: both;
  overflow: auto;
}
</style>
