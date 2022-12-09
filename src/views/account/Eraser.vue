<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
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
            @click="generatePseudo()"
            aria-label="Generate nickname"
            >Générer un pseudo</GlobalButton
          >
          <GlobalButton color="green" type="submit" aria-label="Save"
            ><template #prepend
              ><img
                draggable="false"
                @contextmenu.prevent
                alt="Arrow icon"
                class="arrow green jitter"
                width="40"
                height="33"
                src="@/assets/img/arrow.svg" /></template
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
import Bank from "@/components/Bank.vue";
import { useAuthStore } from "@/stores/auth";
const auth = useAuthStore();
const user = auth.user;

// @vuese
// @group View/Community
// Eraser page


      pseudo: "",
    };
  },

    submit() {
      console.log(`Envoyé ${pseudo}!`);
    },
    generatePseudo() {
      pseudo = "test";
    },
  },

  metaInfo: {
    title: "section.eraser",
  },
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
