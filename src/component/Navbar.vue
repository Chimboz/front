<template>
  <div
    class="header"
    :style="{
      'background-image':
        'url(' +
        require('@/asset/img/navbar/svg/' + this.date.getHours() + '.svg') +
        ')',
    }"
  >
    <router-link to="/"
      ><img
        draggable="false"
        @contextmenu.prevent
        alt="Logo Chapatiz Retro"
        id="logo"
        src="../asset/img/logo.svg"
    /></router-link>
    <div class="login flex centered">
      <div style="margin-top: -10px">
        <User :user="user" id="username" style="display: inherit" />
        <router-link
          to="login"
          id="connect"
          class="flex centered"
          @click="logout"
          v-if="authenticated"
        >
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Disconnect icon"
            src="../asset/img/icon/login/disconnect.svg"
          />
          {{ $t("navbar.logout") }}
        </router-link>
        <router-link
          to="/"
          id="connect"
          class="flex centered"
          @click="login"
          v-else
        >
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Connect icon"
            src="../asset/img/icon/login/connect.svg"
          />
          {{ $t("navbar.login") }}
        </router-link>
      </div>
      <Tiz style="margin-right: 17px" />
    </div>
  </div>
  <div id="nav" class="flex">
    <router-link to="/"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          @contextmenu.prevent
          alt="Home icon"
          class="nav-icon"
          src="@/asset/img/navbar/icon/home.svg"
          style="margin: 5px; padding: 2px"
        /></button
    ></router-link>
    <a target="_blank" href="/tchat"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Tchat icon"
            class="nav-icon"
            src="@/asset/img/navbar/icon/tchat.svg"
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.play")
          }}</StrokeText>
        </div>
        <img
          draggable="false"
          @contextmenu.prevent
          alt="Arrow icon"
          class="arrow jitter"
          src="@/asset/img/arrow.svg"
        /></button
    ></a>
    <router-link v-if="authenticated" to="/account"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Account icon"
            class="nav-icon"
            src="@/asset/img/navbar/icon/account.svg"
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.account")
          }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link to="/games"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Games icon"
            class="nav-icon"
            src="@/asset/img/navbar/icon/games.svg"
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.games")
          }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link to="/members"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Member icon"
            class="nav-icon"
            src="@/asset/img/navbar/icon/members.svg"
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.members")
          }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link to="/bbs"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Community icon"
            class="nav-icon"
            src="@/asset/img/navbar/icon/community.svg"
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.community")
          }}</StrokeText>
        </div>
      </button></router-link
    >
  </div>
</template>

<script>
import Tiz from "@/component/Tiz.vue";
import User from "@/component/link/User.vue";
import StrokeText from "@/component/StrokeText.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      date: new Date(),
    };
  },
  props: {
    user: {
      required: false,
      type: Object,
      default: function() {
        return { name: "Visiteur" };
      },
    },
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
  },
  components: {
    Tiz,
    StrokeText,
    User,
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
  created() {
    document.body.className = "h" + this.date.getHours();
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 78px;
  background-position: center;
  background-size: cover;
  //border-radius: 99px;
  //box-shadow: inset 0px 0px 10px 5px #6090be;
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
  font-family: "Pixelated Verdana 12";
  font-weight: bold;
  font-size: 16px;
  padding: 0 8px 8px 0;
  color: #069;
  text-shadow: 0 0 5px #fff, 0 0 5px #fff;
}

#connect {
  font-family: "Pixelated Verdana 12";
  font-size: 16px;
  font-weight: normal;
  color: #000;
  border-radius: 100px;
  padding: 3px;
  margin-right: -20px;
  border: none;
  background: #fff;
  width: 130px;
}

#connect img {
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
    #ff1fb0 49%,
    #b30048 51%,
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
    #ff7214 49%,
    #ce4800 51%,
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
    #ce4800 49%,
    #ff7214 51%,
    #fff2ea
  ) !important;
}

.nav-text {
  font-family: "Chimboz Heavy";
  font-weight: normal;
  font-size: 18px;
  height: 100%;
  fill: #fff;
  stroke: #ae0050;
  stroke-width: 3;
  display: flex;
  justify-content: center;
}

.btn-label,
.arrow {
  display: none;
}

@media (min-width: 600px) {
  .btn-label {
    display: inherit;
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
