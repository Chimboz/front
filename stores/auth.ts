
import { defineStore } from "pinia";
import type User from "@/types/User";

export default defineStore("auth", () => {
  const user = ref<undefined | User>(undefined);
  const notifications = ref(10);
  async function login(pseudo: string, password: string) {
    // await useFetch("auth/login", {body:{ pseudo, password, device_name: "browser" }});
    // user.value = (await useFetch("user")).data;
    // FIXME
    user.value = (await useFetch("/api/user")).data.value ;
  }

  async function logout() {
    await useFetch("logout");
    user.value = undefined;
  }

  // FIXME
  login("", "");

  return { user, notifications, login, logout };
});
