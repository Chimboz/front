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
      ><template #subtop>MajMin</template>
      <form>
        <div class="centered">
        <button
          class="letter"
          @click="changeCase(index)"
          type="button"
          v-for="(letter, index) of this.pseudo"
          :key="index"
        >
          {{ letter }}
        </button></div>
        <GlobalButton type="submit">Sauver</GlobalButton>
      </form>
    </GlobalCard>
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script>
import { mapState } from "vuex";

// @vuese
// @group View/Account
// Capitalization page
export default {
  name: "LowUppView",
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
      if(this.pseudo[index].toUpperCase()==this.pseudo[index])
        letter = this.pseudo[index].toLowerCase();
      else letter = this.pseudo[index].toUpperCase()
      this.pseudo =
        this.pseudo.slice(0, index) +
        letter +
        this.pseudo.slice(index + 1);
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
