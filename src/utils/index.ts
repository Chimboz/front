import { onBeforeMount } from "vue";
import { onBeforeRouteUpdate, useRoute, type RouteParams } from "vue-router";

export function asset(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

export async function fetchData(callback: (params: RouteParams) => void) {
  onBeforeMount(() => callback(useRoute().params));
  onBeforeRouteUpdate((to) => callback(to.params));
}
