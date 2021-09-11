<template>
  <div class="background">
    <div class="foreground">
      <div class="demo">
        <div class="demo-btn hstack">
          <button class="home"></button>
          <button class="mode"></button>
          <button class="tchat"></button>
          <button class="wedding"></button>
          <button class="group"></button>
          <button class="bacteria"></button>
          <button class="empty"></button>
          <button class="empty"></button>
          <button class="empty"></button>
          <button class="empty"></button>
          <button class="empty"></button>
        </div>
        <div class="demo-picture">
          <div class="demo-info">Test</div>
          <img src="@/asset/img/demo/demo.svg" />
        </div>
      </div>
      <section class="section0" v-if="section == 0">
        <br /><Button green @click="section = 1"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow jitter"
              src="@/asset/img/arrow.svg"/></template
          >S'inscrire</Button
        ><br />
        <Button @click="section = 2">Se connecter</Button>
      </section>
      <form class="section1" v-if="section == 1">
        <br />
        <input
          type="text"
          name="username"
          class="btn-md"
          :placeholder="$t('placeholder.username')"
        />
        <input
          type="text"
          name="mail"
          class="btn-md"
          :placeholder="$t('placeholder.mail')"
        /><br />
        <input name="password" type="password" class="btn-md" />
        <input name="password" type="password" class="btn-md" /><br />
        <div class="flex">
          <Button red @click="section = 0">Annuler</Button>
          <Button green
            ><template #prepend
              ><img
                draggable="false"
                @contextmenu.prevent
                alt="Arrow icon"
                class="arrow jitter"
                src="@/asset/img/arrow.svg"/></template
            >S'inscrire</Button
          >
        </div>
      </form>
      <form class="section2" v-if="section == 2">
        <br />
        <input
          name="username"
          type="text"
          class="btn-md"
          :placeholder="$t('placeholder.username')"
        />
        <input name="password" type="password" class="btn-md" /><br />
        <div class="flex">
          <Button red @click="section = 0">Annuler</Button>
          <Button
            green
            @click="
              login();
              this.$router.push('/');
            "
            ><template #prepend
              ><img
                draggable="false"
                @contextmenu.prevent
                alt="Arrow icon"
                class="arrow jitter"
                src="@/asset/img/arrow.svg"/></template
            >Se connecter</Button
          >
        </div>
      </form>
    </div>
    <span class="try pointer"
      >Je veux juste visiter&nbsp;&nbsp;<img src="@/asset/img/puce.svg"
    /></span>
  </div>
</template>
<script>
import Button from "@/component/Button.vue";
export default {
  name: "Message",
  components: {
    Button,
  },
  data() {
    return {
      section: 0,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
  },
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
  color: #fff;
  text-shadow: 0 0 4px #f0009c;
  text-transform: lowercase;
  font-size: 18px;
  margin-top: 8px;
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

  .#{$category}:hover {
    background: url(../asset/img/demo/#{$category}_hover.svg);
  }
}

.demo-picture {
  background: url(../asset/img/demo/demo.svg);
  background-size: cover;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

.demo-picture:hover .demo-info {
  transform: translateY(0);
}

.demo-info {
  position: absolute;
  transform: translateY(-100%);
  transition: 0.5s;
  width: 100%;
  text-align: left;
  padding: 12px;
  background: url(../asset/img/demo/info.svg);
  background-size: cover;
}

.demo-picture img {
  width: 100%;
  max-width: 457px;
}

.arrow {
  filter: hue-rotate(135deg) saturate(1.5) !important;
}

.foreground form input {
  width: calc(50% - 8px);
  margin: 0 4px;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
}

.foreground form .btn {
  margin: 4px;
}
</style>
