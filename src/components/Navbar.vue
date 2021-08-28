<template>
  <div class="header">
    <router-link to="/"
      ><img
        draggable="false"
        oncontextmenu="return false"
        alt="Logo Chapatiz Retro"
        id="logo"
        src="../assets/img/logo.svg"
    /></router-link>
    <div class="login flex centered">
      <div style="margin-top: -10px">
        <User :user="user" id="username" style="display: inherit" />
        <button id="connect" class="flex centered">
          <img
            draggable="false"
            oncontextmenu="return false"
            alt="Disconnect icon"
            class="chz-icon"
            src="../assets/img/login/disconnect.svg"
          />{{ $t("logout.button") }}
        </button>
      </div>
      <Tiz style="margin: 0" />
    </div>
  </div>
  <div id="nav" class="flex">
    <router-link to="/"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          oncontextmenu="return false"
          alt="Home icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/home.svg"
          style="margin: 5px; padding: 2px"
        /></button
    ></router-link>
    <router-link to="/tchat"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          oncontextmenu="return false"
          alt="Tchat icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/tchat.svg"
        />
        <div class="nav-text">
          <StrokeText>{{ $t("playing.button") }}</StrokeText>
        </div>
        <img
          draggable="false"
          oncontextmenu="return false"
          alt="Arrow icon"
          class="arrow jitter"
          src="@/assets/img/arrow.svg"
        /></button
    ></router-link>
    <router-link to="/account"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          oncontextmenu="return false"
          alt="Account icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/account.svg"
        />
        <div class="nav-text">
          <StrokeText>{{ $t("myAccount.button") }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link to="/games"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          oncontextmenu="return false"
          alt="Games icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/games.svg"
        />
        <div class="nav-text">
          <StrokeText>{{ $t("games.button") }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link to="/members"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          oncontextmenu="return false"
          alt="Member icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/members.svg"
        />
        <div class="nav-text">
          <StrokeText>{{ $t("members.button") }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link to="/bbs"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          oncontextmenu="return false"
          alt="Community icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/community.svg"
        />
        <div class="nav-text">
          <StrokeText>{{ $t("community.button") }}</StrokeText>
        </div>
      </button></router-link
    >
  </div>
</template>

<script>
import Tiz from "@/components/Tiz.vue";
import User from "@/components/links/User.vue";
import StrokeText from "@/components/StrokeText.vue";

export default {
  name: "Navbar",
  props: {
    user: {
      required: true,
      type: Object,
      default: function () {
        return { name: "Visiteur", color: "#900", id: 3 };
      },
    },
  },
  components: {
    Tiz,
    StrokeText,
    User,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background: url(../assets/img/navbar/navbar_old.svg);
  //box-shadow: inset 0 -10px 5px -5px #76bde8;
  border-radius: 0 0 25% 25%;
}

#logo {
  float: left;
}

.login {
  text-align: right;
  justify-content: flex-end;
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
  font-family: "Pixelated Verdana";
  border-radius: 100px;
  padding: 3px;
  margin-right: -20px;
  border: none;
  background: white;
  width: 130px;
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
  background-image: linear-gradient(
    to bottom,
    #ffe4f5 0%,
    #ff1fb0 50%,
    #b30048 50%,
    #f0009c
  );
  padding: 0 4%;
  font-size: 18px;
  border-width: 2px 1px;
  border-style: solid;
  border-color: #f0009c #ae0050 #ae0050 #ae0050;
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

.nav-icon {
  height: 100%;
  filter: saturate(1.5) hue-rotate(-45deg);
}

.nav-btn:hover .nav-icon,
.nav-btn:active .nav-icon,
#nav a.router-link-exact-active .nav-icon {
  filter: none;
}

#nav a:first-child .nav-btn {
  border-right-color: #f0009c;
  border-left-color: #f0009c;
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 15%,
    #ffe4f5,
    #ff1fb0 50%,
    #b30048 50%,
    #f0009c
  );
  border-radius: 10px;
  border-width: 2px 5px;
  margin-right: 12px;
}

#nav {
  justify-content: center;
  padding-bottom: 10px;
}

.nav-btn:hover,
.nav-btn:active,
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
}

#nav a:first-child .nav-btn:hover,
#nav a:first-child .nav-btn:active,
#nav a:first-child.router-link-exact-active .nav-btn {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 15%,
    #fff2ea 0%,
    #ff7214 50%,
    #ce4800 50%,
    #ff6600
  );
}

#nav a:nth-child(2) .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:nth-child(2) .nav-btn:active,
#nav a:first-child .nav-btn:active,
#nav a:first-child.router-link-exact-active .nav-btn,
#nav a:nth-child(2).router-link-exact-active .nav-btn {
  border-left-color: #ff6600;
}

#nav a:last-child .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:last-child .nav-btn:active,
#nav a:first-child .nav-btn:active,
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

#nav a:first-child .nav-btn:active {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 15%,
    #ff6600,
    #ce4800 50%,
    #ff7214 50%,
    #fff2ea
  ) !important;
}

.nav-text,
.arrow {
  display: none;
}

@media (min-width: 600px) {
  .nav-text {
    font-family: "Chimboz Heavy";
    font-weight: normal;
    font-size: 18px;
    height: 100%;
    fill: #fff;
    stroke: #ae0050;
    stroke-width: 3;
    display: block;
  }

  .nav-btn:hover .nav-text,
  .nav-btn:active .nav-text,
  #nav a.router-link-exact-active .nav-text {
    stroke: #ce4800;
  }

  a:not(:first-child) .nav-btn {
    padding: 0 20px;
  }

  .nav-btn:hover .arrow {
    filter: saturate(1.2);
  }

  .arrow {
    display: inherit;
    margin-right: -30px;
    z-index: 2;
  }
}
</style>
