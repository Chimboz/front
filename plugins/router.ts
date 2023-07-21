import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  const router = useRouter();
  router.options.scrollBehavior = (to, _from, savedPosition) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  };
});
