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
import StrokeText from "@/component/core/StrokeText.vue";

// @vuese
// @group Core/Global
export default {
  name: "GlobalCard",
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
            "--selected-light-card-color": "var(--light-card-yellow-color)",
            "--selected-main-card-color": "var(--main-card-yellow-color)",
            "--selected-dark-card-color": "var(--dark-card-yellow-color)",
            "--selected-title-color": "var(--title-yellow-color)",
          };
        case "blue":
          return {
            "--selected-light-card-color": "var(--light-card-blue-color)",
            "--selected-main-card-color": "var(--main-card-blue-color)",
            "--selected-dark-card-color": "var(--dark-card-blue-color)",
            "--selected-title-color": "var(--title-blue-color)",
          };
        case "lightblue":
          return {
            "--selected-light-card-color": "var(--light-card-lightblue-color)",
            "--selected-main-card-color": "var(--main-card-lightblue-color)",
            "--selected-dark-card-color": "var(--dark-card-lightblue-color)",
            "--selected-title-color": "var(--title-lightblue-color)",
          };
        case "red":
          return {
            "--selected-light-card-color": "var(--light-card-red-color)",
            "--selected-main-card-color": "var(--main-card-red-color)",
            "--selected-dark-card-color": "var(--dark-card-red-color)",
            "--selected-title-color": "var(--title-red-color)",
          };
        default:
          return {
            "--selected-light-card-color": "var(--light-card-color)",
            "--selected-main-card-color": "var(--main-card-color)",
            "--selected-dark-card-color": "var(--dark-card-color)",
            "--selected-title-color": "var(--title-color)",
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
  width: calc(100% + 32px) !important;
  margin-left: -16px;
}
</style>
<style lang="scss" scoped>
.card {
  border-radius: 12px;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: var(--light-blue);
  background-image: linear-gradient(
    to bottom,
    var(--selected-light-card-color) 0px,
    var(--selected-main-card-color) 12px,
    var(--selected-main-card-color) calc(100% - 12px),
    var(--selected-dark-card-color) 100%
  );
  box-shadow: 0 1px var(--dark);
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
    var(--selected-main-card-color) 0px,
    var(--selected-main-card-color) calc(100% - 12px),
    var(--selected-dark-card-color) 100%
  );
}

.card-btn {
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 50%,
    var(--selected-main-card-color) 50%
  );
}

img + .card > .card-bg {
  padding-top: 5px;
}

.subtop {
  color: var(--light);
  border-top: 1px solid;
  padding-left: 25px;
  font-family: "Chimboz Heavy";
  font-size: var(--lg-font-size);
  line-height: 12px;
  text-align: left;
  height: 25px;
  border-radius: 12px 12px 0 0;
  border-color: var(--dark);
  box-shadow: 0 -1px var(--dark);
  background: var(--selected-dark-card-color);
  stroke: var(--selected-title-color);
  fill: var(--light);
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
    var(--selected-light-card-color) 0px,
    var(--selected-main-card-color) 12px,
    var(--selected-main-card-color) 100%
  );
}

.bot .card-bg {
  padding-bottom: 5px;
  margin-bottom: 0;
}

.card h2 {
  color: var(--selected-title-color);
  text-align: center;
}

main:after {
  content: "";
  clear: both;
  display: table;
}

.card-bg {
  background-repeat: repeat-x;
  padding: 16px;
  border-radius: 12px;
}
</style>
