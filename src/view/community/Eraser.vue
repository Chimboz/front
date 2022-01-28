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
      <form @submit.prevent="submit">
        <input
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
        <GlobalButton color="green" type="submit"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow green jitter"
              src="@/asset/img/arrow.svg" /></template
          >Sauver</GlobalButton
        >
      </form>
    </GlobalCard>
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script>
import { mapState } from "vuex";

// @vuese
// @group View/Community
// Eraser page
export default {
  name: "EraserView",
  data() {
    return {
      pseudo: "Test",
    };
  },
  mounted() {
    this.pseudo = this.user.name.slice();
  },
  methods: {
    changeCase(index) {
      let letter;
      if (this.pseudo[index].toUpperCase() == this.pseudo[index])
        letter = this.pseudo[index].toLowerCase();
      else letter = this.pseudo[index].toUpperCase();
      this.pseudo =
        this.pseudo.slice(0, index) + letter + this.pseudo.slice(index + 1);
    },
    submit() {
      console.log(`Envoyé ${this.pseudo}!`);
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  metaInfo: {
    title: "section.capitalization",
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
