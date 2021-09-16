<template>
  <div :class="{ justified: justified }" :style="cssVars">
    <img
      draggable="false"
      @contextmenu.prevent
      alt="Card header"
            width="468"
      height="77"
      v-if="filename"
      :src="require(`@/asset/img/card/header/${filename}`)"
    />
    <img
      draggable="false"
      @contextmenu.prevent
      alt="Card header"
      v-else-if="top"
      src="@/asset/img/card/header/default.gif"
      width="154"
      height="42"
    />
    <div v-else-if="$slots['subtop']" class="subtop flex centered">
      <StrokeText style="transform: translateX(-40%)"
        ><slot name="subtop"></slot
      ></StrokeText>
    </div>
    <div v-if="$slots['button']" class="card-btn">
      <slot name="button"></slot>
    </div>
    <div class="card" :class="{ bot: bot }">
      <h2>
        <slot name="header"></slot>
      </h2>
      <em v-if="$slots['subtitle']" style="text-align:center"
        >"<slot name="subtitle"></slot>"</em
      >
      <br v-if="$slots['subtitle'] && $slots.default" />
      <br v-if="$slots['header'] && $slots.default" />
      <main>
        <slot></slot>
        <div style="clear:both"></div>
      </main>
    </div>
    <img
      draggable="false"
      @contextmenu.prevent
      alt="Card footer"
      v-if="bot"
      src="@/asset/img/card/footer/default.gif"
      width="154"
      height="44"
    />
  </div>
</template>

<script>
import StrokeText from "@/component/StrokeText.vue";

export default {
  name: "Card",
  components: {
    StrokeText,
  },
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
    lightblue: {
      required: false,
      type: Boolean,
      default: false,
    },
    red: {
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
      if (this.yellow)
        return {
          "--light-card-color": "#fff",
          "--main-card-color": "#fff4d5",
          "--dark-card-color": "#ddcb9b",
          "--shadow-card-color": "#5c341f",
          "--title-card-color": "#726338",
          "--title-subtop-color": "#963d00",
          "--shadow-subtop-color": "#a38c47",
          "--light-subtop-color": "#fff7d7",
          "--main-subtop-color": "#ffe5a3",
          "--dark-subtop-color": "#a38c47",
        };
      if (this.blue)
        return {
          "--light-card-color": "#aadcfc",
          "--main-card-color": "#6ebef0",
          "--dark-card-color": "#5aa1cd",
          "--shadow-card-color": "#355668",
          "--title-card-color": "#096EA8",
          "--title-subtop-color": "#004b7d",
          "--shadow-subtop-color": "#1b4166",
          "--light-subtop-color": "#c4e8ff",
          "--main-subtop-color": "#99cdef",
          "--dark-subtop-color": "#628499",
        };
      if (this.lightblue)
        return {
          "--light-card-color": "#aadcfc",
          "--main-card-color": "#a4c4e3",
          "--dark-card-color": "#5aa1cd",
          "--shadow-card-color": "#355668",
          "--title-card-color": "#096EA8",
          "--title-subtop-color": "#004b7d",
          "--shadow-subtop-color": "#1b4166",
          "--light-subtop-color": "#c4e8ff",
          "--main-subtop-color": "#99cdef",
          "--dark-subtop-color": "#628499",
        };
      if (this.red)
        return {
          "--light-card-color": "#ff9e9e",
          "--main-card-color": "#FF5454",
          "--dark-card-color": "#e00c0c",
          "--shadow-card-color": "#5078a0",
          "--title-card-color": "#096EA8",
          "--title-subtop-color": "#004b7d",
          "--shadow-subtop-color": "#1b4166",
          "--light-subtop-color": "#c4e8ff",
          "--main-subtop-color": "#99cdef",
          "--dark-subtop-color": "#628499",
        };
      return {
        "--light-card-color": "#f2f8fc",
        "--main-card-color": "#d5e6f3",
        "--dark-card-color": "#a5cbe9",
        "--shadow-card-color": "#18486a",
        "--title-card-color": "#004e84",
        "--title-subtop-color": "#004b7d",
        "--shadow-subtop-color": "#1b4166",
        "--light-subtop-color": "#c4e8ff",
        "--main-subtop-color": "#99cdef",
        "--dark-subtop-color": "#628499",
      };
    },
  },
};
</script>
<style lang="scss">
.fullwidth {
  width: calc(100% + 34px) !important;
  margin-left: -17px;
}
</style>
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
    var(--main-card-color) calc(100% - 12px),
    var(--dark-card-color) 100%
  );
  box-shadow: 0 1px var(--shadow-card-color);
}

img {
  display: block;
  width: 100%;
}

img + .card,
.subtop + .card,
.card-btn + .card {
  border-radius: 0 0 12px 12px;
  display: inline-block;
  background-image: linear-gradient(
    to bottom,
    var(--main-card-color) 0px,
    var(--main-card-color) calc(100% - 12px),
    var(--dark-card-color) 100%
  );
}

.card-btn {
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 50%,
    var(--main-card-color) 50%
  );
}

img + .card {
  padding-top: 5px;
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
  stroke: var(--title-subtop-color);
  fill: #fff;
  stroke-width: 3;
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
  color: var(--title-card-color);
  text-align: center;
}
</style>
