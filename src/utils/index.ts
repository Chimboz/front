import { onBeforeMount, onBeforeUpdate } from "vue";
import { onBeforeRouteUpdate, useRoute, type RouteParams } from "vue-router";

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
