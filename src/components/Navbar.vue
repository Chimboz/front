<template>
  <div class="header">
    <router-link to="/"
      ><img id="logo" src="../assets/img/logo.svg"
    /></router-link>
    <div class="login">
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
    <router-link to="/"><button class="nav-btn">🏠</button></router-link>
    <router-link to="/tchat"
      ><button class="nav-btn">
        🗨️
        <div class="nav-text">Jouer&nbsp;!</div>
        <img id="arrow" src="@/assets/img/arrow.svg" /></button
    ></router-link>
    <router-link to="/account"
      ><button class="nav-btn">
        👤
        <div class="nav-text">Mon compte</div>
      </button></router-link
    >
    <router-link to="/games"
      ><button class="nav-btn">
        🎮
        <div class="nav-text">Jeux</div>
      </button></router-link
    >
    <router-link to="/members"
      ><button class="nav-btn">
        👥
        <div class="nav-text">Membres</div>
      </button></router-link
    >
    <router-link to="/bbs"
      ><button class="nav-btn">
        📮
        <div class="nav-text">Communauté</div>
      </button></router-link
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

.login {
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
  display: flex;
  cursor: pointer;
  height: 25px;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  background-image: linear-gradient(
    to bottom,
    #ffe4f5 0%,
    #ff1fb0 50%,
    #b30048 50%,
    #f0009c
  );
  padding: 5px 4%;
  font-size: 18px;
  color: #fff;
  border-width: 2px 1px;
  align-items: center;
  line-height: 12px;
  border-style: solid;
  border-color: #f0009c #ae0050 #ae0050 #ae0050;
  text-shadow: 2px 0 0 #ae0050, -2px 0 0 #ae0050, 0 2px 0 #ae0050,
    0 -2px 0 #ae0050, 1px 1px #ae0050, -1px -1px 0 #ae0050, 1px -1px 0 #ae0050,
    -1px 1px 0 #ae0050;
  box-shadow: 0 2px 2px #0006;
}

#nav a:not(:first-child) {
  display: contents;
}

#nav a:nth-child(2) .nav-btn {
  border-left-color: #f0009c;
  border-radius: 10px 0 0 10px;
  border-left-width: 5px;
}

#nav a:last-child .nav-btn {
  border-right-color: #f0009c;
  border-radius: 0 10px 10px 0;
  border-right-width: 5px;
}

#nav a:first-child .nav-btn {
  border-right-color: #f0009c;
  border-left-color: #f0009c;
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 15%,
    #ffe4f5 15%,
    #ff1fb0 50%,
    #b30048 50%,
    #f0009c
  );
  border-radius: 10px;
  border-width: 2px 5px;
  margin-right: 12px;
}

#nav {
  display: flex;
  text-align: center;
  padding-bottom: 10px;
  justify-content: center;
}

.nav-btn:hover,
#nav a.router-link-exact-active .nav-btn {
  background-image: linear-gradient(
    to bottom,
    #fff2ea,
    #ff7214 50%,
    #ce4800 50%,
    #ff6600
  );
  color: #fff !important;
  border-color: #ff6600 #973500 #973500 #973500;
  text-shadow: 2px 0 0 #ce4800, -2px 0 0 #ce4800, 0 2px 0 #ce4800,
    0 -2px 0 #ce4800, 1px 1px #ce4800, -1px -1px 0 #ce4800, 1px -1px 0 #ce4800,
    -1px 1px 0 #ce4800 !important;
  //border-image: linear-gradient(to bottom, #ff6600, #973500) 1 100%;
}

#nav a:first-child .nav-btn:hover,
#nav a:first-child.router-link-exact-active .nav-btn {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 15%,
    #fff2ea 15%,
    #ff7214 50%,
    #ce4800 50%,
    #ff6600
  );
}

#nav a:nth-child(2) .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:first-child.router-link-exact-active .nav-btn,
#nav a:nth-child(2).router-link-exact-active .nav-btn {
  border-left-color: #ff6600;
}

#nav a:last-child .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:last-child.router-link-exact-active .nav-btn,
#nav a:first-child.router-link-exact-active .nav-btn {
  border-right-color: #ff6600;
}

a:hover {
  text-decoration: none;
}

.nav-btn:active {
  background-image: linear-gradient(
    to top,
    #fff2ea,
    #ff7214 50%,
    #ce4800 50%,
    #ff6600
  ) !important;
}

.nav-text, #arrow {
  display: none;
}

@media (min-width: 600px) {
  .nav-text {
    display: contents;
  }

  a:not(:first-child) .nav-btn {
    padding: 5px 20px;
  }

  #arrow {
    display: inherit;
    will-change: transform;
    transform: rotateZ(-25deg);
    margin-right: -30px;
    z-index: 2;
  }
}

.nav-btn:hover #arrow {
  animation: jitter 0.5s forwards;
}

@keyframes jitter {
  0% {
    transform: rotateZ(-25deg);
  }
  10% {
    transform: rotateZ(35deg);
  }
  20% {
    transform: rotateZ(-15deg);
  }
  30% {
    transform: rotateZ(25deg);
  }
  40% {
    transform: rotateZ(-15deg);
  }
  50% {
    transform: rotateZ(15deg);
  }
  60% {
    transform: rotateZ(-15deg);
  }
  70% {
    transform: rotateZ(15deg) scale(1.05);
  }
  80% {
    transform: rotateZ(0deg) scale(1.1);
  }
  90% {
    transform: rotateZ(30deg) scale(1.15);
  }
  100% {
    transform: rotateZ(-30deg) scale(1.15);
    filter: saturate(1.5);
  }
}
</style>
