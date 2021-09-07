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
            </div></div></router-link
        ><br />
        <div class="flex col fullwidth">
          <SideNavEntries></SideNavEntries></div></Card
      ><br />
      <Bank :credits="data.credits"
    /></template>
    <Card blue>
      <div class="container-acc flex">
        <div class="left-acc flex">
          <div class="cabin flex centered">
            <div class="arrows flex">
              <button
                v-for="(category, name) of this.data.items"
                :key="name"
                :disabled="data.items[name].indexOf(data.look[name]) < 1"
                @click="
                  data.look[name] =
                    this.data.items[name][
                      data.items[name].indexOf(data.look[name]) - 1
                    ]
                "
              >
                <img
                  draggable="false"
                  oncontextmenu="return false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                />
              </button>
            </div>
            <div
              class="cabin-scene flex"
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
              <Tiz
                :avatar="data.look.avatar"
                :emote="data.look.emote"
                :hat="data.look.hat"
                :body="data.look.body"
                :shoe="data.look.shoe"
                :item0="data.look.item0"
                :item1="data.look.item1"
                :item2="data.look.item2"
                :up="up"
                :down="down"
                :left="left"
                :right="right"
              />
              <div class="circle"></div>
            </div>
            <div class="arrows flex">
              <button
                v-for="(category, name) of this.data.items"
                :key="name"
                :disabled="
                  data.items[name].indexOf(data.look[name]) >
                  data.items[name].length - 2
                "
                @click="
                  data.look[name] =
                    this.data.items[name][
                      data.items[name].indexOf(data.look[name]) + 1
                    ]
                "
              >
                <img
                  draggable="false"
                  oncontextmenu="return false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                />
              </button>
            </div>
          </div>
          <div class="controls">
            <div>
              <button>
                <img
                  draggable="false"
                  oncontextmenu="return false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                  style="transform: rotate(-90deg)"
                  :class="{ pushed: up }"
                /></button
              ><br /><button>
                <img
                  draggable="false"
                  oncontextmenu="return false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                  style="transform: scaleX(-1)"
                  :class="{ pushed: left }"
                /></button
              ><button id="random">
                <img
                  draggable="false"
                  oncontextmenu="return false"
                  alt="Random button"
                  title="Randomize look"
                  src="@/assets/img/home/chaparadio/stop.svg"
                /></button
              ><button>
                <img
                  draggable="false"
                  oncontextmenu="return false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                  :class="{ pushed: right }"
                /></button
              ><br /><button>
                <img
                  draggable="false"
                  oncontextmenu="return false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                  :class="{ pushed: down }"
                  style="transform: rotate(-90deg) scaleX(-1)"
                />
              </button>
            </div>
          </div>
          <div class="gender">
            <button
              @mouseenter="this.gender = 'Chimbo'"
              @mouseleave="this.gender = this.data.gender"
              @click="this.data.gender = 'Chimbo'"
            >
              <img
                draggable="false"
                oncontextmenu="return false"
                alt="Male gender"
                title="Male gender"
                src="@/assets/img/sex/male.svg"
              /></button
            ><button
              @mouseenter="this.gender = 'Chimbette'"
              @mouseleave="this.gender = this.data.gender"
              @click="this.data.gender = 'Chimbette'"
            >
              <img
                draggable="false"
                oncontextmenu="return false"
                alt="Female gender"
                title="Female gender"
                src="@/assets/img/sex/female.svg"
              /></button
            ><button
              @mouseenter="this.gender = 'Inconnu'"
              @mouseleave="this.gender = this.data.gender"
              @click="this.data.gender = 'Inconnu'"
            >
              <img
                draggable="false"
                oncontextmenu="return false"
                alt="Unknown gender"
                title="Unknown gender"
                src="@/assets/img/sex/unknown.svg"
              />
            </button>
          </div>
          <br />
          <div class="gender">{{ this.gender }}</div>
        </div>
        <div class="right-acc flex">
          <div class="nav-acc flex">
            <Button :class="{ active: profile }" @click="profile = true">{{
              $t("myAccount.profileSection")
            }}</Button
            ><Button :class="{ active: !profile }" @click="profile = false">{{
              $t("myAccount.invSection")
            }}</Button>
          </div>
          <div id="profile" :class="{ active: profile }">
            <Emotes />
            <br />
            <h3 class="justified">Ta phrase préférée</h3>
            <input type="text" v-model="data.phrase_pref" />
            <h3 class="justified">Ta page perso</h3>
            <input type="text" v-model="data.website" />
            <h3 class="justified">centres d'intéret</h3>
            <ol>
              <li><input type="text" v-model="data.centres[0]" /></li>
              <li><input type="text" v-model="data.centres[1]" /></li>
              <li><input type="text" v-model="data.centres[2]" /></li>
              <li><input type="text" v-model="data.centres[3]" /></li>
            </ol>
          </div>
          <div id="inventory" :class="{ active: !profile }">
            <div class="category-selection">
              <button
                v-for="(_, category) of this.data.items"
                :key="category"
                class="item"
                :class="{ active: this.chest[category] }"
                @click="
                  this.chest[category] && Object.keys(this.chest).length == 1
                    ? (this.chest = this.data.items)
                    : (this.chest = { [category]: this.data.items[category] })
                "
              >
                <img :src="require(`@/assets/img/icons/${category}.svg`)" />
              </button>
            </div>
            <div class="chest">
              <div
                class="category"
                v-for="(category, name) of this.chest"
                :key="name"
                :class="[name]"
              >
                <button
                  class="item"
                  :class="{
                    active: this.data.look[name] == item
                  }"
                  v-for="item of category"
                  :key="item"
                  @click="this.data.look[name] = item"
                  @mouseover="this.info = name + ' ' + item"
                >
                  <img v-if="item == 1" src="@/assets/img/icons/cross.svg" />
                  <img v-else :src="`/avatar/${name}/${item}.svg`" />
                </button>
              </div>
            </div>
            <div class="info">{{ this.info }}</div>
          </div>
        </div>
      </div>
      <div class="flex btn-menu">
        <Button green
          ><template #prepend
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Arrow icon"
              class="arrow jitter"
              src="@/assets/img/arrow.svg" /></template
          >Sauver</Button
        ><Button>Fiche</Button>
      </div>
    </Card>
    <template #right-column>
      <Card blue filename="messages.gif"> </Card><br />
      <Card blue filename="forum.gif"> </Card><br /><Card blue>
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.friendsList") }}</Button>
        </template>
      </Card>
      <br />
      <Card blue>
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.groupsList") }}</Button>
        </template>
      </Card>
    </template>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import Tiz from "@/components/Tiz.vue";
