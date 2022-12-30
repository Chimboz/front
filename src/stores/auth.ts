import { ref } from "vue";
import { defineStore } from "pinia";
import type User from "@/types/User";
import api from "@/modules/api";

export default defineStore("auth", () => {
  const user = ref<undefined | User>(undefined);
  const notifications = ref(10);
  async function login(pseudo: string, password: string) {
    // await api.post("auth/login", { pseudo, password, device_name: "browser" });
    // user.value = (await api.get("user")).data;
    // FIXME
    user.value = (
      await api.get(`${window.location.origin}/api/user.json`)
    ).data;
  }

  async function logout() {
    await api.get("logout");
    user.value = undefined;
  }

  // FIXME
  login("", "");

  return { user, notifications, login, logout };
});
