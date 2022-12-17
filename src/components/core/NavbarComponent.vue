<template>
  <div
    class="header"
    :style="{
      backgroundImage: `url(${asset(`img/navbar/svg/${hours}.svg`)})`,
    }"
  >
    <router-link to="/"
      ><img
        id="logo"
        draggable="false"
        alt="Logo Chimboz"
        width="240"
        height="70"
        src="@/assets/img/logo.svg"
        @contextmenu.prevent
    /></router-link>
    <div class="login flex">
      <div style="margin-top: -10px">
        <UserLink
          id="username"
          :user="{ name: user?.pseudo || 'Visiteur', id: user?.id }"
          style="display: inherit"
        />
        <button
          v-if="user"
          id="connect"
          class="centered"
          style="display: inline-flex"
          @click="auth.logout()"
        >
          <img
            draggable="false"
            alt="Disconnect icon"
            height="11"
            width="11"
            src="@/assets/img/icon/failure.svg"
            @contextmenu.prevent
          />
          {{ $t("navbar.logout") }}
        </button>
        <button v-else>
          <router-link id="connect" to="/login" class="flex">
            <img
              draggable="false"
              alt="Connect icon"
              height="11"
              width="11"
              src="@/assets/img/icon/success.svg"
              @contextmenu.prevent
            />
            {{ $t("navbar.login") }}
          </router-link>
        </button>
      </div>
      <GlobalAvatar
        style="margin-right: 16px"
        :avatar="user ? 0 : 0"
        :emote="user ? user.avatar_mood : 'neutral'"
        :hat="user ? +user.avatar_design.split(';')[1] : 1"
        :body="user ? +user.avatar_design.split(';')[2] : 318"
        :shoe="user ? +user.avatar_design.split(';')[3] : 606"
        :item0="user ? +user.avatar_design.split(';')[4] : 792"
        :item1="user ? +user.avatar_design.split(';')[5] : 868"
        :item2="user ? +user.avatar_design.split(';')[6] : 938"
      />
    </div>
  </div>
  <div id="nav" class="flex">
    <router-link
      to="/"
      :class="{ active: ($route.meta.section as string[])?.includes('Home') }"
      ><button class="nav-btn flex centered">
        <img
          draggable="false"
          alt="Home icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/home.svg"
          width="20"
          height="20"
          style="margin: 2px; padding: 1px"
          @contextmenu.prevent
        /></button
    ></router-link>
    <a target="_blank" href="/tchat"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            alt="Tchat icon"
            class="nav-icon"
            src="@/assets/img/navbar/icon/tchat.svg"
            width="28"
            height="21"
            @contextmenu.prevent
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.play")
          }}</StrokeText>
        </div>
        <img
          draggable="false"
          alt="Arrow icon"
          class="arrow jitter"
          width="40"
          height="33"
          src="@/assets/img/arrow.svg"
          @contextmenu.prevent
        /></button
    ></a>
    <router-link
      v-if="user"
      to="/account"
      :class="{ active: ($route.meta.section as string[])?.includes('Account') }"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            alt="Account icon"
            class="nav-icon"
            width="21"
            height="21"
            src="@/assets/img/navbar/icon/account.svg"
            @contextmenu.prevent
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.account")
          }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link
      to="/games"
      :class="{ active: ($route.meta.section as string[])?.includes('Games') }"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            alt="Games icon"
            class="nav-icon"
            width="20"
            height="21"
            src="@/assets/img/navbar/icon/games.svg"
            @contextmenu.prevent
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.games")
          }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link
      to="/members"
      :class="{ active: ($route.meta.section as string[])?.includes('Members') }"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            alt="Member icon"
            class="nav-icon"
            width="21"
            height="21"
            src="@/assets/img/navbar/icon/members.svg"
            @contextmenu.prevent
          />
          <StrokeText style="z-index: 1" class="btn-label">{{
            $t("navbar.members")
          }}</StrokeText>
        </div>
      </button></router-link
    >
    <router-link
      to="/bbs"
      :class="{ active: ($route.meta.section as string[])?.includes('Community') }"
      ><button class="nav-btn flex centered">
        <div class="nav-text">
          <img
            draggable="false"
            alt="Community icon"
            class="nav-icon"
            width="21"
            height="21"
            src="@/assets/img/navbar/icon/community.svg"
            @contextmenu.prevent
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
import { computed } from "vue";
import { useRoute } from "vue-router";
const auth = useAuthStore();
const user = computed(() => auth.user);

// @vuese
// @group Core

const hours = new Date().getHours();
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
#nav a.active .nav-icon {
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
#nav a.active .nav-btn {
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
#nav a:first-child.active .nav-btn {
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
#nav a:first-child.active .nav-btn,
#nav a:nth-child(2).active .nav-btn {
  border-left-color: var(--orange);
}

#nav a:last-child .nav-btn:hover,
#nav a:first-child .nav-btn:hover,
#nav a:last-child .nav-btn:active,
#nav a:first-child .nav-btn:active,
#nav a:last-child.active .nav-btn,
#nav a:first-child.active .nav-btn {
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
  #nav a.active .nav-text {
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
