import { onBeforeMount, onBeforeUpdate } from "vue";
import { useRoute, type RouteParams } from "vue-router";

export function asset(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

export function randomInt(min: number, max: number) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

export async function fetchData(callback: (params: RouteParams) => void) {
  onBeforeMount(() => callback(useRoute().params));
  onBeforeUpdate(() => callback(useRoute().params));
}

export function hashColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    // eslint-disable-next-line no-bitwise
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  return colour;
}
