<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <router-link to="/levels" v-if="data">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div class="number">
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.level.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="require(`@/asset/img/number/${number}.svg`)"
              />
            </div>
          </div>
        </router-link>
        <router-link to="/mi" v-if="data">
          <div class="messages">
            <div>
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.messages.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="require(`@/asset/img/number/pink/${number}.svg`)"
              />
            </div>
            <img
              draggable="false"
              @contextmenu.prevent
              alt="Messages"
              src="@/asset/img/home/messages.png"
              width="154"
              height="67"
              class="fullwidth"
            />
          </div>
          {{ $t("mi.message", data.messages) }}
        </router-link>
        <router-link to="/friends" v-if="data">
          <div class="friends">
            <div>
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.friends.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="require(`@/asset/img/number/pink/${number}.svg`)"
              />
            </div>
            <img
              draggable="false"
              @contextmenu.prevent
              alt="Friends"
              src="@/asset/img/home/friends.png"
              width="154"
              height="67"
              class="fullwidth"
            />
          </div>
          {{ $t("friends.online", data.friends) }}
        </router-link>
      </Card>
      <br />
      <Bank />
    </template>
    <img
      draggable="false"
      @contextmenu.prevent
      src="/announce/img.png"
      width="468"
      height="213"
      style="width: 100%"
    />
    <br />
    <Card header="lottery.png" v-if="data && data.lottery">
      <template #header>
        <img
          draggable="false"
          @contextmenu.prevent
          width="434"
          height="87"
          src="@/asset/img/home/header_hello.png"
          style="width: 100%"
        />
      </template>
      {{ $t("lottery.firstLine") }}<br />
      {{ $t("lottery.secondLine") }}<br /><br />
      <RandomNumber :max="30" :value="20" :duration="5000" />
      <br /><br />
      <Button color="orange" @click="handle" class="btn-loto"
        ><template #prepend
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Lottery handle"
            class="handle"
            ref="handle"
            src="@/asset/img/lottery/up.svg"/></template
        >Jouer</Button
      ></Card
    ><br />
    <Card color="yellow" justified>
      <template #subtop>Chapaniouz</template>
      <template #header
        ><img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/home/chimboking.gif"
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
          @contextmenu.prevent
          src="@/asset/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
        /><img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
        /><img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/home/chimboking.gif"
          alt="Chimboking portrait"
          style="margin: auto"
        />
      </div>
    </Card>
    <template #right-column
      ><Card color="blue" top v-if="data">
        <template #header
          ><router-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $t("connecteds", data.connected) }}</router-link
          ></template
        >
        {{ data.members }} {{ $t("members.text", data.members) }} <br />
        {{ data.last24 }} {{ $t("members.past", data.last24) }} </Card
      ><br />
      <Card color="blue">
        <template #button>
          <Button icon="register.svg">{{ $t("help.button") }}</Button>
        </template>

        <router-link to="/help"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Puce"
            src="@/asset/img/puce.svg"
          />{{ $t("help.tip") }}</router-link
        ></Card
      ><br />
      <Card
        color="yellow"
        header="packs.png"
        :width="154"
        :height="96"
        class="packs"
      >
        <template #button>
          <Button color="yellow" icon="register.svg">Pack</Button>
        </template>
        <Pack header="summer.png" footer="summer.png" /><br /><br />
        <Button color="yellow" icon="register.svg" class="fullwidth"
          >Item</Button
        ><br />
        <Pack header="summer.png" footer="summer.png" />
      </Card>
    </template>
  </Container>
</template>

<script>
import RandomNumber from "@/component/RandomNumber.vue";
import Bank from "@/component/Bank.vue";
import Pack from "@/component/Pack.vue";

export default {
  name: "Home",
  components: {
    Bank,
    RandomNumber,
    Pack
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/home.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/home.json");
    this.data = req.data;
  },
  methods: {
    handle({ currentTarget }) {
      this.$refs.handle.src = require("@/asset/img/lottery/down.svg");
      setTimeout(() => {
        this.$refs.handle.src = require("@/asset/img/lottery/up.svg");
        currentTarget.disabled = true;
      }, 200);
    }
  },
  metaInfo: {
    title: "section.home",
    meta: [
      {
        name: "description",
        content:
          "ChapatizRetro.com est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chapatiz Retro, accueil"
      },
      {
        property: "og:description",
        content: "Chapatiz Retro, accueil"
      },
      { property: "og:site_name", content: "Chapatiz Retro" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>
<style lang="scss">
.btn-loto .btn-text {
  margin-left: 16px;
}

.packs .card-btn {
  background: linear-gradient(
    to bottom,
    #7aaaf0,
    #7aaaf0 50%,
    var(--main-card-color) 50%
  ) !important;
}
</style>

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
  border-image: url(../asset/img/lottery/down.svg);
}
</style>
