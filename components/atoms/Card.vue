<template>
  <div :class="color" class="card-container mb-3">
    <img
      v-if="header"
      draggable="false"
      alt="Card header"
      class="card-header"
      :width="width"
      :height="height"
      :src="asset(`img/card/header/${header}`)"
      @contextmenu.prevent
    />
    <img
      v-else-if="top"
      draggable="false"
      alt="Card header"
      class="card-header"
      src="@/assets/img/card/header/default.svg"
      width="154"
      height="41"
      @contextmenu.prevent
    />
    <div v-else-if="$slots['subtop']" class="subtop flex centered">
      <StrokeText style="transform: translateX(-40%)">
        <slot name="subtop" />
      </StrokeText>
    </div>
    <div v-if="$slots['button']" class="card-btn">
      <slot name="button" />
    </div>
    <div class="card" :class="{ bot: bot, left: left }">
      <div
        class="card-bg"
        :style="{
          backgroundImage: bg
            ? `url(${asset(`img/card/background/${bg}`)})`
            : undefined,
        }"
      >
        <h2>
          <slot name="header" />
        </h2>
        <div v-if="$slots['subtitle']" class="centered mb-3">
          <em>"<slot name="subtitle" />"</em>
        </div>
        <main>
          <slot />
        </main>
      </div>
    </div>
    <img
      v-if="bot"
      draggable="false"
      alt="Card footer"
      src="@/assets/img/card/footer/default.svg"
      width="154"
      height="41"
      @contextmenu.prevent
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    // A header image, automatically prefixed by `/assets/img/card/header/`
    header?: string;
    // A background image, automatically prefixed by `/assets/img/card/background/`
    bg?: string;
    // Width of the header image
    width?: number;
    // Height of the header image
    height?: number;
    // Color of the card
    color?: 'yellow' | 'blue' | 'red';
    // Whether the text is left aligned
    left?: boolean;
    // Display a default footer image
    bot?: boolean;
    // Display a default header image
    top?: boolean;
  }>(),
  { width: 468, height: 77, color: undefined, bg: undefined, header: undefined }
);
</script>
<style lang="scss" scoped>
$colors: ('yellow', 'blue', 'red');

@each $color in $colors {
  .card-container.#{$color} {
    --selected-main-card: var(--main-card-#{$color});
    --selected-dark-card: var(--dark-card-#{$color});
    --selected-title-card: var(--title-card-#{$color});
  }
}

.card-container {
  --selected-main-card: var(--main-card);
  --selected-dark-card: var(--dark-card);
  --selected-title-card: var(--title-card);
}

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
  &:not(.bot) {
    box-shadow: 0 1px var(--dark);
  }
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
  padding-bottom: 2px;
}

img + .card > .card-bg {
  padding-top: var(--md-gap);
}

.subtop {
  color: var(--light);
  border-top: 1px solid;
  padding-left: calc(2 * var(--gap));
  font-family: 'Chimboz Heavy';
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
  content: '';
  clear: both;
  display: table;
}
</style>
