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
        src="@/asset/img/shop/effaceur.webp"
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
                src="@/asset/img/arrow.svg" /></template
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
<script>
import Bank from "@/component/Bank.vue";
import { mapState } from "vuex";

// @vuese
// @group View/Community
// Eraser page
export default {
  name: "EraserView",
  components: { Bank },
  data() {
    return {
      pseudo: "",
    };
  },
  methods: {
    submit() {
      console.log(`Envoyé ${this.pseudo}!`);
    },
    generatePseudo() {
      this.pseudo = "test";
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  metaInfo: {
    title: "section.eraser",
    meta: [
      {
        name: "description",
        content:
          "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
      },
      {
        property: "og:title",
        content: "Chimboz, accueil",
      },
      {
        property: "og:description",
        content: "Chimboz, accueil",
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" },
    ],
  },
};
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
