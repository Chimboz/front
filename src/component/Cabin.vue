<template>
  <Card blue>
    <form @submit.prevent="submit">
      <div class="container-acc flex">
        <div class="left-acc flex">
          <div class="cabin flex centered">
            <div class="arrows flex">
              <button
                type="button"
                v-for="(category, name) of this.data.items"
                :key="name"
                :disabled="data.items[name].indexOf(data.look[name]) < 1"
                @click="
                  dataMutated.look[name] = this.data.items[name][
                    data.items[name].indexOf(data.look[name]) - 1
                  ]
                "
              >
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Puce"
                  src="@/asset/img/puce.svg"
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
                type="button"
                v-for="(category, name) of this.data.items"
                :key="name"
                :disabled="
                  data.items[name].indexOf(data.look[name]) >
                    data.items[name].length - 2
                "
                @click="
                  dataMutated.look[name] = this.data.items[name][
                    data.items[name].indexOf(data.look[name]) + 1
                  ]
                "
              >
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Puce"
                  src="@/asset/img/puce.svg"
                />
              </button>
            </div>
          </div>
          <div class="controls">
            <div>
              <button type="button">
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Puce"
                  src="@/asset/img/puce.svg"
                  style="transform: rotate(-90deg)"
                  :class="{ pushed: up }"
                /></button
              ><br /><button type="button">
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Puce"
                  src="@/asset/img/puce.svg"
                  style="transform: scaleX(-1)"
                  :class="{ pushed: left }"
                /></button
              ><button type="button" id="random">
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Random button"
                  title="Randomize look"
                  src="@/asset/img/home/chaparadio/stop.svg"
                /></button
              ><button type="button">
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Puce"
                  src="@/asset/img/puce.svg"
                  :class="{ pushed: right }"
                /></button
              ><br /><button type="button">
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Puce"
                  src="@/asset/img/puce.svg"
                  :class="{ pushed: down }"
                  style="transform: rotate(-90deg) scaleX(-1)"
                />
              </button>
            </div>
          </div>
          <div class="gender">
            <button
              type="button"
              class="pink-icon"
              :class="{ active: data.gender == 'Chapato' }"
              @mouseenter="gender = 'Chapato'"
              @mouseleave="gender = data.gender"
              @click="dataMutated.gender = 'Chapato'"
            >
              <img
                draggable="false"
                @contextmenu.prevent
                alt="Male gender"
                title="Male gender"
                src="@/asset/img/icon/gender/male.svg"
              /></button
            ><button
              type="button"
              class="pink-icon"
              :class="{ active: data.gender == 'Chapata' }"
              @mouseenter="gender = 'Chapata'"
              @mouseleave="gender = data.gender"
              @click="dataMutated.gender = 'Chapata'"
            >
              <img
                draggable="false"
                @contextmenu.prevent
                alt="Female gender"
                title="Female gender"
                src="@/asset/img/icon/gender/female.svg"
              /></button
            ><button
              type="button"
              class="pink-icon"
              :class="{ active: data.gender == 'Chapati' }"
              @mouseenter="gender = 'Chapati'"
              @mouseleave="gender = data.gender"
              @click="dataMutated.gender = 'Chapati'"
            >
              <img
                draggable="false"
                @contextmenu.prevent
                alt="Unknown gender"
                title="Unknown gender"
                src="@/asset/img/icon/gender/unknown.svg"
              />
            </button>
          </div>
          <br />
          <div class="gender">{{ this.gender }}</div>
        </div>
        <div class="right-acc flex">
          <div class="nav-acc flex">
            <Button
              type="button"
              :class="{ active: profile }"
              @click="profile = true"
              >{{ $t("myAccount.profileSection") }}</Button
            ><Button
              type="button"
              :class="{ active: !profile }"
              @click="profile = false"
              >{{ $t("myAccount.invSection") }}</Button
            >
          </div>
          <div id="profile" v-if="profile">
            <Emotes />
            <br />
            <h3 class="justified">Ta phrase préférée</h3>
            <input
              minlength="0"
              maxlength="30"
              type="text"
              v-model="dataMutated.phrase_pref"
            />
            <h3 class="justified">Ta page perso</h3>
            <input
              minlength="0"
              maxlength="30"
              type="text"
              v-model="dataMutated.website"
            />
            <h3 class="justified">centres d'intéret</h3>
            <ol>
              <li>
                <input
                  minlength="0"
                  maxlength="30"
                  type="text"
                  v-model="dataMutated.centres[0]"
                />
              </li>
              <li>
                <input
                  minlength="0"
                  maxlength="30"
                  type="text"
                  v-model="dataMutated.centres[1]"
                />
              </li>
              <li>
                <input
                  minlength="0"
                  maxlength="30"
                  type="text"
                  v-model="dataMutated.centres[2]"
                />
              </li>
              <li>
                <input
                  minlength="0"
                  maxlength="30"
                  type="text"
                  v-model="dataMutated.centres[3]"
                />
              </li>
            </ol>
          </div>
          <div id="inventory" v-else>
            <div class="category-selection" @contextmenu.prevent>
              <button
                type="button"
                v-for="(_, category) of data.items"
                :key="category"
                :class="{ active: checked.includes(category) }"
                @click="
                  checked.includes(category) && checked.length == 1
                    ? (checked = [
                        'item0',
                        'hat',
                        'item1',
                        'body',
                        'item2',
                        'shoe',
                      ])
                    : (checked = [`${category}`])
                "
                @contextmenu.prevent="
                  checked.includes(category)
                    ? checked.splice(checked.indexOf(category), 1)
                    : checked.push(category)
                "
                class="item pointer"
              >
                <img
                  draggable="false"
                  @contextmenu.prevent
                  :src="
                    require(`@/asset/img/icon/item_category/${category}.svg`)
                  "
                />
              </button>
            </div>
            <div class="chest">
              <div
                class="category"
                v-for="(category, name) of {
                  item0: this.checked.includes('item0')
                    ? this.data.items.item0
                    : [],
                  hat: this.checked.includes('hat') ? this.data.items.hat : [],
                  item1: this.checked.includes('item1')
                    ? this.data.items.item1
                    : [],
                  body: this.checked.includes('body')
                    ? this.data.items.body
                    : [],
                  item2: this.checked.includes('item2')
                    ? this.data.items.item2
                    : [],
                  shoe: this.checked.includes('shoe')
                    ? this.data.items.shoe
                    : [],
                }"
                :key="name"
                :class="[name]"
              >
                <button
                  type="button"
                  class="item"
                  :class="{
                    active: this.data.look[name] == item,
                  }"
                  v-for="item of category"
                  :key="item"
                  @click="dataMutated.look[name] = item"
                  @mouseover="info = name + ' ' + item"
                >
                  <img
                    draggable="false"
                    @contextmenu.prevent
                    v-if="item == 1"
                    src="@/asset/img/icon/cross.svg"
                  />
                  <VLazyImage
                    draggable="false"
                    @contextmenu.prevent
                    v-else
                    :src="`/avatar/${name}/${item}.svg`"
                    :src-placeholder="require('@/asset/img/loading.svg')"
                  />
                </button>
              </div>
            </div>
            <div class="info">{{ this.info }}</div>
          </div>
        </div>
      </div>
      <div class="flex btn-menu">
        <Button green type="submit"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow green jitter"
              src="@/asset/img/arrow.svg"/></template
          >Sauver</Button
        ><router-link :to="`/member/${data.id}`">
          <Button type="button"
            ><template #prepend
              ><img
                draggable="false"
                @contextmenu.prevent
                alt="Profile icon"
                height="24"
                src="@/asset/img/icon/profile.svg"/></template
            >Fiche</Button
          ></router-link
        >
      </div>
    </form>
  </Card>
