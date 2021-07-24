<template>
  <Container v-if="data">
    <template #left-column
      ><Card blue top>
        <router-link to="/levels">
          <div class="level fullwidth">
            {{ $t("currentLevel") }}
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
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.link")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.internalMessagingLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.myGroupsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.myFriendsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Forum</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.notSmartLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;MajMin</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.shoppingLink")
            }}</router-link
          >
        </div></Card
      ><br />
      <Card yellow>
        <template #button>
          <Button yellow>{{ $t("credit.title") }}</Button>
        </template>
        <object
          type="image/svg+xml"
          :data="require('@/assets/img/bank.svg')"
          class="fullwidth"
        ></object>
        <router-link to="/bank">
          {{ $t("credit.youGot") }}<br />
          <AnimatedNumber :number="data.credits" /><br />
          {{ $t("credit") }} </router-link
        ><br /><br />
        <router-link to="/reflooz" class="btn-route"
          ><Button orange>Reflooz</Button></router-link
        ></Card
      ></template
    >
    <Card blue>
      <div class="left-acc">
        <div class="cabin">
          <div class="arrows">
            <button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" />
            </button>
          </div>
          <div
            class="cabin-scene"
            tabindex="0"
            @keydown.up="up = true"
            @keyup.up="up = false"
            @keydown.down="down = true"
            @keyup.down="down = false"
            @keydown.left="left = true"
            @keyup.left="left = false"
            @keydown.right="right = true"
            @keyup.right="right = false"
          >
            <Tiz style="width: 75%; z-index: 3; margin-bottom: 12px" />
            <div class="circle"></div>
          </div>
          <div class="arrows">
            <button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" /></button
            ><button>
              <img src="@/assets/img/arrow_sm.svg" />
            </button>
          </div>
        </div>
        <div class="controls">
          <div>
            <button>
              <img
                src="@/assets/img/arrow_sm.svg"
                style="transform: rotate(-90deg)"
                :class="{ pushed: up }"
              /></button
            ><br /><button>
              <img
                src="@/assets/img/arrow_sm.svg"
                style="transform: scaleX(-1)"
                :class="{ pushed: left }"
              /></button
            ><button id="random">
              <img src="@/assets/img/chaparadio/stop.svg" /></button
            ><button>
              <img
                src="@/assets/img/arrow_sm.svg"
                :class="{ pushed: right }"
              /></button
            ><br /><button>
              <img
                src="@/assets/img/arrow_sm.svg"
                :class="{ pushed: down }"
                style="transform: rotate(-90deg) scaleX(-1)"
              />
            </button>
          </div>
        </div>
        <!-- <div class="gender">
          <button><img src="@/assets/img/sex/male.svg" /></button
          ><button>
            <img src="@/assets/img/sex/female.svg" /></button
          ><button>
            <img src="@/assets/img/sex/unknown.svg" />
          </button>
        </div> -->
      </div>
    </Card>
    <template #right-column>
      <Card blue filename="fd_slot_mi_sky.gif"> </Card><br />
      <Card blue filename="fd_slot_forum_sky.gif"> </Card><br /><Card blue>
        <template #button>
          <Button>{{ $t("myAccount.friendsList") }}</Button>
        </template>
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
      up: false,
      down: false,
      right: false,
      left: false,
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

<style lang="scss">
.cabin-scene .tiz {
  position: relative;
  width: 100%;
}
</style>

<style lang="scss" scoped>
.left-acc {
  display: flex;
  width: 33%;
  flex-direction: column;
}

.controls button {
  display: contents;
}

.controls {
  perspective: 400px;
}

.controls div {
  transform: rotateX(45deg);
}

.controls img {
  margin: -2px 0;
  height: 28px;
}

#random {
  height: 28px;
  width: 28px;
  overflow: visible;
}

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

.cabin-scene {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-items: flex-end;
  margin: 0 -12px;
  height: 180px;
}

.cabin-scene:before {
  background: linear-gradient(to bottom, #240026, transparent);
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: bg 0.3s linear infinite 0.3s alternate;
  z-index: 2;
  border-top-left-radius: 50% 20%;
  border-top-right-radius: 50% 20%;
}
.cabin-scene:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #b40026, transparent);
  animation: opacity 0.3s linear infinite alternate;
  z-index: 1;
  border-top-left-radius: 50% 20%;
  border-top-right-radius: 50% 20%;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.arrows {
  display: flex;
  flex-direction: column;
  z-index: 3;
  justify-content: space-evenly;
}

.arrows {
  align-items: flex-start;
}

.arrows:last-child {
  align-items: flex-end;
}

.arrows:first-child img {
  transform: scaleX(-1);
}

button {
  background: none;
  border: 0;
}

.arrows button:nth-child(2n) img {
  height: 30px;
}

.arrows button:hover,
.controls button:hover img {
  filter: brightness(1.5);
}

.arrows button:active,
.controls button:active img,
.pushed {
  filter: brightness(0.9);
}

.cabin {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 100%;
  height: 20%;
  background: radial-gradient(
    #fff,
    #fff 30%,
    #ff99cc 32%,
    #ff99cc 40%,
    #fff 42%,
    #fff 50%,
    #ff99cc 52%,
    #ff99cc 60%,
    #fff 62%
  );
  border-radius: 100%;
  position: absolute;
  animation: blink 0.3s infinite;
  z-index: 2;
}

@keyframes blink {
  0% {
    background: radial-gradient(
      #fff,
      #fff 30%,
      #ff99cc 32%,
      #ff99cc 40%,
      #fff 42%,
      #fff 50%,
      #ff99cc 52%,
      #ff99cc 60%,
      #fff 62%
    );
  }
  50% {
    background: radial-gradient(
      #ff99cc,
      #ff99cc 30%,
      #fff 32%,
      #fff 40%,
      #ff99cc 42%,
      #ff99cc 50%,
      #fff 52%,
      #fff 60%,
      #ff99cc 62%
    );
  }
}
</style>
