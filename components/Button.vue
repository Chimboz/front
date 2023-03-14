<template>
  <button class="btn flex" :class="color" :type="type">
    <slot name="prepend" />
    <img
      v-if="icon"
      draggable="false"
      class="btn-icon"
      alt="Button icon"
      :src="asset(`img/icon/button/${icon}`)"
      @contextmenu.prevent
    >
    <div class="btn-text">
      <StrokeText><slot /></StrokeText>
    </div>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  icon?: string;
  color?: 'red' | 'green' | 'yellow' | 'orange';
  type: 'button' | 'submit' | 'reset';
}>();
</script>
<style lang="scss" scoped>
$colors: ('yellow', 'orange', 'red', 'green');

@each $color in $colors {
  .btn.#{$color} {
    --selected-main-button: var(--main-button-#{$color});
    --selected-dark-button: var(--dark-button-#{$color});
  }
}

.btn {
  --selected-main-button: var(--main-button);
  --selected-dark-button: var(--dark-button);
  cursor: var(--pointer);
  width: 100%;
  height: 25px;
  font-family: 'Chimboz Heavy';
  font-weight: normal;
  background-image: linear-gradient(
    to bottom,
    var(--light) 0%,
    var(--selected-main-button) 50%,
    var(--selected-dark-button) 50%,
    var(--selected-main-button)
  );
  padding: 0 4%;
  align-items: center;
  line-height: var(--gap);
  border-style: solid;
  border-color: var(--selected-main-button) var(--selected-main-button)
    var(--selected-dark-button) var(--selected-main-button);

  box-shadow: 0 2px 1px var(--dark);
  filter: brightness(1);
  border-radius: var(--border-radius);
  border-width: 2px 5px;
}

.btn-text {
  overflow: hidden;
  font-size: var(--lg-font-size);
  fill: var(--text-button);
  stroke-width: 3;
  stroke: var(--selected-dark-button);
  height: 100%;
  width: 100%;
}

.btn-icon {
  position: absolute;
}

.btn:hover {
  filter: brightness(1.1);
}

.btn:active,
.btn.active {
  background-image: linear-gradient(
    to top,
    var(--light) 0%,
    var(--selected-main-button) 50%,
    var(--selected-dark-button) 50%,
    var(--selected-main-button)
  );
}
</style>
