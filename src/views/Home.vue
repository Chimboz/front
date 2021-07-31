<template>
  <Container v-if="data">
    <template #left-column
      ><Card blue top>
        <router-link to="/levels">
          <div class="level fullwidth">
            {{ $t('currentLevel') }}
            <div class="number">
              <img
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
                v-for="number in data.messages.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/roz/${number}.svg`)"
              />
            </div>
            <img src="@/assets/img/home/fd_mi.png" class="fullwidth" />
          </div>
          {{ $t('mi.message', data.messages) }}</router-link
        >
        <router-link to="/friends">
          <div class="friends">
            <div>
              <img
                v-for="number in data.friends.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/roz/${number}.svg`)"
              />
            </div>
            <img src="@/assets/img/home/fd_amis.png" class="fullwidth" />
          </div>
          {{ $t('friends.online', data.friends) }}</router-link
        ></Card
      ><br />
      <Card yellow>
        <template #button>
          <Button yellow>{{ $t('credit.title', data.credits) }}</Button>
        </template>
        <object
          type="image/svg+xml"
          :data="require('@/assets/img/bank.svg')"
          class="fullwidth"
        ></object>
        <router-link to="/bank">
          {{ $t('credit.youGot') }}<br />
          <AnimatedNumber :number="data.credits" /><br />
          {{ $t('credit', data.credits) }} </router-link
        ><br /><br />
        <router-link to="/reflooz" class="btn-route"
          ><Button orange>Reflooz</Button></router-link
        ></Card
      ></template
    >
    <img src="@/assets/img/summer.png" style="max-width: 100%" /><br />
    <Card filename="header_lottery.png" v-if="data.lottery">
      <template #header
        ><img src="@/assets/img/header_hello.png" style="width: 100%"
      /></template>
      {{ $t('lottery.firstLine') }}<br />
      {{ $t('lottery.secondLine') }}</Card
    ><br />
    <Card yellow justified>
      <template #subtop>Chapaniouz</template>
      <template #header
        ><img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
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
      <div class="gallery">
        <img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
          style="margin: auto"
        /><img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
          style="margin: auto"
        /><img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
          style="margin: auto"
        />
      </div>
    </Card>
    <template #right-column
      ><Card blue top>
        <template #header
          ><router-link to="/connecteds"
            ><h1>{{ data.connected }}</h1>
            {{ $t('connecteds', data.connected) }}</router-link
          ></template
        >
        {{ data.members }} {{ $t('members', data.members) }}  <br />
        {{ data.last24 }} {{ $t('members.past', data.last24) }} </Card
      ><br />
      <Card blue>
        <template #button>
          <Button>{{ $t('help.button') }}</Button>
        </template>

        <router-link to="/help"
          ><img src="@/assets/img/arrow_sm.svg"/>{{ $t('help.tip') }}</router-link
        ></Card
      ><br />
      <Card yellow filename="head_fringues.png">
        <template #button>
          <Button yellow>Pack</Button>
        </template>
        <img
          src="@/assets/img/packs/supporter.jpg"
          style="max-width: 100%"
        /><br /><br />
        <Button yellow class="fullwidth">Item</Button><br />
        <img
          src="@/assets/img/packs/blister_eskimok_perou1.jpg"
          style="max-width: 100%"
        />
      </Card>
    </template>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import AnimatedNumber from "@/components/AnimatedNumber.vue";
import Container from "@/views/Container.vue";

export default {
  name: "Home",
  components: {
    Card,
    Container,
    AnimatedNumber,
    Button,
  },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
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
      this.data = await this.axios.get("/api/home.json");
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.messages div {
  transform: translate3d(20%, 200%, 0);
}

.friends div {
  transform: translate3d(0, 200%, 0);
}
</style>