import { defineNuxtPlugin, useRouter } from '#imports';

export default defineNuxtPlugin((nuxt: any) => {
  const timeMetric = shallowReactive({
    pageStart: Date.now(),
    pageEnd: Date.now(),
  });

  const router = useRouter();

  router.beforeEach(() => {
    timeMetric.pageStart = Date.now();
  });
  nuxt.hook('page:finish', () => {
    timeMetric.pageEnd = Date.now();
  });

  return {
    provide: {
      timeMetric,
    },
  };
});
