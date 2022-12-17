<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard color="yellow" justified
      ><template #subtop>Effaceur</template>
      <template #header
        >SOS pseudo moisi, changez de pseudo pour 200 pepettes !</template
      >
      <img
        src="@/assets/img/shop/effaceur.webp"
        height="91"
        width="444"
        alt="Eraser"
        draggable="false"
        style="width: 100%"
        @contextmenu.prevent
      />

      <br />
      <form @submit.prevent="submit">
        <input
          v-model="pseudo"
          required
          autofocus
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md"
          autocomplete="username"
          :placeholder="$t('placeholder.username')"
        />
        <br /><br />
        <div class="flex">
          <GlobalButton
            type="button"
            aria-label="Generate nickname"
            @click="generatePseudo()"
            >Générer un pseudo</GlobalButton
          >
          <GlobalButton color="green" type="submit" aria-label="Save"
            ><template #prepend
              ><img
                draggable="false"
                alt="Arrow icon"
                class="arrow green jitter"
                width="40"
                height="33"
                src="@/assets/img/arrow.svg"
                @contextmenu.prevent /></template
            >Sauver</GlobalButton
          >
        </div>
        <br />
        <b>Attention</b>, tu ne peux avoir qu'un seul pseudo à la fois. Si tu
        possèdes déjà un pseudo et que tu en rachètes un, le nouveau remplacera
        l'ancien.
      </form>
    </GlobalCard>
    <template #right-column><Bank /></template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import Bank from "@/components/BankComponent.vue";
import api from "@/modules/api";
import { useAuthStore } from "@/stores/auth";
import { randomInt } from "@/utils";
import { ref, computed } from "vue";
const auth = useAuthStore();
const user = computed(() => auth.user);

// @vuese
// @group View/Community
// Eraser page

const pseudo = ref("");

function submit() {
  console.log(`Envoyé ${pseudo.value}!`);
}
async function generatePseudo() {
  pseudo.value = (
    await api.get(`generator/${randomInt(3, 15)}/${randomInt(1, 2)}`)
  ).data.pseudo;
}

// meta title section.eraser
</script>

<style lang="scss" scoped>
.letter {
  text-align: center;
  font-size: 24px;
  width: 24px;
  font-family: "Pixelated Verdana 10";
  border-bottom: 2px solid black;
  margin: 2px;
}
</style>
