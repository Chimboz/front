<template>
  <div :class="{ justified: justified }" :style="cssVars">
    <img
      draggable="false"
      @contextmenu.prevent
      alt="Card header"
      :width="width"
      :height="height"
      v-if="header"
      :src="require(`@/asset/img/card/header/${header}`)"
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
      <div class="card-bg" :style="this.bg ? inlineBg : {}">
        <h2>
          <slot name="header"></slot>
        </h2>
        <div style="text-align: center">
          <em v-if="$slots['subtitle']"
            >"<slot name="subtitle"></slot>"</em
          ></div
        >
        <br v-if="($slots['subtitle'] || $slots['header']) && $slots.default" />
        <main>
          <slot></slot>
        </main>
      </div>
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
    StrokeText
  },
  props: {
    // A header image, automatically prefixed by `/asset/img/card/header/`
    header: {
      required: false,
      type: String
    },
    // A background image, automatically prefixed by `/asset/img/card/background/`
    bg: {
      required: false,
      type: String
    },
    // Width of the header image
    width: {
      required: false,
      default: 468,
      type: Number
    },
    // Height of the header image
    height: {
      required: false,
      default: 77,
      type: Number
    },
    // Color of the card
    color: {
      required: false,
      // `"yellow"`, `"blue"`, `"lightblue"`, `"red"`
      type: String,
      validator(value) {
        return ["yellow", "blue", "lightblue", "red"].includes(value);
      }
    },
    // Whether the text is left aligned
    justified: {
      required: false,
      type: Boolean,
      default: false
    },
    // Display a default footer image
    bot: {
      required: false,
      type: Boolean,
      default: false
    },
    // Display a default header image
    top: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssVars() {
      switch (this.color) {
        case "yellow":
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
            "--dark-subtop-color": "#a38c47"
          };
        case "blue":
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
            "--dark-subtop-color": "#628499"
          };
        case "lightblue":
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
            "--dark-subtop-color": "#628499"
          };
        case "red":
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
            "--dark-subtop-color": "#628499"
          };
        default:
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
            "--dark-subtop-color": "#628499"
          };
      }
    },
    bgImage() {
      return require("@/asset/img/card/background/" + this.bg);
    },
    inlineBg() {
      return {
        backgroundImage: `url(${this.bgImage})`
      };
    }
  }
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

img + .card > .card-bg {
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
  text-align: left;
}

.bot {
  border-radius: 12px 12px 0 0;
  display: block;
  background-image: linear-gradient(
    to bottom,
    var(--light-card-color) 0px,
    var(--main-card-color) 12px,
    var(--main-card-color) 100%
  );
}

.bot .card-bg {
  padding-bottom: 5px;
  margin-bottom: 0;
}

.card h2 {
  color: var(--title-card-color);
  text-align: center;
}

main:after {
  content: "";
  clear: both;
  display: table;
}

.card-bg {
  background-repeat: repeat-x;
  padding: 17px;
  border-radius: 12px;
}
</style>
