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
        <div class="demo-picture">
          <section :class="{ display: demo == 0 }">
            <div class="demo-info">Bienvenue sur l'archipel</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/0.png"
            />
          </section>
          <section :class="{ display: demo == 1 }">
            <div class="demo-info">Crée ton style</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/1.png"
            />
          </section>
          <section :class="{ display: demo == 2 }">
            <div class="demo-info">Discute avec tes amis</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/2.png"
            />
          </section>
          <section :class="{ display: demo == 3 }">
            <div class="demo-info">Fais ta vie virtuelle</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/3.png"
            />
          </section>
          <section :class="{ display: demo == 4 }">
            <div class="demo-info">Rejoins des groupes</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/4.png"
            />
          </section>
          <section :class="{ display: demo == 5 }">
            <div class="demo-info">Affronte les joueurs dans des mini-jeux</div>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/5.png"
            />
          </section>
        </div>
      </div>
      <section class="section0" v-if="section == 0">
        <br /><Button color="green" @click="section = 1"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow green jitter"
              src="@/asset/img/arrow.svg"/></template
          >S'inscrire</Button
        ><br />
        <Button @click="section = 2">Se connecter</Button>
      </section>
      <form class="section1" v-if="section == 1" autocomplete="on">
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
        /><br />
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
          <Button color="red" @click="section = 0" type="button"
            >Annuler</Button
          >
          <Button color="green"
            ><template #prepend
              ><img
                type="submit"
                draggable="false"
                @contextmenu.prevent
                alt="Arrow icon"
                class="arrow green jitter"
                src="@/asset/img/arrow.svg"/></template
            >S'inscrire</Button
          >
        </div>
      </form>
      <form
        class="section2"
        v-if="section == 2"
        autocomplete="on"
        @submit.prevent="
          login();
          this.$router.push('/');
        "
      >
        <br />
        <div>
          <input
            required
            autofocus
            minlength="3"
            maxlength="15"
            name="username"
            type="text"
            pattern="[\w\.\-_@]{3,15}"
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
        <div style="display: none">
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
        </div>
        <div class="flex">
          <Button color="red" @click="section = 0" type="button"
            >Annuler</Button
          >
          <Button type="submit" color="green"
            ><template #prepend
              ><img
                draggable="false"
                @contextmenu.prevent
                alt="Arrow icon"
                class="arrow green jitter"
                src="@/asset/img/arrow.svg"/></template
            >Se connecter</Button
          >
        </div>
      </form>
    </div>
    <a href="/tchat" class="try pointer"
      >Je veux juste visiter&nbsp;&nbsp;<img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/puce.svg"
    /></a>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      section: 0,
      demo: 0
    };
  },
  mounted() {
    setInterval(() => (this.demo = (this.demo + 1) % 6), 7000);
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    }
  }
};
</script>
<style lang="scss" scoped>
.background {
  background: #fff;
  border-radius: 12px;
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
  color: #fff;
  text-shadow: 0 0 4px #f0009c;
  text-transform: lowercase;
  font-size: 18px;
  margin-top: 4px;
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
  border-radius: 12px;
  border-bottom: 2px solid #fff7f7;
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
  padding: 2px 2px 10px 2px;
  margin-bottom: -8px;
  border-radius: 8px 8px 0 0;
}

.demo-btn button {
  width: 37.6px;
  height: 26.3px;
}

$categories: home, mode, tchat, wedding, group, bacteria, empty, empty, empty,
  empty;

@each $category in $categories {
  .#{$category} {
    background: url(../asset/img/demo/#{$category}.svg);
    border-image: url(../asset/img/demo/#{$category}_hover.svg);
  }

  .#{$category}:hover,
  .#{$category}.active {
    background: url(../asset/img/demo/#{$category}_hover.svg);
    border-image: url(../asset/img/demo/#{$category}.svg);
  }
}

.demo-picture {
  background: url(../asset/img/demo/demo.svg);
  background-size: cover;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
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
    #fff0,
    #fff4 49%,
    #fff8 51%,
    #fff4
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
  background: #fffa;
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
  text-shadow: 0 0 2px #f0009c;
  color: #fff;
  height: 45.25px;
  text-align: left;
  padding: 12px;
  background: url(../asset/img/demo/info.svg);
  background-size: cover;
}

.demo-picture img {
  width: 100%;
  max-width: 457px;
}

.foreground form input {
  width: calc(50% - 8px);
  margin: 2px;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
}

.foreground form .btn {
  margin: 4px;
}
</style>
