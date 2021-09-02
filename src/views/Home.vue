<template>
  <Container v-if="data">
    <template #left-column
      ><Card blue top>
        <router-link to="/levels">
          <div class="level fullwidth">
            {{ $t("currentLevel") }}
            <div class="number">
              <img
                draggable="false"
                oncontextmenu="return false"
                :alt="number"
                v-for="number in data.level.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/${number}.svg`)"
              />
            </div></div
        ></router-link>
        <router-link to="/mi">
          <div class="messages">
            <div>
              <img
                draggable="false"
                oncontextmenu="return false"
                :alt="number"
                v-for="number in data.messages.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/pink/${number}.svg`)"
              />
            </div>
            <img
              draggable="false"
              oncontextmenu="return false"
              alt="Messages"
              src="@/assets/img/home/messages.png"
              class="fullwidth"
            />
          </div>
          {{ $t("mi.message", data.messages) }}</router-link
        >
        <router-link to="/friends">
          <div class="friends">
            <div>
              <img
                draggable="false"
                oncontextmenu="return false"
                :alt="number"
                v-for="number in data.friends.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/pink/${number}.svg`)"
              />
            </div>
            <img
              draggable="false"
              oncontextmenu="return false"
              alt="Friends"
              src="@/assets/img/home/friends.png"
              class="fullwidth"
            />
          </div>
          {{ $t("friends.online", data.friends) }}</router-link
        ></Card
      ><br />
      <Bank :credits="data.credits"
    /></template>
    <img
      draggable="false"
      oncontextmenu="return false"
      src="@/assets/img/home/announces/summer.png"
      style="max-width: 100%"
    /><br />
    <Card filename="lottery.png" v-if="data.lottery">
      <template #header
        ><img
          draggable="false"
          oncontextmenu="return false"
          src="@/assets/img/home/header_hello.png"
          style="width: 100%"
      /></template>
      {{ $t("lottery.firstLine") }}<br />
      {{ $t("lottery.secondLine") }}<br /><br />
      <RandomNumber :max="30" :value="20" :duration="5000" />
      <br /><br />
      <Button orange @click="handle"
        ><template #prepend
          ><img
            draggable="false"
            oncontextmenu="return false"
            alt="Lottery handle"
            class="handle"
            ref="handle"
            src="@/assets/img/lottery/up.svg" /></template
        >Jouer</Button
      ></Card
    ><br />
    <Card yellow justified>
      <template #subtop>Chapaniouz</template>
      <template #header
        ><img
          draggable="false"
          oncontextmenu="return false"
          src="@/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="float: left; margin: 0 17px 17px 0"
        />
        Changelog du 12/07/2021
      </template>

      - La salle En route vers Kopakabana est désormais ouverte ! L'ambiance
      change selon l'heure (heure de Paris)<br />
      - La salle Patojdur est désormais ouverte !<br />
      - Le jeu Patojdur est opérationnel avec son classement (il manque
      l'animation de nage)<br />
      VIDEZ VOTRE CACHE<br />
    </Card>
    <br />
    <Card>
      <template #subtop>Chaparazzi</template>
      <div class="gallery flex">
        <img
          draggable="false"
          oncontextmenu="return false"
          src="@/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
        /><img
          draggable="false"
          oncontextmenu="return false"
          src="@/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
        /><img
          draggable="false"
          oncontextmenu="return false"
          src="@/assets/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
        />
      </div>
    </Card>
    <template #right-column
      ><Card blue top>
        <template #header
          ><router-link to="/connecteds"
            ><h1>{{ data.connected }}</h1>
            {{ $t("connecteds", data.connected) }}</router-link
          ></template
        >
        {{ data.members }} {{ $t("members", data.members) }} <br />
        {{ data.last24 }} {{ $t("members.past", data.last24) }} </Card
      ><br />
      <Card blue>
        <template #button>
          <Button icon="register.svg">{{ $t("help.button") }}</Button>
        </template>

        <router-link to="/help"
          ><img
            draggable="false"
            oncontextmenu="return false"
            alt="Puce"
            src="@/assets/img/puce.svg"
          />{{ $t("help.tip") }}</router-link
        ></Card
      ><br />
      <Card yellow filename="packs.png">
        <template #button>
          <Button yellow icon="register.svg">Pack</Button>
        </template>
        <Pack header="summer.png" footer="summer.png" /><br /><br />
        <Button yellow icon="register.svg" class="fullwidth">Item</Button><br />
        <Pack header="summer.png" footer="summer.png" />
      </Card>
    </template>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import RandomNumber from "@/components/RandomNumber.vue";
import Bank from "@/components/Bank.vue";
import Pack from "@/components/Pack.vue";
import Container from "@/components/Container.vue";

export default {
  name: "Home",
  components: {
    Card,
    Container,
    Bank,
    Button,
    RandomNumber,
    Pack,
  },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  methods: {
    handle({ currentTarget }) {
      this.$refs.handle.src = require("@/assets/img/lottery/down.svg");
      setTimeout(() => {
        this.$refs.handle.src = require("@/assets/img/lottery/up.svg");
        currentTarget.disabled = true;
      }, 200);
    },
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/home.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.loading = false;
          } else {
            // Didn't like the result, redirect
            next("/");
          }
        })
        .catch((error) => {
          vm.error = error.toString();
        });
    });
  },
  async beforeRouteUpdate() {
    try {
      this.data = await this.axios
        .get("/api/home.json")
        .then((res) => res.data);
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  flex-wrap: wrap;
}

.messages div {
  transform: translate3d(20%, 200%, 0);
}

.friends div {
  transform: translate3d(0, 210%, 0);
}

.handle {
  margin-left: calc(-4% - 16px);
  margin-top: -16px;
}
</style>