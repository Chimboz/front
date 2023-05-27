<template>
  <header>
    <NuxtLink to="/">
      <img
        id="logo"
        draggable="false"
        alt="Logo Chimboz"
        width="240"
        height="70"
        src="@/assets/img/logo.svg"
        @contextmenu.prevent
      />
    </NuxtLink>
    <div class="login flex">
      <div style="margin-top: -10px">
        <UserLink
          id="username"
          :user="{ name: user?.pseudo || 'Visiteur', id: user?.id }"
          style="display: inherit"
        />
        <div class="flex">
          <dark-mode-toggler class="mr-2" />
          <button
            class="mr-2"
            type="button"
            @click="$i18n.setLocale($i18n.locale === 'fr' ? 'en' : 'fr')"
          >
            <img
              draggable="false"
              :alt="$i18n.locale"
              height="20"
              width="20"
              style="filter: none"
              :src="asset(`img/icon/locale/${$i18n.locale}.svg`)"
              @contextmenu.prevent
            />
          </button>
          <button
            v-if="user"
            id="connect"
            class="btn-header"
            type="button"
            @click="auth.logout()"
          >
            <img
              class="mx-1"
              draggable="false"
              alt="Disconnect icon"
              height="11"
              width="11"
              src="@/assets/img/icon/failure.svg"
              @contextmenu.prevent
            />
            {{ $t('navbar.logout') }}
          </button>
          <button
            v-else
            id="connect"
            type="button"
            class="btn-header"
            @click="$router.push('/login')"
          >
            <img
              class="mx-1"
              draggable="false"
              alt="Connect icon"
              height="11"
              width="11"
              src="@/assets/img/icon/success.svg"
              @contextmenu.prevent
            />
            {{ $t('navbar.login') }}
          </button>
        </div>
      </div>
      <Avatar
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
  </header>
  <nav class="flex centered mb-3">
    <NuxtLink to="/">
      <button class="nav-btn flex centered" type="button">
        <img
          draggable="false"
          alt="Home icon"
          class="nav-icon"
          src="@/assets/img/navbar/icon/home.svg"
          width="20"
          height="20"
          style="margin: 2px; padding: 1px"
          @contextmenu.prevent
        />
      </button>
    </NuxtLink>
    <a target="_blank" href="/tchat"
      ><button class="nav-btn flex centered" type="button">
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
            $t('navbar.play')
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
    <NuxtLink v-if="user" to="/account">
      <button class="nav-btn flex centered" type="button">
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
          <StrokeText style="z-index: 1" class="btn-label">
            {{ $t('navbar.account') }}
          </StrokeText>
        </div>
      </button>
    </NuxtLink>
    <NuxtLink to="/games">
      <button class="nav-btn flex centered" type="button">
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
          <StrokeText style="z-index: 1" class="btn-label">
            {{ $t('navbar.games') }}
          </StrokeText>
        </div>
      </button>
    </NuxtLink>
    <NuxtLink to="/members">
      <button class="nav-btn flex centered" type="button">
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
          <StrokeText style="z-index: 1" class="btn-label">
            {{ $t('navbar.members') }}
          </StrokeText>
        </div>
      </button>
    </NuxtLink>
    <NuxtLink to="/bbs">
      <button class="nav-btn flex centered" type="button">
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
          <StrokeText style="z-index: 1" class="btn-label">
            {{ $t('navbar.community') }}
          </StrokeText>
        </div>
      </button>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import useAuthStore from '@/stores/auth';

const auth = useAuthStore();
const user = computed(() => auth.user);

defineProps<{ time: string }>();
</script>
<style lang="scss" scoped>
header {
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
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}

#username {
  font-family: 'Pixelated Verdana 12';
  font-weight: bold;
  font-size: 16px;
  color: var(--blue);
  text-shadow: 0 0 5px var(--light), 0 0 5px var(--light);
}

.btn-header {
  font-family: 'Pixelated Verdana 12';
  font-size: 1.3rem;
  color: var(--text);
  border-radius: var(--round);
  padding: 2px;
  line-height: 1;
  background: var(--light);
  height: 20px;
  text-align: left;
  display: flex;
  align-items: center;
}

