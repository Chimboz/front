<template>
  <Card color="blue">
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
                :class="[name]"
              >
                <button
                  :style="{
                    background:
                      name == 'primary' || name == 'secondary' ? item : ''
                  }"
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
                  <img
                    v-if="name != 'primary' && name != 'secondary'"
                    draggable="false"
                    @contextmenu.prevent
                    :src="`/blazon/${name}/${item}.svg`"
                  />
                </button>
              </div>
            </div>
            <div class="info">{{ this.info }}</div>
          </div>
        </div>
      </div>
    </form>
  </Card>
</template>
<script>
import Card from "@/component/Card.vue";
import Blazon from "@/component/blazon/Blazon.vue";

export default {
  name: "Cabin",
  components: {
    Card,
    Blazon
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
    },
    motto: { type: String },
    website: { type: String },
    centrea: { type: String },
    centreb: { type: String },
    centrec: { type: String },
    centred: { type: String }
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    }
  }
};
</script>
<style lang="scss">
.blazon {
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
  max-height: 177px;
  overflow-y: auto;
}
.category {
  display: initial;
}

.top img {
  width: 100%;
}

.bot img {
  width: 100%;
  transform: translateX(3px);
}

.shape img {
  width: 100%;
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
