import mitt from "mitt";

const eventBus = mitt<{
  asyncComponentLoading: void;
  asyncComponentLoaded: void;
  quote: string;
  edit: string;
  error: string;
  success: string;
  failure: string;
  confirmation: { message: string; api: string; params?: object };
}>();

export default eventBus;
