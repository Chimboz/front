import messageRender from './messageRender';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      messageRender: messageRender(window),
    },
  };
});
