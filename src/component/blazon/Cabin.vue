<template>
  <GlobalCard color="blue">
    <form @submit.prevent="submit">
      <div class="container-blz flex">
        <div class="left-blz flex">
          <div class="cabin flex centered">
            <div class="arrows flex">
              <button
                type="button"
                v-for="(category, name) of this.data.items"
                :key="name"
                :disabled="data.items[name].indexOf(data.blazon[name]) < 1"
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
            <Blazon
              :shape="data.blazon.shape"
              :top="data.blazon.top"
              :bot="data.blazon.bot"
              :primary="data.blazon.primary"
              :secondary="data.blazon.secondary"
            />
            <div class="arrows flex">
              <button
                type="button"
                v-for="(category, name) of this.data.items"
                :key="name"
                :disabled="
                  data.items[name].indexOf(data.blazon[name]) >
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
        </div>
        <div class="right-blz flex">
          <div id="inventory">
            <div class="category-selection" @contextmenu.prevent>
              <button
                type="button"
                v-for="(_, category) of data.items"
                :key="category"
                :class="{ active: checked.includes(category) }"
                @click="
                  checked.includes(category) && checked.length == 1
                    ? (checked = [
                        'shape',
                        'top',
                        'bot',
                        'primary',
                        'secondary'
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
                  shape: this.checked.includes('shape')
                    ? this.data.items.shape
                    : [],
                  top: this.checked.includes('top') ? this.data.items.top : [],
                  bot: this.checked.includes('bot') ? this.data.items.bot : [],
                  primary: this.checked.includes('primary')
                    ? this.data.items.primary
                    : [],
                  secondary: this.checked.includes('secondary')
                    ? this.data.items.secondary
                    : []
                }"
                :key="name"
              >
                <button
                  type="button"
                  class="item"
                  :class="{
                    active: this.data.blazon[name] == item
                  }"
                  v-for="item of category"
                  :key="item"
                  @click="$emit('updateItem', name, item)"
                  @mouseover="info = name + ' ' + item"
                >
                  <svg
                    v-if="name == 'primary'"
                    viewBox="0 0 69.2 67.75"
                    mlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :fill="item"
                      d="m11.047 23.264-.205.111c-2.724 1.441-5.707 2.628-8.95 3.56.032 5.3.912 9.332 2.64 12.098.773 1.25 1.72 2.242 2.843 2.973 1.07.7 2.294 1.165 3.672 1.398 6.337-1.176 9.39-6.666 9.156-16.468-3.454-.827-6.507-2.05-9.156-3.672zm-.205 1.972h.205l.017.016.032.016c2.13 1.303 4.583 2.284 7.36 2.941.18 7.863-2.246 12.303-7.28 13.32l-.018-.08-.062-.174.047.254-.112.032c-1.42-.244-2.639-.794-3.656-1.653l-.873-.875c-1.897-2.215-2.856-5.822-2.877-10.824 2.607-.752 5.012-1.744 7.217-2.973z"
                      transform="translate(0 -72.677) scale(3.14545)"
                    />
                  </svg>
                  <svg
                    v-else-if="name == 'secondary'"
                    viewBox="0 0 69.2 67.75"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :fill="item"
                      d="M34.1 6.7c-6.934 3.866-14.5 6.984-22.7 9.35.067 15.734 3.083 27.083 9.05 34.05l2.75 2.75c3.2 2.7 7.033 4.434 11.5 5.2l.35-.1-.15-.8.2.55.05.25c15.834-3.2 23.467-17.166 22.9-41.9C49.318 13.985 41.6 10.9 34.9 6.8l-.1-.05-.05-.05Z"
                    />
                  </svg>
                  <img
                    draggable="false"
                    @contextmenu.prevent
                    v-else-if="item == -1"
                    src="@/asset/img/icon/cross.svg"
                  />
                  <VLazyImage
                    draggable="false"
                    @contextmenu.prevent
                    v-else
                    :src="`/blazon/${name}/${item}.svg`"
                    :src-placeholder="require('@/asset/img/loading.svg')"
                  />
                </button>
              </div>
            </div>
            <div class="info">{{ this.info }}</div>
          </div>
        </div>
      </div>
    </form>
  </GlobalCard>
</template>
<script>
import Blazon from "@/component/blazon/Blazon.vue";
import VLazyImage from "v-lazy-image";

// @vuese
// @group Blazon
export default {
  name: "BlazonCabin",
  components: {
    Blazon,
    VLazyImage
  },
  data() {
    return {
      info: "",
      checked: ["shape", "top", "bot", "primary", "secondary"]
    };
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    }
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  }
};
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
