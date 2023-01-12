<template>
  <Card color="blue">
    <form @submit.prevent="submit">
      <div class="container-acc flex">
        <div class="left-acc flex">
          <div class="cabin flex centered">
            <div class="arrows flex">
              <button
                v-for="category of categories"
                :key="category"
                type="button"
                :disabled="
                  data.items[category]
                    .map((item: any) => item.id)
                    .indexOf(data.look[category]) < 1
                "
                @click="emit('previousItem', category)"
              >
                <img
                  draggable="false"
                  alt="Puce"
                  height="30"
                  width="30"
                  src="@/assets/img/puce.svg"
                  @contextmenu.prevent
                >
              </button>
            </div>
            <div class="cabin-scene relative flex" tabindex="0">
              <Avatar
                :avatar="data.look.avatar"
                :emote="data.look.emote"
                :hat="data.look.hat"
                :body="data.look.body"
                :shoe="data.look.shoe"
                :item0="data.look.item0"
                :item1="data.look.item1"
                :item2="data.look.item2"
              />
              <div class="circle" />
            </div>
            <div class="arrows flex">
              <button
                v-for="category of categories"
                :key="category"
                type="button"
                :disabled="
                  data.items[category]
                    .map((item: any) => item.id)
                    .indexOf(data.look[category]) >
                    data.items[category].length - 2
                "
                @click="emit('nextItem', category)"
              >
                <img
                  draggable="false"
                  alt="Puce"
                  height="30"
                  width="30"
                  src="@/assets/img/puce.svg"
                  @contextmenu.prevent
                >
              </button>
            </div>
          </div>
          <br>
          <div class="gender">
            <button
              type="button"
              class="btn-pink"
              :class="{ active: data.gender === 'Chimbo' }"
              @mouseenter="gender = 'Chimbo'"
              @focus="gender = 'Chimbo'"
              @mouseleave="gender = data.gender"
              @blur="gender = data.gender"
              @click="emit('changeGender', gender)"
            >
              <img
                draggable="false"
                alt="Male gender"
                title="Male gender"
                src="@/assets/img/icon/gender/male.svg"
                @contextmenu.prevent
              >
            </button><button
              type="button"
              class="btn-pink"
              :class="{ active: data.gender === 'Chimbette' }"
              @mouseenter="gender = 'Chimbette'"
              @focus="gender = 'Chimbette'"
              @mouseleave="gender = data.gender"
              @blur="gender = data.gender"
              @click="emit('changeGender', gender)"
            >
              <img
                draggable="false"
                alt="Female gender"
                title="Female gender"
                src="@/assets/img/icon/gender/female.svg"
                @contextmenu.prevent
              >
            </button><button
              type="button"
              class="btn-pink"
              :class="{ active: data.gender === 'Chimbi' }"
              @mouseenter="gender = 'Chimbi'"
              @focus="gender = 'Chimbi'"
              @mouseleave="gender = data.gender"
              @blur="gender = data.gender"
              @click="emit('changeGender', gender)"
            >
              <img
                draggable="false"
                alt="Unknown gender"
                title="Unknown gender"
                src="@/assets/img/icon/gender/unknown.svg"
                @contextmenu.prevent
              >
            </button>
          </div>
          <br>
          <div class="gender">
            {{ gender }}
          </div>
        </div>
        <div class="right-acc flex">
          <div class="flex">
            <Button
              type="button"
              :class="{ active: profile }"
              :aria-label="$t('profile.profileSection')"
              @click="profile = !profile"
            >
              {{ $t("profile.profileSection") }}
            </Button><Button
              type="button"
              :class="{ active: !profile }"
              :aria-label="$t('profile.invSection')"
              @click="
                profile = !profile;
                loadInventory = true;
              "
            >
              {{ $t("profile.invSection") }}
            </Button>
          </div>
          <div v-show="profile" id="profile">
            <Emotes @emote="(emote: any) => emit('emote', emote)" />
            <br>
            <div class="left">
              <label
                for="motto"
                class="justified"
              >{{ $t("profile.motto") }}
                <input
                  id="motto"
                  minlength="0"
                  maxlength="200"
                  type="text"
                  :value="motto"
                  @input="
                    emit(
                      'update:motto',
                      ($event.target as InputHTMLAttributes).value
                    )
                  "
                >
              </label>
            </div>
            <div class="left">
              <label for="website">{{ $t("profile.website") }}

                <input
                  id="website"
                  minlength="0"
                  maxlength="100"
                  type="text"
                  :value="website"
                  @input="
                    emit(
                      'update:website',
                      ($event.target as InputHTMLAttributes).value
                    )
                  "
                >
              </label>
            </div>
            <div class="left">
              <label>{{ $t("profile.interests") }}
                <ol>
                  <li>
                    <input
                      id="interesta"
                      minlength="0"
                      maxlength="100"
                      type="text"
                      :value="centrea"
                      aria-label="Interest A"
                      @input="
                        emit(
                          'update:centrea',
                          ($event.target as InputHTMLAttributes).value
                        )
                      "
                    >
                  </li>
                  <li>
                    <input
                      id="interestb"
                      minlength="0"
                      maxlength="100"
                      type="text"
                      :value="centreb"
                      aria-label="Interest B"
                      @input="
                        emit(
                          'update:centreb',
                          ($event.target as InputHTMLAttributes).value
                        )
                      "
                    >
                  </li>
                  <li>
                    <input
                      id="interestc"
                      minlength="0"
                      maxlength="100"
                      type="text"
                      :value="centrec"
                      aria-label="Interest C"
                      @input="
                        emit(
                          'update:centrec',
                          ($event.target as InputHTMLAttributes).value
                        )
                      "
                    >
                  </li>
                  <li>
                    <input
                      id="interestd"
                      minlength="0"
                      maxlength="100"
                      type="text"
                      :value="centred"
                      aria-label="Interest D"
                      @input="
                        emit(
                          'update:centred',
                          ($event.target as InputHTMLAttributes).value
                        )
                      "
                    >
                  </li>
                </ol>
              </label>
            </div>
          </div>
          <div v-if="loadInventory" v-show="!profile" id="inventory">
            <div class="category-selection" @contextmenu.prevent>
              <button
                v-for="category of categories"
                :key="category"
                type="button"
                :class="{ active: checked.includes(category) }"
                class="item pointer"
                @click="
                  checked.includes(category) && checked.length === 1
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
              >
                <img
                  draggable="false"
                  :src="asset(`img/icon/item_category/${category}.svg`)"
                  :alt="category"
                  @contextmenu.prevent
                >
              </button>
            </div>
            <div class="chest">
              <div
                v-for="(category, name) of {
                  item0: checked.includes('item0') ? data.items.item0 : [],
                  hat: checked.includes('hat') ? data.items.hat : [],
                  item1: checked.includes('item1') ? data.items.item1 : [],
                  body: checked.includes('body') ? data.items.body : [],
                  item2: checked.includes('item2') ? data.items.item2 : [],
                  shoe: checked.includes('shoe') ? data.items.shoe : [],
                }"
                :key="name"
                class="category"
              >
                <button
                  v-for="item of category"
                  :key="item.id"
                  type="button"
                  class="item"
                  :class="[
                    name,
                    item.rarity,
                    data.look[name] === item.id ? 'active' : false,
                  ]"
                  @click="emit('updateItem', name, item.id)"
                  @mouseover="info = item.name"
                  @focus="info = item.name"
                >
                  <img
                    v-if="
                      item.id === 1 ||
                        item.id === 792 ||
                        item.id === 868 ||
                        item.id === 938
                    "
                    draggable="false"
                    alt="No item"
                    src="@/assets/img/icon/cross.svg"
                    @contextmenu.prevent
                  >
                  <VLazyImage
                    v-else
                    draggable="false"
                    :src="`/item/${name}/${item.id}.svg`"
                    :src-placeholder="asset('img/loading.svg')"
                    @contextmenu.prevent
                  />
                  <div class="quantity">
                    {{ item.nb }}
                  </div>
                </button>
              </div>
            </div>
            <div class="info">
              {{ info }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex centered">
        <Button
          color="green"
          type="submit"
          style="width: 150px"
        >
          <template #prepend>
            <img
              draggable="false"
              alt="Arrow icon"
              class="arrow green jitter"
              width="40"
              height="33"
              src="@/assets/img/arrow.svg"
              @contextmenu.prevent
            >
          </template>{{ $t("button.save") }}
        </Button><NuxtLink :to="`/book/${data.id}`" class="btn">
          <Button
            type="button"
            style="width: 150px"
          >
            <template #prepend>
              <img
                draggable="false"
                alt="Profile icon"
                width="24"
                height="24"
                src="@/assets/img/icon/profile.svg"
                @contextmenu.prevent
              >
            </template>{{ $t("button.card") }}
          </Button>
        </NuxtLink>
      </div>
    </form>
  </Card>
</template>
<script setup lang="ts">
import VLazyImage from 'v-lazy-image'
import { asset } from '@/utils'
import type { LookCategory } from '@/types/Item'
import type Emote from '@/types/Emotes'

const props = defineProps<{
  data: any;
  motto: string;
  website: string;
  centrea: string;
  centreb: string;
  centrec: string;
  centred: string;
}>()

const emit = defineEmits<{
  (e: 'previousItem', category: LookCategory): void;
  (e: 'nextItem', category: LookCategory): void;
  (e: 'changeGender', gender: 'Chimbo' | 'Chimbette' | 'Chimbi'): void;
  (e: 'emote', emote: Emote): void;
  (e: 'update:motto', value: string): void;
  (e: 'update:website', value: string): void;
  (e: 'update:centrea', value: string): void;
  (e: 'update:centreb', value: string): void;
  (e: 'update:centrec', value: string): void;
  (e: 'update:centred', value: string): void;
  (e: 'updateItem', category: LookCategory, id: number): void;
}>()

const categories: LookCategory[] = [
  'item0',
  'hat',
  'item1',
  'body',
  'item2',
  'shoe'
]
const profile = ref(true)
const loadInventory = ref(false)
const info = ref('')
const checked = ref(categories)
const gender = ref(props.data.gender)

function submit () {}
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

#profile label {
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
  z-index: 4;
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

.arrows button:nth-child(even) img {
  height: 30px;
  width: 30px;
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

.container-acc {
  flex-direction: column;
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
  background: linear-gradient(
    to bottom,
    var(--main-card-blue),
    var(--main-card)
  );
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
