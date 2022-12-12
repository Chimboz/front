<template>
  <div
    class="header"
    :style="{
      backgroundImage: `url(${asset(`img/navbar/svg/${hours}.svg`)})`,
    }"
  >
    <router-link to="/"
      ><img
        draggable="false"
        @contextmenu.prevent
        alt="Logo Chimboz"
        width="240"
        height="70"
        id="logo"
        src="@/assets/img/logo.svg"
    /></router-link>
    <div class="login flex">
      <div style="margin-top: -10px">
        <UserLink
          :user="user || { name: 'Visiteur' }"
          id="username"
          style="display: inherit"
        />
        <button
          id="connect"
          class="centered"
          style="display: inline-flex"
          @click="logout"
          v-if="authenticated"
        >
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Disconnect icon"
            height="11"
            width="11"
            src="@/assets/img/icon/failure.svg"
          />
          {{ $t("navbar.logout") }}
        </button>
        <button v-else>
          <router-link to="/login" id="connect" class="flex">
            <img
              draggable="false"
              @contextmenu.prevent
              alt="Connect icon"
              height="11"
              width="11"
              src="@/assets/img/icon/success.svg"
            />
            {{ $t("navbar.login") }}
          </router-link>
        </button>
      </div>
      <GlobalAvatar
        style="margin-right: 16px"
        :avatar="user ? user.look.avatar : 0"
        :emote="user ? user.look.emote : 'neutral'"
        :hat="user ? user.look.hat : 1"
        :body="user ? user.look.body : 318"
        :shoe="user ? user.look.shoe : 606"
        :item0="user ? user.look.item0 : 792"
        :item1="user ? user.look.item1 : 868"
        :item2="user ? user.look.item2 : 938"
      />
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
          src="@/assets/img/navbar/icon/home.svg"
          width="20"
          height="20"
          style="margin: 2px; padding: 1px"
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
            src="@/assets/img/navbar/icon/tchat.svg"
            width="28"
            height="21"
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
          width="40"
          height="33"
          src="@/assets/img/arrow.svg"
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
            width="21"
            height="21"
            src="@/assets/img/navbar/icon/account.svg"
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
            width="20"
            height="21"
            src="@/assets/img/navbar/icon/games.svg"
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
            width="21"
            height="21"
            src="@/assets/img/navbar/icon/members.svg"
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
            width="21"
            height="21"
            src="@/assets/img/navbar/icon/community.svg"
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.community")
          }}</StrokeText>
        </div>
      </button></router-link
    >
  </div>
</template>

<script setup lang="ts">
import StrokeText from "@/components/core/StrokeTextComponent.vue";
import { useAuthStore } from "@/stores/auth";
import { asset } from "@/utils";
const auth = useAuthStore();
const user = auth.user;

// @vuese
// @group Core

const hours = new Date().getHours();
const authenticated = true;

function logout() {
  /*$store.dispatch("auth/logout");
      $router.push($route.path == "/" ? "/login" : $route.path);*/
}

document.body.className = "h" + hours;
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 78px;
  background-position: center;
  background-size: cover;
}

#logo {
  float: left;
}

.login {
  text-align: right;
  justify-content: flex-end;
  padding: var(--gap) 14px 0 0;
  align-items: center;
}

#username {
  font-family: "Pixelated Verdana 12";
  font-weight: bold;
  font-size: 16px;
  color: var(--blue);
  text-shadow: 0 0 5px var(--light), 0 0 5px var(--light);
}

.theme-toggler {
  background: var(--light);
  border-radius: var(--round);
  height: calc(var(--font-size) * 2);
  background: var(--dark);
  align-content: center;
  justify-content: center;
  align-items: center;
}

.theme-toggler img {
  height: calc(var(--font-size) * 2);
}

#connect {
  font-family: "Pixelated Verdana 12";
  font-size: 1.3rem;
  font-weight: normal;
  color: var(--text);
  border-radius: var(--round);
  padding: 2px;
  line-height: 1;
  margin-right: -20px;
  border: none;
  background: var(--light);
  margin-left: var(--gap);
  align-items: center;
  width: 130px;
}

#connect img {
  margin-right: 4px;
}

#connect:hover {
  background: var(--light-blue);
  font-weight: bold;
}

.nav-btn {
  cursor: var(--pointer);
  height: 25px;
  background-image: linear-gradient(
    to bottom,
    var(--light) 0%,
    var(--pink) 50%,
    var(--dark-pink) 50%,
    var(--pink)
  );
  padding: 0 4%;
  font-size: var(--lg-font-size);
  border-width: 2px 1px;
  border-style: solid;
  border-color: var(--pink) var(--pink) var(--dark-pink) var(--pink);
  box-shadow: 0 2px 1px var(--dark);
}

#nav a:not(:first-child) {
  display: contents;
}

#nav a:nth-child(2) .nav-btn {
  border-left-color: var(--pink);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  border-left-width: 5px;
}

#nav a:last-child .nav-btn {
  border-right-color: var(--pink);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  border-right-width: 5px;
}

.nav-icon {
  height: 100%;
  filter: saturate(1.5) hue-rotate(308deg);
}

.nav-btn:hover .nav-icon,
.nav-btn:active .nav-icon,
#nav a.router-link-exact-active .nav-icon {
  filter: none;
}

#nav a:first-child .nav-btn {
  border-right-color: var(--pink);
  border-left-color: var(--pink);
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    var(--light),
    var(--pink) 49%,
    var(--dark-pink) 51%,
    var(--pink)
  );
  border-radius: var(--border-radius);
  border-width: 2px 5px;
  margin-right: var(--gap);
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
    var(--light),
    var(--orange) 50%,
    var(--dark-orange) 50%,
    var(--orange)
  );
  color: var(--light) !important;
  border-color: var(--orange) var(--orange) var(--dark-orange) var(--orange);
}

#nav a:first-child .nav-btn:hover,
#nav a:first-child .nav-btn:active,
#nav a:first-child.router-link-exact-active .nav-btn {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    var(--light) 0%,
    var(--orange) 49%,
    var(--dark-orange) 51%,
    var(--orange)
  );
}

#nav a:nth-child(2) .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:nth-child(2) .nav-btn:active,
#nav a:first-child .nav-btn:active,
#nav a:first-child.router-link-exact-active .nav-btn,
#nav a:nth-child(2).router-link-exact-active .nav-btn {
  border-left-color: var(--orange);
}

#nav a:last-child .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:last-child .nav-btn:active,
#nav a:first-child .nav-btn:active,
#nav a:last-child.router-link-exact-active .nav-btn,
#nav a:first-child.router-link-exact-active .nav-btn {
  border-right-color: var(--orange);
}

a:hover {
  text-decoration: none;
}

.nav-btn:active {
  background-image: linear-gradient(
    to top,
    var(--light),
    var(--orange) 50%,
    var(--dark-orange) 50%,
    var(--orange)
  ) !important;
}

#nav a:first-child .nav-btn:active {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    var(--orange),
    var(--dark-orange) 49%,
    var(--orange) 51%,
    var(--light)
  ) !important;
}

.nav-text {
  font-family: "Chimboz Heavy";
  font-weight: normal;
  font-size: var(--lg-font-size);
  height: 100%;
  fill: var(--text-button);
  stroke: var(--dark-pink);
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
    stroke: var(--dark-orange);
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
