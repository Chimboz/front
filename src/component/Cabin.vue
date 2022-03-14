<template>
  <GlobalCard color="blue">
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
                @click="$emit('previousItem', name)"
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
              class="cabin-scene relative flex"
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
              <GlobalAvatar
                :avatar="data.look.avatar"
                :emote="data.look.emote"
                :hat="data.look.hat"
                :body="data.look.body"
                :shoe="data.look.shoe"
                :item0="data.look.item0"
                :item1="data.look.item1"
                :item2="data.look.item2"
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
                @click="$emit('nextItem', name)"
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
          <br />
          <div class="gender">
            <button
              type="button"
              class="btn-pink"
              :class="{ active: data.gender == 'Chimbo' }"
              @mouseenter="gender = 'Chimbo'"
              @mouseleave="gender = data.gender"
              @click="$emit('changeGender', gender)"
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
              class="btn-pink"
              :class="{ active: data.gender == 'Chimbette' }"
              @mouseenter="gender = 'Chimbette'"
              @mouseleave="gender = data.gender"
              @click="$emit('changeGender', gender)"
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
              class="btn-pink"
              :class="{ active: data.gender == 'Chimbi' }"
              @mouseenter="gender = 'Chimbi'"
              @mouseleave="gender = data.gender"
              @click="$emit('changeGender', gender)"
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
            <GlobalButton
              type="button"
              :class="{ active: profile }"
              @click="profile = !profile"
              >{{ $t("myAccount.profileSection") }}</GlobalButton
            ><GlobalButton
              type="button"
              :class="{ active: !profile }"
              @click="
                profile = !profile;
                loadInventory = true;
              "
              >{{ $t("myAccount.invSection") }}</GlobalButton
            >
          </div>
          <div id="profile" v-show="profile">
            <Emotes @emote="(emote) => $emit('emote', emote)" />
            <br />
            <h3 class="justified">Ta phrase préférée</h3>
            <input
              minlength="0"
              maxlength="200"
              type="text"
              :value="motto"
              @input="$emit('update:motto', $event.target.value)"
            />
            <h3 class="justified">Ta page perso</h3>
            <input
              minlength="0"
              maxlength="100"
              type="text"
              :value="website"
              @input="$emit('update:website', $event.target.value)"
            />
            <h3 class="justified">centres d'intéret</h3>
            <ol>
              <li>
                <input
                  minlength="0"
                  maxlength="100"
                  type="text"
                  :value="centrea"
                  @input="$emit('update:centrea', $event.target.value)"
                />
              </li>
              <li>
                <input
                  minlength="0"
                  maxlength="100"
                  type="text"
                  :value="centreb"
                  @input="$emit('update:centreb', $event.target.value)"
                />
              </li>
              <li>
                <input
                  minlength="0"
                  maxlength="100"
                  type="text"
                  :value="centrec"
                  @input="$emit('update:centrec', $event.target.value)"
                />
              </li>
              <li>
                <input
                  minlength="0"
                  maxlength="100"
                  type="text"
                  :value="centred"
                  @input="$emit('update:centred', $event.target.value)"
                />
              </li>
            </ol>
          </div>
          <div id="inventory" v-if="loadInventory" v-show="!profile">
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
              >
                <button
                  type="button"
                  class="item"
                  :class="[
                    name,
                    item.rarity,
                    this.data.look[name] == item.id ? 'active': false,
                  ]"
                  v-for="item of category"
                  :key="item.id"
                  @click="$emit('updateItem', name, item.id)"
                  @mouseover="info = item.name"
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
                    :src="`/avatar/${name}/${item.id}.svg`"
                    :src-placeholder="require('@/asset/img/loading.svg')"
                  />
                  <div class="quantity">{{ item.nb }}</div>
                </button>
              </div>
            </div>
            <div class="info">{{ this.info }}</div>
          </div>
        </div>
      </div>
      <div class="flex centered btn-menu">
        <GlobalButton color="green" type="submit" style="width: 150px"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow green jitter"
              src="@/asset/img/arrow.svg" /></template
          >Sauver</GlobalButton
        ><router-link :to="`/book/${data.id}`" class="btn">
          <GlobalButton type="button" style="width: 150px"
            ><template #prepend
              ><img
                draggable="false"
                @contextmenu.prevent
                alt="Profile icon"
                width="24"
                height="24"
                src="@/asset/img/icon/profile.svg" /></template
            >Fiche</GlobalButton
          ></router-link
        >
      </div>
    </form>
  </GlobalCard>
