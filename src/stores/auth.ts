import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type User from '@/types/User';

export const useAuthStore = defineStore("counter", () => {
  const user = ref<undefined | User>(undefined);
  function login() {
    user.value = {
      name: "Tigriz",
      id: 3,
      signature: "Nitens lux, horrenda procella, tenebris aeternis involuta",
      color: "#900",
      role: 100,
      credits: 1069,
      look: {
        avatar: 0,
        emote: "zzz",
        hat: 7,
        body: 334,
        shoe: 612,
        item0: 808,
        item1: 868,
        item2: 938,
      },
      notifications: 0,
    };
  }

  function logout() {
    user.value = undefined;
  }

  // TODO: remove
  login();

  return { user, login, logout };
});
