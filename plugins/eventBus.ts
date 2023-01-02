import mitt from 'mitt';

const eventBus = mitt<{
  asyncComponentLoading: void;
  asyncComponentLoaded: void;
  quote: string;
  edit: { id: number; content: string };
  error: string;
  success: string;
  failure: string;
  confirmation: { message: string; api: string; payload?: object };
}>();

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      eventBus,
    },
  };
});
