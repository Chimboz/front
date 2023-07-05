export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders();
  const HOST = computed(() =>
    headers.referer ? new URL(headers.referer).origin : location?.origin
  );
  return {
    provide: {
      HOST,
    },
  };
});
