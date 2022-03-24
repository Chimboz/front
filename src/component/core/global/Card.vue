<template>
  <div :class="{ justified: justified }" :style="cssVars">
    <img
      draggable="false"
      @contextmenu.prevent
      alt="Card header"
      class="card-header"
      :width="width"
      :height="height"
      v-if="header"
      :src="require(`@/asset/img/card/header/${header}`)"
    />
    <img
      draggable="false"
      @contextmenu.prevent
      alt="Card header"
      class="card-header"
      v-else-if="top"
      src="@/asset/img/card/header/default.webp"
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
          <em v-if="$slots['subtitle']">"<slot name="subtitle"></slot>"</em>
        </div>
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
    StrokeText,
  },
  props: {
    // A header image, automatically prefixed by `/asset/img/card/header/`
    header: {
      required: false,
      type: String,
    },
    // A background image, automatically prefixed by `/asset/img/card/background/`
    bg: {
      required: false,
      type: String,
    },
    // Width of the header image
    width: {
      required: false,
      default: 468,
      type: Number,
    },
    // Height of the header image
    height: {
      required: false,
      default: 77,
      type: Number,
    },
    // Color of the card
    color: {
      required: false,
      // `"yellow"`, `"blue"`, `"red"`
      type: String,
      validator(value) {
        return ["yellow", "blue", "red"].includes(value);
      },
    },
    // Whether the text is left aligned
    justified: {
      required: false,
      type: Boolean,
      default: false,
    },
    // Display a default footer image
    bot: {
      required: false,
      type: Boolean,
      default: false,
    },
    // Display a default header image
    top: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssVars() {
      switch (this.color) {
        case "yellow":
          return {
            "--selected-main-card": "var(--main-card-yellow)",
            "--selected-dark-card": "var(--dark-card-yellow)",
            "--selected-title-card": "var(--title-card-yellow)",
          };
        case "blue":
          return {
            "--selected-main-card": "var(--main-card-blue)",
            "--selected-dark-card": "var(--dark-card-blue)",
            "--selected-title-card": "var(--title-card-blue)",
          };
        case "red":
          return {
            "--selected-main-card": "var(--main-card-red)",
            "--selected-dark-card": "var(--dark-card-red)",
            "--selected-title-card": "var(--title-card-red)",
          };
        default:
          return {
            "--selected-main-card": "var(--main-card)",
            "--selected-dark-card": "var(--dark-card)",
            "--selected-title-card": "var(--title-card)",
          };
      }
    },
    bgImage() {
      return require("@/asset/img/card/background/" + this.bg);
    },
    inlineBg() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    var(--light) 0px,
    var(--selected-main-card) var(--border-radius),
    var(--selected-main-card) calc(100% - var(--border-radius)),
    var(--selected-dark-card) 100%
  );
  box-shadow: 0 1px var(--dark);
}

.card-header {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  width: 100%;
  height: auto;
}

img + .card,
.subtop + .card,
.card-btn + .card {
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background-image: linear-gradient(
    to bottom,
    var(--selected-main-card) 0px,
    var(--selected-main-card) calc(100% - var(--border-radius)),
    var(--selected-dark-card) 100%
  );
}

.card-btn {
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 50%,
    var(--selected-main-card) 50%
  );
}

img + .card > .card-bg {
  padding-top: var(--md-gap);
}

.subtop {
  color: var(--light);
  border-top: 1px solid;
  padding-left: calc(2 * var(--gap));
  font-family: "Chimboz Heavy";
  font-size: var(--lg-font-size);
  height: calc(var(--gap) * 2);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  border-color: var(--dark);
  box-shadow: 0 -1px var(--dark);
  background: var(--selected-dark-card);
  background-image: linear-gradient(
    to bottom,
    var(--selected-dark-card) 0px,
    var(--light) 3px,
    var(--selected-dark-card) 5px,
    var(--selected-dark-card) calc(100% - 3px),
    var(--selected-title-card) 100%
  );
  stroke: var(--selected-title-card);
  fill: var(--text-button);
  stroke-width: 3;
}

.card h2 {
  color: var(--selected-title-card);
  text-align: center;
}

.card-bg {
  background-repeat: repeat-x;
  padding: var(--gap);
  border-radius: var(--border-radius);
}

.justified .card {
  text-align: left;
}

.bot {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  display: block;
  background-image: linear-gradient(
    to bottom,
    var(--light) 0px,
    var(--selected-main-card) var(--border-radius),
    var(--selected-main-card) 100%
  );
}

.bot .card-bg {
  padding-bottom: 0;
}

main:after {
  content: "";
  clear: both;
  display: table;
}
</style>
