
import { defineStore } from "pinia";
import type User from "@/types/User";
import userData from "public/api/user.json";

export default defineStore("auth", () => {
  const user = ref<undefined | User>(undefined);
  const notifications = ref(10);
  async function login(pseudo: string, password: string) {
    // await api.post("auth/login", { pseudo, password, device_name: "browser" });
    // user.value = (await useFetch("user")).data;
    // FIXME
    user.value = userData;
  }

  async function logout() {
    await useFetch("logout");
    user.value = undefined;
  }

  // FIXME
  login("", "");

  return { user, notifications, login, logout };
});