</template>
<script>
import Emotes from "@/component/core/Emotes.vue";
import VLazyImage from "v-lazy-image";

// @vuese
// @group Default
export default {
  name: "AvatarCabin",
  components: {
    Emotes,
    VLazyImage,
  },
  data() {
    return {
      profile: true,
      loadInventory: false,
      info: "",
      checked: ["item0", "hat", "item1", "body", "item2", "shoe"],
      gender: this.data.gender,
    };
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
    motto: { type: String },
    website: { type: String },
    centrea: { type: String },
    centreb: { type: String },
    centrec: { type: String },
    centred: { type: String },
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
input[type="text"] {
  text-align: center;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  color: var(--text);
  border: 2px solid;
  border-color: var(--blue) var(--dark-card-blue) var(--dark-card-blue)
    var(--blue);
  box-shadow: inset 1px 1px 2px var(--dark-card-blue);
  padding: var(--sm-gap) var(--md-gap);
  border-radius: calc(var(--border-radius) / 2);
  background: var(--light);
}

li::marker {
  font-family: "Chimboz Heavy";
  font-size: var(--lg-font-size);
  color: #2a5380;
}

.left-acc {
  flex-direction: column;
}

h3 {
  font-family: "Chimboz Heavy";
  font-weight: normal;
  color: var(--light);
  font-size: var(--lg-font-size);
}

.right-acc {
  flex-direction: column;
  width: 100%;
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
  height: 140px;
  width: 100px;
  align-items: flex-end;
  justify-content: center;
  margin: 0 -var(--gap);
}

.cabin {
  justify-content: center;
}

#profile,
#inventory {
  padding: 10px;
}

#profile input {
  width: 100%;
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
    var(--light),
    var(--light) 30%,
    #ff99cc 32%,
    #ff99cc 40%,
    var(--light) 42%,
    var(--light) 50%,
    #ff99cc 52%,
    #ff99cc 60%,
    var(--light) 62%
  );
  border-radius: 100%;
  position: absolute;
  animation: blink 0.3s infinite step-end;
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
      var(--light),
      var(--light) 30%,
      #ff99cc 32%,
      #ff99cc 40%,
      var(--light) 42%,
      var(--light) 50%,
      #ff99cc 52%,
      #ff99cc 60%,
      var(--light) 62%
    );
  }
  50% {
    background: radial-gradient(
      #ff99cc,
      #ff99cc 30%,
      var(--light) 32%,
      var(--light) 40%,
      #ff99cc 42%,
      #ff99cc 50%,
      var(--light) 52%,
      var(--light) 60%,
      #ff99cc 62%
    );
  }
}

// Chest
.chest {
  height: 180px;
  overflow-y: auto;
  resize: vertical;
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
  margin: calc(var(--sm-gap) / 2);
  position: relative;
  display: inline-block;
  background: linear-gradient(to bottom, var(--main-card-blue), var(--main-card));
  height: 40px;
  width: 40px;
  border-radius: var(--border-radius);
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

.quantity {
  pointer-events: none;
  position: absolute;
  color: var(--light);
  z-index: 1;
  bottom: 0;
  right: 0;
  padding: var(--sm-gap);
  border-radius: var(--gap);
  font-weight: bold;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  background-image: linear-gradient(
    to top,
    var(--selected-main-card),
    var(--selected-dark-card)
  );
}

.active .quantity {
  margin: 0 calc(-1 * var(--sm-gap)) calc(-1 * var(--sm-gap)) 0;
  background-image: linear-gradient(
    to bottom,
    var(--selected-main-card),
    var(--light)
  );
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
    var(--main-card) 51%,
    #e0f4fc
  );
  border: 2px solid var(--light);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 1px 2px #0005;
}

.item.active {
  border: 2px solid var(--light);
}

.item.active img {
  margin: -2px;
}

.gender {
  font-family: "Chimboz Heavy";
  color: var(--light);
  font-size: 15px;
}

ol {
  padding-inline-start: 0;
}
</style>