.btn-header:hover {
  background: var(--light-blue);
  text-shadow: -0.1ex 0 0 currentColor, 0.1ex 0 0 currentColor;
}

#connect {
  margin-right: -20px;
  padding-right: 24px;
  width: max-content;
}

.nav-btn {
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

nav a:not(:first-child) {
  display: contents;
}

nav a:nth-child(2) .nav-btn {
  border-left-color: var(--pink);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  border-left-width: 5px;
}

nav a:last-child .nav-btn {
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
nav a.router-link-active .nav-icon {
  filter: none;
}

nav a:first-child .nav-btn {
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

.nav-btn:hover,
.nav-btn:active,
nav a.router-link-active .nav-btn {
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

nav a:first-child .nav-btn:hover,
nav a:first-child .nav-btn:active,
nav a:first-child.router-link-active .nav-btn {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    var(--light) 0%,
    var(--orange) 49%,
    var(--dark-orange) 51%,
    var(--orange)
  );
}

nav a:nth-child(2) .nav-btn:hover,
nav a:first-child .nav-btn:hover,
nav a:nth-child(2) .nav-btn:active,
nav a:first-child .nav-btn:active,
nav a:first-child.router-link-active .nav-btn,
nav a:nth-child(2).router-link-active .nav-btn {
  border-left-color: var(--orange);
}

nav a:last-child .nav-btn:hover,
nav a:first-child .nav-btn:hover,
nav a:last-child .nav-btn:active,
nav a:first-child .nav-btn:active,
nav a:last-child.router-link-active .nav-btn,
nav a:first-child.router-link-active .nav-btn {
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

nav a:first-child .nav-btn:active {
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 0%,
    var(--orange),
    var(--dark-orange) 49%,
    var(--orange) 51%,
    var(--light)
  ) !important;
}

.nav-text {
  font-family: 'Chimboz Heavy';
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
  nav a.router-link-active .nav-text {
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

@keyframes cycleHeader {
  0% {
    background-image: url(@/assets/img/navbar/svg/0.svg);
  }
  4.17% {
    background-image: url(@/assets/img/navbar/svg/1.svg);
  }
  8.33% {
    background-image: url(@/assets/img/navbar/svg/2.svg);
  }
  12.5% {
    background-image: url(@/assets/img/navbar/svg/3.svg);
  }
  16.67% {
    background-image: url(@/assets/img/navbar/svg/4.svg);
  }
  20.83% {
    background-image: url(@/assets/img/navbar/svg/5.svg);
  }
  25% {
    background-image: url(@/assets/img/navbar/svg/6.svg);
  }
  29.17% {
    background-image: url(@/assets/img/navbar/svg/7.svg);
  }
  33.33% {
    background-image: url(@/assets/img/navbar/svg/8.svg);
  }
  37.5% {
    background-image: url(@/assets/img/navbar/svg/9.svg);
  }
  41.67% {
    background-image: url(@/assets/img/navbar/svg/10.svg);
  }
  45.83% {
    background-image: url(@/assets/img/navbar/svg/11.svg);
  }
  50% {
    background-image: url(@/assets/img/navbar/svg/12.svg);
  }
  54.17% {
    background-image: url(@/assets/img/navbar/svg/13.svg);
  }
  58.33% {
    background-image: url(@/assets/img/navbar/svg/14.svg);
  }
  62.5% {
    background-image: url(@/assets/img/navbar/svg/15.svg);
  }
  66.67% {
    background-image: url(@/assets/img/navbar/svg/16.svg);
  }
  70.83% {
    background-image: url(@/assets/img/navbar/svg/17.svg);
  }
  75% {
    background-image: url(@/assets/img/navbar/svg/18.svg);
  }
  79.17% {
    background-image: url(@/assets/img/navbar/svg/18.svg);
  }
  83.33% {
    background-image: url(@/assets/img/navbar/svg/20.svg);
  }
  87.5% {
    background-image: url(@/assets/img/navbar/svg/21.svg);
  }
  91.67% {
    background-image: url(@/assets/img/navbar/svg/22.svg);
  }
  95.83% {
    background-image: url(@/assets/img/navbar/svg/23.svg);
  }
}

header {
  animation: cycleHeader 86400s step-end infinite;
  animation-delay: v-bind(time);
}
</style>
