import { ref } from "vue";
import { defineStore } from "pinia";
import type User from "@/types/User";
import api from "@/modules/api";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<undefined | User>(undefined);
  async function login(pseudo: string, password: string) {
    // await api.post("auth/login", { pseudo, password, device_name: "browser" });
    // user.value = (await api.get("user")).data;
    // FIXME
    user.value = (await api.get("http://localhost:5173/api/user.json")).data;
  }

  async function logout() {
    await api.get("logout");
    user.value = undefined;
  }

  // FIXME
  login("", "");

  return { user, login, logout };
});
