import { ref } from "vue";
import { defineStore } from "pinia";
import type User from "@/types/User";
import api from "@/modules/api";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<undefined | User>(undefined);
  async function login(pseudo: string, password: string) {
    /*
    await api.post("auth/login", {
      pseudo,
      password,
      device_name: "browser",
    });
    user.value = (await api.get("user")).data;
    */
    // FIXME
    user.value = {
      id: 3,
      pseudo: "Tigriz",
      email: "e-abyn@hotmail.fr",
      regdate: "1615900606",
      lastvisit: "1670880930",
      money: "2550",
      avatar_design: "r;7;334;612;808;868;938",
      signature: "Nitens lux, horrenda procella, tenebris aeternis involuta",
      website: "http://last.fm/user/Tigriz",
      interest1: "Musique",
      interest2: "informatique",
      interest3: "math\u00e9matiques",
      interest4: "Sayaka",
      posts: "153",
      avatar_mood: "zzz",
      gender: "chimbo",
      level_time: "6917752528",
      actif: "1",
      banned: null,
      admin: "0",
      user_level: "5",
      level: "25",
      currentPet: "103",
      loginToHome: "1",
      sign: "dragon rouge de terre",
      online: "0",
      room: "bacteria_debutants",
      sid: "EIgG3ViTqPQ2XwRXmrKLT4lFdNJv4IRptZu",
      loterie: "1",
      fermla: null,
      updated_at: "2022-12-12 22:35:30",
    };
  }

  async function logout() {
    await api.get("logout");
    user.value = undefined;
  }

  // FIXME
  login("", "");

  return { user, login, logout };
});
