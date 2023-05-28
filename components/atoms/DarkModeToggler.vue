<template>
  <button
    id="theme-toggler"
    type="button"
    :aria-label="$t('button.theme')"
    @click="toggleDark"
  />
</template>
<script setup lang="ts">
const colorMode = useColorMode();

function toggleColorMode() {
  colorMode.value !== 'dark'
    ? (colorMode.preference = 'dark')
    : (colorMode.preference = 'light');
}

const isAppearanceTransition = computed(
  () =>
    // @ts-expect-error: Transition API
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
);
/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
function toggleDark(event?: MouseEvent) {
  if (!isAppearanceTransition || !event) {
    toggleColorMode();
    return;
  }
  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleColorMode();
    await nextTick();
  });
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath:
          colorMode.preference === 'dark' ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement:
          colorMode.preference === 'dark'
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
      }
    );
  });
}
</script>
<style lang="scss" scoped>
#theme-toggler {
  font-family: 'Pixelated Verdana 12';
  font-size: 1.3rem;
  width: 20px;
  height: 20px;
  color: var(--text);
  border-radius: var(--round);
  padding: 2px;
  line-height: 1;
  background-color: var(--light);
  background-size: 16px;
  background-position: 4px;
  background-repeat: no-repeat;
  background-image: url(@/assets/img/icon/theme/light.svg);
  text-align: left;
  display: flex;
  align-items: center;
  box-sizing: content-box;

  &:hover {
    background-color: var(--light-blue);
    text-shadow: -0.1ex 0 0 currentColor, 0.1ex 0 0 currentColor;
  }
}

@media (pointer: coarse) {
  #theme-toggler {
    border: 8px solid #fff0;
  }
}
</style>
