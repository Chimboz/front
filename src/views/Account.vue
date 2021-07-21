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
            </div></div></router-link
        ><br />
        <div class="menu fullwidth">
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Mon
            compte</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Ma
            messagerie</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Mes
            groupes</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Mes amis</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Forum</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Pamalin</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Majmin</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Fringues</router-link
          >
        </div></Card
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
        <router-link to="/reflooz" class="btn-route"
          ><Button yellow>Reflooz</Button></router-link
        ></Card
      ></template
    >
    <Card blue>
      <div class="cabin">
        <Tiz
          tabindex="0"
          @keydown.up="up"
          @keydown.down="down"
          @keydown.left="left"
          @keydown.right="right"
        />
      </div>
    </Card>
    <template #right-column>
      <Card blue filename="fd_slot_mi_sky.gif"> </Card><br />
      <Card blue filename="fd_slot_forum_sky.gif"> </Card><br /><Card blue>
        <template #button> <Button>Amis</Button> </template>
      </Card>
    </template>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import Tiz from "@/components/Tiz.vue";
import AnimatedNumber from "@/components/AnimatedNumber.vue";
import Container from "@/views/Container.vue";

export default {
  name: "Account",
  components: {
    Card,
    Button,
    AnimatedNumber,
    Container,
    Tiz,
  },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  methods: {
    up() {
      console.log("up");
    },
    down() {
      console.log("down");
    },
    left() {
      console.log("left");
    },
    right() {
      console.log("right");
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
      this.data = await this.axios.get("/api/home.json");
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>

<style lang="scss">
.cabin .tiz {
  position: relative;
  width: 100%;
  z-index: 3;
}
</style>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
}

.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 10px;
}

.list:nth-child(2n + 1) {
  background: #a8dfff
    linear-gradient(
      to right,
      #6ebef0a0,
      transparent 10%,
      transparent 90%,
      #6ebef0a0
    );
}

.cabin {
  position: relative;
  width: 33%;
}

.cabin:before {
  background: linear-gradient(to bottom, #240026, transparent);
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: bg 0.3s linear infinite 0.3s alternate;
  z-index: 2;
  border-top-left-radius: 50% 10%;
  border-top-right-radius: 50% 10%;
}
.cabin:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #b40026, transparent);
  animation: bg 0.3s linear infinite alternate;
  z-index: 1;
  border-top-left-radius: 50% 10%;
  border-top-right-radius: 50% 10%;
}
@keyframes bg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
