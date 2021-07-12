<template>
  <div class="header">
    <router-link to="/"
      ><img id="logo" src="../assets/img/logo.svg"
    /></router-link>
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
  <div id="nav">
    <router-link to="/"><button class="nav-btn">Accueil</button></router-link>
    <router-link to="/tchat"
      ><button class="nav-btn">Jouer !</button></router-link
    >
    <router-link to="/account"
      ><button class="nav-btn">Mon compte</button></router-link
    >
    <router-link to="/games"><button class="nav-btn">Jeux</button></router-link>
    <router-link to="/members"
      ><button class="nav-btn">Membres</button></router-link
    >
    <router-link to="/bbs"
      ><button class="nav-btn">Communauté</button></router-link
    >
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background: url(../assets/img/navbar_old.svg);
  //box-shadow: inset 0 -10px 5px -5px #76bde8;
  border-radius: 0 0 25% 25%;
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
  letter-spacing: 0.3px;
}

#connect .chz-icon {
  padding-right: 4px;
}

#connect:hover {
  background: #ade5f3;
  font-weight: bold;
  letter-spacing: 0;
}

.nav-btn {
  cursor: pointer;
  height: 25px;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  background-image: linear-gradient(
    to bottom,
    #ffe4f5 0%,
    #ff1fb0 50%,
    #b30048 50%,
    #f0009c 100%
  );
  padding: 5px 20px;
  font-size: 17px;
  color: #fff;
  border-width: 2px 1px;
  align-items: center;
  line-height: 14px;
  border-style: solid;
  border-color: #f0009c #ae0050 #ae0050 #ae0050;
  text-shadow: 2px 0 0 #ae0050, -2px 0 0 #ae0050, 0 2px 0 #ae0050,
    0 -2px 0 #ae0050, 1px 1px #ae0050, -1px -1px 0 #ae0050, 1px -1px 0 #ae0050,
    -1px 1px 0 #ae0050;
  box-shadow: 0 2px 2px #0006;
}

#nav a:first-child .nav-btn {
  border-left-color: #f0009c;
  border-radius: 10px 0 0 10px;
  border-left-width: 5px;
}

#nav a:last-child .nav-btn {
  border-right-color: #f0009c;
  border-radius: 0 10px 10px 0;
  border-right-width: 5px;
}

#nav {
  text-align: center;
  padding-bottom: 10px;
}

#nav a.router-link-exact-active .nav-btn {
  color: #b30048;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}

.nav-btn:hover {
  background-image: linear-gradient(
    to bottom,
    #fff2ea 0%,
    #ff7214 50%,
    #ce4800 50%,
    #ff6600 100%
  );
  color: #fff !important;
  border-color: #ff6600 #973500 #973500 #973500;
  text-shadow: 2px 0 0 #ce4800, -2px 0 0 #ce4800, 0 2px 0 #ce4800,
    0 -2px 0 #ce4800, 1px 1px #ce4800, -1px -1px 0 #ce4800, 1px -1px 0 #ce4800,
    -1px 1px 0 #ce4800 !important;
  //border-image: linear-gradient(to bottom, #ff6600, #973500) 1 100%;
}

#nav a:first-child .nav-btn:hover {
  border-left-color: #ff6600;
}

#nav a:last-child .nav-btn:hover {
  border-right-color: #ff6600;
}

.nav-btn a:hover {
  text-decoration: none;
}
</style>
