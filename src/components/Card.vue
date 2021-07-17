<template>
  <div :class="{ justified: justified }" :style="cssVars">
    <img v-if="filename" :src="require(`@/assets/img/${filename}`)" />
    <img v-if="top" src="@/assets/img/menul_top_blu.gif" />
    <div v-else-if="$slots['subtop']" class="subtop">
      <slot name="subtop"></slot>
    </div>
    <div class="card" :class="{ bot: bot }">
      <h2>
        <slot name="header"></slot>
      </h2>
      <em v-if="$slots['subtitle']">"<slot name="subtitle"></slot>"</em>
      <br v-if="$slots['subtitle'] && $slots.default" />
      <br v-if="$slots['header'] && $slots.default" />
      <main>
        <slot></slot>
      </main>
    </div>
    <img v-if="bot" src="@/assets/img/footg_blu_ext.gif" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    filename: {
      required: false,
      type: String,
    },
    yellow: {
      required: false,
      type: Boolean,
      default: false,
    },
    blue: {
      required: false,
      type: Boolean,
      default: false,
    },
    justified: {
      required: false,
      type: Boolean,
      default: false,
    },
    bot: {
      required: false,
      type: Boolean,
      default: false,
    },
    top: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssVars() {
      return {
        "--light-card-color": this.yellow?"#fff":this.blue?"#aadcfc":"#f2f8fc",
        "--main-card-color": this.yellow?"#fff4d5":this.blue?"#6ebef0":"#d5e6f3",
        "--dark-card-color": this.yellow?"#ddcb9b":this.blue?"#5aa1cd":"#a5cbe9",
        "--shadow-card-color": this.yellow?"#5c341f":this.blue?"#355668":"#18486a",
        "--title-card-color": this.yellow?"#726338":this.blue?"#096EA8":"#004e84",
        "--title-subtop-color": this.yellow?"#963d00":this.blue?"#004b7d":"#004b7d",
        "--shadow-subtop-color": this.yellow?"#a38c47":this.blue?"#1b4166":"#1b4166",
        "--light-subtop-color": this.yellow?"#fff7d7":this.blue?"#c4e8ff":"#c4e8ff",
        "--main-subtop-color": this.yellow?"#ffe5a3":this.blue?"#99cdef":"#99cdef",
        "--dark-subtop-color": this.yellow?"#a38c47":this.blue?"#628499":"#628499",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  width: 100%;
  padding: 17px;
  height: auto;
  text-align: center;
  background-color: #d5e6f3;
  background-image: linear-gradient(
    to bottom,
    var(--light-card-color) 0px,
    var(--main-card-color) 12px,
    var(--main-card-color)  calc(100% - 12px),
    var(--dark-card-color) 100%
  );
  box-shadow: 0 1px var(--shadow-card-color);
}

img {
  display: block;
  width: 100%;
}

img + .card,
.subtop + .card {
  border-radius: 0 0 12px 12px;
  display: inline-block;
  background-image: linear-gradient(
    to bottom,
    var(--main-card-color)  0px,
    var(--main-card-color)  calc(100% - 12px),
    var(--dark-card-color) 100%
  );
}

.subtop {
  color: #fff;
  border-top: 1px solid;
  padding-left: 25px;
  font-family: "Chimboz Heavy";
  font-size: 18px;
  line-height: 12px;
  text-align: left;
  height: 25px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  border-color: var(--shadow-subtop-color);
  box-shadow: 0 -1px var(--shadow-card-color);
  background-image: linear-gradient(
    to bottom,
    var(--shadow-subtop-color) 0px,
    var(--light-subtop-color) 3px,
    var(--main-subtop-color) 5px,
    var(--main-subtop-color) calc(100% - 3px),
    var(--dark-subtop-color) 100%
  );
  text-shadow: 2px 0 0 var(--title-subtop-color), -2px 0 0 var(--title-subtop-color), 0 2px 0 var(--title-subtop-color),
    0 -2px 0 var(--title-subtop-color), 1px 1px var(--title-subtop-color), -1px -1px 0 var(--title-subtop-color), 1px -1px 0 var(--title-subtop-color),
    -1px 1px 0 var(--title-subtop-color);
}

.justified .card {
  text-align: justify;
}

.bot {
  border-radius: 12px 12px 0 0;
  display: block;
  padding-bottom: 5px;
  background-image: linear-gradient(
    to bottom,
    var(--light-card-color) 0px,
    var(--main-card-color) 12px,
    var(--main-card-color) 100%
  );
}

.card h2 {
  color: var(--title-card-color)
}
</style>