</template>
<script>
import Card from "@/component/Card.vue";
import Button from "@/component/Button.vue";
import Tiz from "@/component/Tiz.vue";
import Emotes from "@/component/Emotes.vue";
import VLazyImage from "v-lazy-image";

export default {
  name: "Cabin",
  components: {
    Card,
    Button,
    Tiz,
    Emotes,
    VLazyImage,
  },
  data() {
    return {
      profile: true,
      up: false,
      down: false,
      right: false,
      left: false,
      info: "",
      checked: ["item0", "hat", "item1", "body", "item2", "shoe"],
      gender: "Inconnu",
    };
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  computed: {
    dataMutated() {
      return this.data;
    },
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    },
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
  padding: 10px;
}

#profile input {
  width: 100%;
}

.nav-acc .btn {
  margin: 4px;
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
  transform: translate(-18.5px, -35px);
}

.body img {
  transform: translate(-22px, -24px);
}

.shoe img {
  transform: translate(-2px, 0px);
}

.item0 img {
  transform: translate(-4px, -11px);
}

.item1 img {
  transform: translate(-11px, -20px);
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

.item img[src*="cross"],
.item img[src*="loading"] {
  transform: translate(0px, 0px);
}

.item img[src*="loading"] {
  width: 100%;
}

.category-selection,
.chest {
  text-align: left;
}

.category-selection div {
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
