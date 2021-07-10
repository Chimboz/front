<template>
  <div class="navbar">
    <img id="logo" src="../assets/img/logo.svg" />
    <div class="toast">
      <div style="margin-top: -10px">
        <p id="username">{{ username }}</p>
        <button id="connect">
          <img class="chz-icon" src="../assets/img/check.svg" /> Se connecter
        </button>
      </div>
      <Tiz />
    </div>
  </div>
</template>

<script>
import Tiz from "@/components/Tiz.vue";

export default {
  name: "Navbar",
  props: {
    username: {
      type: String,
      default: "Tigriz",
    },
  },
  components: {
    Tiz,
  },
  mounted() {
    document.title += " - new title";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  width: 800px;
  height: 100px;
  background: url(../assets/img/navbar.svg);
}

#logo {
  float: left;
}

.toast {
  display: flex;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 14px 0 0;
}

#username {
  font-family: "Pixelated Verdana";
  font-weight: bold;
  font-size: 1.4em;
  padding: 0 8px 8px 0;
  color: #069;
  text-shadow: 0 0 5px #fff, 0 0 5px #fff;
}

#connect {
  display: flex;
  align-items: center;
  font-family: "Pixelated Verdana";
  border-radius: 100px;
  padding: 3px;
  margin-right: -20px;
  border: none;
  background: white;
  width: 120px;
}

#connect .chz-icon {
  padding-right: 4px;
}

#connect:hover {
  background: #ade5f3;
  font-weight: bold;
}
</style>