import Emotes from "@/components/Emotes.vue";
import Bank from "@/components/Bank.vue";
import Container from "@/components/Container.vue";
import SideNavEntries from "@/components/SideNavEntries.vue";

export default {
  name: "Account",
  components: {
    Card,
    Button,
    Bank,
    Container,
    Tiz,
    Emotes,
    SideNavEntries,
  },
  data() {
    return {
      profile: true,
      up: false,
      down: false,
      right: false,
      left: false,
      data: null,
      error: null,
      loading: true,
      info: "",
      chest: {},
      gender: "Inconnu",
    };
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/profile.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.chest = res.data.items;
            vm.gender = res.data.gender;
            vm.loading = false;
          } else {
            next("/");
          }
        })
        .catch((error) => {
          vm.error = error.toString();
        });
    });
  },
  async beforeRouteUpdate() {
    this.axios
      .get("/api/profile.json")
      .then((res) => {
        this.data = res.data;
        this.chest = res.data.items;
        this.gender = res.data.gender;
        this.loading = false;
      })
      .catch((error) => (this.error = error.toString()));
  },
};
</script>

<style lang="scss">
.cabin-scene .tiz {
  position: relative;
  z-index: 3;
  margin-bottom: 25px;
  transform: scale(1.8);
}
</style>

<style lang="scss" scoped>
.container-acc {
  flex-direction: column;
  align-items: center;
}

input[type="text"] {
  text-align: center;
  font-family: "Pixelated Verdana 10";
  font-weight: bold;
  font-size: 10px;
  color: #2a5380;
  border: 2px solid;
  border-color: #369 #39c #39c #369;
  box-shadow: inset 1px 1px 2px #3699;
  padding: 2px 6px;
  border-radius: 6px;
  background: #c8deef;
}

li::marker {
  font-family: "Chimboz Heavy";
  font-size: 18px;
  color: #2a5380;
}

.left-acc {
  flex-direction: column;
}

.btn-menu .btn {
  margin: 4px;
}

h3 {
  font-family: "Chimboz Heavy";
  font-weight: normal;
  color: #fff;
  font-size: 18px;
}

.right-acc {
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

.cabin-scene {
  position: relative;
  height: 140px;
  width: 100px;
  align-items: flex-end;
  justify-content: center;
  margin: 0 -12px;
}

#profile,
#inventory {
  display: none;
  padding: 10px;
}

#profile input {
  width: 100%;
}

#profile.active,
#inventory.active {
  display: unset;
}

.nav-acc .active {
  color: red;
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
  border-radius: 50%/20%;
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
  border-radius: 50%/20%;
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
  flex-direction: column;
  z-index: 3;
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

@media (min-width: 800px) {
  .left-acc {
    width: 33%;
  }

  .right-acc {
    width: 67%;
  }

  .container-acc {
    flex-direction: row;
    align-items: inherit;
  }
}

.arrow {
  filter: hue-rotate(135deg) saturate(1.5) !important;
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

// Chest
.chest {
  max-height: 177px;
  overflow-y: auto;
}
.category {
  display: initial;
}

.hat img {
  transform: translate(-19px, -35px);
}

.body img {
  transform: translate(-21px, -24px);
}

.item0 img {
  transform: translate(-3px, -12px);
}

.item1 img {
  transform: translate(-12px, -20px);
}

.item2 img {
  transform: translate(-11px, -58px);
}

.item {
  margin: 1px;
  display: inline-block;
  background: linear-gradient(to bottom, #85d1f1, #a7dbfc);
  height: 40px;
  width: 40px;
  border-radius: 12px;
  overflow: hidden;
  vertical-align: middle;
}

.item img[src*="cross"] {
  transform: translate(0px, 0px);
}

.category-selection,
.chest {
  text-align: left;
}

.category-selection .item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.category-selection .item.active img {
  filter: brightness(9);
}

.info {
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  width: 100%;
  height: 50px;
  background: radial-gradient(
    ellipse 200% 200% at -5% 0%,
    #dbf0fd,
    #dbf0fd 49%,
    #a7dbfc 51%,
    #e0f4fc
  );
  border: 2px solid #fff;
  border-radius: 12px;
  box-shadow: 0 2px 1px 2px #0005;
}

.item.active {
  border: 2px solid #fff;
}

.item.active img {
  margin: -2px;
}

.gender {
  font-family: "Chimboz Heavy";
  color: #fff;
  font-size: 15px;
}
</style>
