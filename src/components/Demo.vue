<template>
  <div class="background">
    <div class="foreground">
      <div class="demo">
        <div class="demo-btn hstack">
          <button
            class="home"
            @click="demo = 0"
            :class="{ active: demo == 0 }"
          ></button>
          <button
            class="mode"
            @click="demo = 1"
            :class="{ active: demo == 1 }"
          ></button>
          <button
            class="tchat"
            @click="demo = 2"
            :class="{ active: demo == 2 }"
          ></button>
          <button
            class="wedding"
            @click="demo = 3"
            :class="{ active: demo == 3 }"
          ></button>
          <button
            class="group"
            @click="demo = 4"
            :class="{ active: demo == 4 }"
          ></button>
          <button
            class="bacteria"
            @click="demo = 5"
            :class="{ active: demo == 5 }"
          ></button>
          <button class="empty"></button>
          <button class="empty"></button>
          <button class="empty"></button>
          <button class="empty"></button>
          <button class="empty"></button>
        </div>
        <div class="demo-picture relative">
          <section :class="{ display: demo == 0 }">
            <div class="demo-info">{{ $t("demo.info1") }}</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/assets/img/demo/0.png"
            />
          </section>
          <section :class="{ display: demo == 1 }">
            <div class="demo-info">{{ $t("demo.info2") }}</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/assets/img/demo/1.png"
            />
          </section>
          <section :class="{ display: demo == 2 }">
            <div class="demo-info">{{ $t("demo.info3") }}</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/assets/img/demo/2.png"
            />
          </section>
          <section :class="{ display: demo == 3 }">
            <div class="demo-info">{{ $t("demo.info4") }}</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/assets/img/demo/3.png"
            />
          </section>
          <section :class="{ display: demo == 4 }">
            <div class="demo-info">{{ $t("demo.info5") }}</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/assets/img/demo/4.png"
            />
          </section>
          <section :class="{ display: demo == 5 }">
            <div class="demo-info">{{ $t("demo.info6") }}</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/assets/img/demo/5.png"
            />
          </section>
        </div>
      </div>
      <form v-if="section == 0" autocomplete="on">
        <br />
        <input
          required
          autofocus
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md"
          autocomplete="username"
          :placeholder="$t('placeholder.username')"
        />
        <input
          required
          type="email"
          name="email"
          minlength="6"
          autocomplete="email"
          inputmode="email"
          class="btn-md"
          :placeholder="$t('placeholder.mail')"
        />
        <input
          required
          name="password"
          type="password"
          :placeholder="$t('placeholder.password')"
          class="btn-md"
        />
        <input
          required
          name="password_confirm"
          type="password"
          :placeholder="$t('placeholder.password_confirm')"
          class="btn-md"
        />
        <div class="flex">
          <GlobalButton @click="section = 1" type="button">{{
            $t("button.signin")
          }}</GlobalButton>
          <GlobalButton color="green"
            ><template #prepend
              ><img
                type="submit"
                draggable="false"
                @contextmenu.prevent
                alt="Arrow icon"
                class="arrow green jitter"
                src="@/assets/img/arrow.svg" /></template
            >{{ $t("button.register") }}</GlobalButton
          >
        </div>
      </form>
      <form
        v-if="section == 1"
        autocomplete="on"
        @submit.prevent="
          login();
          $router.push('/');
        "
      >
        <br />
        <div>
          <input
            required
            autofocus
            minlength="2"
            maxlength="15"
            name="username"
            type="text"
            pattern="[\w\.\-_@]{2,15}"
            class="btn-md"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
          />
          <input
            required
            name="password"
            type="password"
            :placeholder="$t('placeholder.password')"
            autocomplete="current-password"
            class="btn-md"
          />
        </div>
        <!-- TODO: Two-Factor Authentication
        <div>
          <input
            type="text"
            name="token"
            inputmode="numeric"
            autocomplete="one-time-code"
            minlength="6"
            pattern="[0-9]{6}"
            maxlength="6"
            class="btn-md"
          />
        </div>-->
        <div class="flex">
          <GlobalButton @click="section = 0" type="button">{{
            $t("button.register")
          }}</GlobalButton>
          <GlobalButton type="submit" color="green"
            ><template #prepend
              ><img
                draggable="false"
                @contextmenu.prevent
                alt="Arrow icon"
                class="arrow green jitter"
                src="@/assets/img/arrow.svg" /></template
            >{{ $t("button.signin") }}</GlobalButton
          >
        </div>
      </form>
    </div>
    <a href="/tchat" class="try pointer"
      >{{ $t("demo.try") }}&nbsp;&nbsp;<img
        draggable="false"
        @contextmenu.prevent
        src="@/assets/img/puce.svg"
    /></a>
  </div>
