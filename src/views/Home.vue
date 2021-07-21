<template>
  <Container v-if="data">
    <template #left-column
      ><Card blue top>
        <router-link to="/levels">
          <div class="level fullwidth">
            Niveau
            <div class="number">
              <img
                v-for="number in data.level.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/${number}.png`)"
              />
            </div></div
        ></router-link>
        <router-link to="/mi">
          <div class="messages">
            <div>
              <img
                v-for="number in data.messages.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/roz/${number}.png`)"
              />
            </div>
            <img src="@/assets/img/home/fd_mi.png" class="fullwidth" />
          </div>
          message(s)</router-link
        >
        <router-link to="/friends">
          <div class="friends">
            <div>
              <img
                v-for="number in data.friends.toString(10)"
                :key="number.index"
                :src="require(`@/assets/img/numbers/roz/${number}.png`)"
              />
            </div>
            <img src="@/assets/img/home/fd_amis.png" class="fullwidth" />
          </div>
          ami(s) connecté(s)</router-link
        ></Card
      ><br />
      <Card yellow>
        <template #button>
          <Button yellow>Pépettes</Button>
        </template>
        <object
          type="image/svg+xml"
          :data="require('@/assets/img/bank.svg')"
          class="fullwidth"
        ></object>
        <router-link to="/bank">
          Tu as actuellement<br />
          <AnimatedNumber :number="data.credits" /><br />
          pépettes </router-link
        ><br /><br />
        <router-link to="/reflooz"
          ><Button yellow>Reflooz</Button></router-link
        ></Card
      ></template
    >
    <img src="@/assets/img/summer.png" style="max-width: 100%" /><br />
    <Card filename="header_lottery.png" v-if="data.lottery">
      <template #header
        ><img src="@/assets/img/header_hello.png" style="width: 100%"
      /></template>
      Tu peux gagner jusqu'à 30 pépettes<br />
      Clique sur le bouton pour gagner tes ppts </Card
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
            connectés</router-link
          ></template
        >
        {{ data.members }} membres<br />
        {{ data.last24 }} passés depuis 24h. </Card
      ><br />
      <Card blue>
        <template #button>
          <Button>Aide</Button>
        </template>

        <router-link to="/help"
          ><img src="@/assets/img/arrow_sm.svg"/> Perdu ? Besoin d'aide ?
          Clique ici !</router-link
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