import messageRender from './messageRender';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      messageRender: messageRender(window),
    },
  };
});