</template>
<script setup lang="ts">
// @vuese
// @group Default

import { ref } from "vue";

const section = ref(1);
const demo = ref(0);

function mounted() {
  setInterval(() => (demo.value = (demo.value + 1) % 6), 7000);
}

function login() {
  //$store.dispatch("auth/login");
}
</script>
<style lang="scss" scoped>
.background {
  background: var(--light);
  border-radius: var(--border-radius);
  width: 100%;
  border-bottom: 2px solid #b6c6cd;
  box-shadow: 0 2px #3e6d7f;
  display: flex;
  flex-direction: column;
}

.try {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  text-decoration: none;
  color: var(--light);
  text-shadow: 0 0 var(--sm-gap) var(--pink);
  text-transform: lowercase;
  font-size: var(--lg-font-size);
  margin-top: var(--sm-gap);
}

.try:hover img {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  5% {
    transform: translateX(10px);
    filter: brightness(2);
  }
}

.foreground {
  width: 100%;
  background: linear-gradient(to bottom, transparent, transparent 50%, #ffe6e6);
  border-radius: var(--border-radius);
  border-bottom: 2px solid var(--light);
  box-shadow: 0 2px #f3cac2, 0 4px #dfe7ea;
  display: flex;
  justify-content: center;
  padding: 6px;
  flex-direction: column;
}

.demo {
  overflow: hidden;
}

.demo-btn {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(to bottom, #4197cf, #bce4fe);
  padding: var(--sm-gap) var(--sm-gap) var(--md-gap) var(--sm-gap);
  margin-bottom: calc(-1 * var(--md-gap));
  border-radius: var(--md-gap) var(--md-gap) 0 0;
}

.demo-btn button {
  width: 37.6px;
  height: 26.3px;
}

$categories: home, mode, tchat, wedding, group, bacteria, empty, empty, empty,
  empty;

@each $category in $categories {
  .#{$category} {
    background: url(../assets/img/demo/#{$category}.svg);
    border-image: url(../assets/img/demo/#{$category}_hover.svg);
  }

  .#{$category}:hover,
  .#{$category}.active {
    background: url(../assets/img/demo/#{$category}_hover.svg);
    border-image: url(../assets/img/demo/#{$category}.svg);
  }
}

.demo-picture {
  background: url(../assets/img/demo/demo.svg);
  background-size: cover;
  overflow: hidden;
  border-radius: var(--md-gap);
  --rotate: rotate(30deg);
}

.demo-picture section {
  display: none;
}

section.display {
  display: block;
}

.demo-picture section::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    ellipse 120% 100% at 50% 15%,
    var(--light) 0,
    var(--light) 4 49%,
    var(--light) 8 51%,
    var(--light) 4
  );
}

.demo-picture section::after {
  position: absolute;
  content: "";
  opacity: 0;
  top: -75%;
  width: 20%;
  height: 200%;
  transform: translateX(-700%) var(--rotate);
  background: var(--light) a;
  animation: shine 7s infinite linear;
}

@keyframes shine {
  5% {
    opacity: 1;
    transform: translateX(150%) var(--rotate);
  }
  100% {
    opacity: 0;
    transform: translateX(150%) var(--rotate);
  }
}

.demo-picture:hover .demo-info {
  transform: translateY(0);
}

.demo-info {
  position: absolute;
  transform: translateY(-100%);
  transition: 0.5s;
  width: 100%;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  text-shadow: 0 0 2px var(--pink);
  color: var(--light);
  height: 45.25px;
  text-align: left;
  padding: var(--gap);
  background: url(../assets/img/demo/info.svg);
  background-size: cover;
}

.demo-picture img {
  width: 100%;
  max-width: 457px;
}

.foreground form input {
  width: calc(50% - var(--md-gap));
  margin: 2px;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
}

.foreground form .btn {
  margin: 4px;
}
</style>
