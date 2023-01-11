<template>
  <Card color="blue" :style="{ '--blazon-primary': data.blazon.primary, '--blazon-secondary': data.blazon.secondary }">
      <div class="container-blz flex">
        <div class="left-blz flex">
          <div class="cabin flex centered">
            <div class="arrows flex">
              <button
                v-for="category of categories"
                :key="category"
                type="button"
                :disabled="
                  data.items[category].indexOf(data.blazon[category]) < 1
                "
                @click="emit('previousItem', category)"
              >
                <img
                  draggable="false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                  @contextmenu.prevent
                />
              </button>
            </div>
            <Blazon
              :shape="data.blazon.shape"
              :top="data.blazon.top"
              :bot="data.blazon.bot"
              :primary="data.blazon.primary"
              :secondary="data.blazon.secondary"
            />
            <div class="arrows flex">
              <button
                v-for="category of categories"
                :key="category"
                type="button"
                :disabled="
                  data.items[category].indexOf(data.blazon[category]) >
                  data.items[category].length - 2
                "
                @click="emit('nextItem', category)"
              >
                <img
                  draggable="false"
                  alt="Puce"
                  src="@/assets/img/puce.svg"
                  @contextmenu.prevent
                />
              </button>
            </div>
          </div>
        </div>
        <div class="right-blz flex">
          <div id="inventory">
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
                        'shape',
                        'top',
                        'bot',
                        'primary',
                        'secondary',
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
                />
              </button>
            </div>
            <div class="chest">
              <div
                v-for="(category, name) of {
                  shape: checked.includes('shape') ? data.items.shape : [],
                  top: checked.includes('top') ? data.items.top : [],
                  bot: checked.includes('bot') ? data.items.bot : [],
                  primary: checked.includes('primary')
                    ? data.items.primary
                    : [],
                  secondary: checked.includes('secondary')
                    ? data.items.secondary
                    : [],
                }"
                :key="name"
                class="category"
              >
                <button
                  v-for="item of category"
                  :key="item"
                  type="button"
                  class="item"
                  :class="{
                    active: data.blazon[name] === item,
                  }"
                  @click="emit('updateItem', name, item)"
                  @mouseover="info = name + ' ' + item"
                  @focus="info = name + ' ' + item"
                >
                  <svg
                    v-if="name === 'primary' || name === 'secondary'"
                    viewBox="0 0 69.2 67.75"
                    mlns="http://www.w3.org/2000/svg"
                  >
                    <use :href="`/item/blazon/${name}/item.svg#root`" :fill="item"></use>
                  </svg>
                  <img
                    v-else-if="item === -1"
                    draggable="false"
                    alt="No item"
                    src="@/assets/img/icon/cross.svg"
                    @contextmenu.prevent
                  />
                  <svg @contextmenu.prevent :viewBox="viewBox(name)">
                    <use :href="`/item/blazon/${name}/${item}.svg#root`" fill="var(--blazon-primary)"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="info">{{ info }}</div>
          </div>
        </div>
      </div>
  </Card>
</template>
<script setup lang="ts">
import { asset } from "@/utils";
import type { BlazonCategory } from "@/types/Item";

defineProps<{
  data: any;
}>();

const emit = defineEmits<{
  (e: "previousItem", name: BlazonCategory): void;
  (e: "nextItem", name: BlazonCategory): void;
  (e: "updateItem", name: BlazonCategory, item: string | number): void;
}>();

const categories: BlazonCategory[] = [
  "shape",
  "top",
  "bot",
  "primary",
  "secondary",
];
const info = ref("");
const checked = ref(categories);

function viewBox(category){
  switch(category){
    case "shape":
      return "0 0 69.2 67.75"
    case "top":
      return "0 0 44.6 35.1"
    case "bot":
      return "0 0 44.45 27.6"
  }
}
</script>
<style lang="scss">
.cabin .blazon {
  transform: scale(1.5);
}
</style>
<style lang="scss" scoped>
.container-blz {
  flex-direction: column;
  align-items: center;
}

.left-blz {
  flex-direction: column;
  justify-content: center;
}

.right-blz {
  flex-direction: column;
  width: 100%;
}

.cabin {
  justify-content: center;
}

#inventory {
  padding: 10px;
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

@media (min-width: 800px) {
  .left-blz {
    width: 33%;
  }

  .right-blz {
    width: 67%;
  }

  .container-blz {
    flex-direction: row;
    align-items: inherit;
  }
}

// Chest
.chest {
  max-height: 200px;
  overflow-y: auto;
}
.category {
  display: initial;
}

.bot img {
  transform: translateX(3px);
}

.top img {
  transform: translateY(-3px);
}

.chest .item img {
  width: 100%;
}

.item {
  margin: 1px;
  display: inline-block;
  background: linear-gradient(to bottom, #85d1f1, var(--main-card));
  height: 40px;
  width: 40px;
  border-radius: var(--border-radius);
  overflow: hidden;
  vertical-align: middle;
}

.item img[src*="cross"],
.item img[src*="loading"] {
  transform: translate(0px, 0px);
  width: unset !important;
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

.item.active img,
.item.active svg {
  margin: -2px;
}

.chest .item.active img,
.chest .item.active svg {
  width: calc(100% + 4px);
}

.gender {
  font-family: "Chimboz Heavy";
  color: var(--light);
  font-size: 15px;
}
</style>
