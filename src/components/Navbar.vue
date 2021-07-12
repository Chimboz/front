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
    <router-link to="/bbs"><button class="nav-btn">Forum</button></router-link>
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
  color: #fff;
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
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #f0009c, #b40075) 1 100%;
}

#nav a:first-child .nav-btn {
  border-radius: 10px 0 0 10px;
}

#nav a:last-child .nav-btn {
  border-radius: 0 10px 10px 0;
}

.nav-btn:hover {
  background-image: linear-gradient(
    to bottom,
    #fff2ea 0%,
    #ff7214 50%,
    #ce4800 50%,
    #ff6600 100%
  );
  border-image: linear-gradient(to bottom, #ff6600, #973500) 1 100%;
}

.nav-btn a:hover {
  text-decoration: none;
}

#nav {
  text-align: center;
  padding-bottom: 10px;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
