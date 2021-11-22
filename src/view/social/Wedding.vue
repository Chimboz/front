<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card header="wedding.gif" justified bg="wedding.gif">
      <div class="flex centered hstack">
        <router-link to="#today" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les mariages du jour</router-link
        >
        <router-link to="#general" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les divorces</router-link
        >
        <router-link to="#yesterday" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Ceux qui tiennent</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Ceux qui ont tenu</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Archives</router-link
        >
        <router-link to="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Help icon"
            src="@/asset/img/icon/help.png"
          />&nbsp;Comment ça marche&nbsp;?
        </router-link>
      </div>
    </Card>
    <br /><Card id="today" v-if="data">
      <template #header>Le dernier mariage</template>
      Le lundi 15 octobre 2007 à 05h41, 68665e mariage.
      <br /><br />
      <div class="wedding">
        <img
          draggable="false"
          @contextmenu.prevent
          alt="Star"
          src="@/asset/img/social/wedding/wedding.svg"/>
        <Tiz
          class="witness witness1"
          :avatar="data.last.witness1.look.avatar"
          :emote="data.last.witness1.look.emote"
          :hat="data.last.witness1.look.hat"
          :body="data.last.witness1.look.body"
          :shoe="data.last.witness1.look.shoe"
          :item0="data.last.witness1.look.item0"
          :item1="data.last.witness1.look.item1"
          :item2="data.last.witness1.look.item2"/>
        <Tiz
          class="married married1"
          :avatar="data.last.married1.look.avatar"
          :emote="data.last.married1.look.emote"
          :hat="data.last.married1.look.hat"
          :body="data.last.married1.look.body"
          :shoe="data.last.married1.look.shoe"
          :item0="data.last.married1.look.item0"
          :item1="data.last.married1.look.item1"
          :item2="data.last.married1.look.item2"/>
        <Tiz
          class="married married2"
          :avatar="data.last.married2.look.avatar"
          :emote="data.last.married2.look.emote"
          :hat="data.last.married2.look.hat"
          :body="data.last.married2.look.body"
          :shoe="data.last.married2.look.shoe"
          :item0="data.last.married2.look.item0"
          :item1="data.last.married2.look.item1"
          :item2="data.last.married2.look.item2"/>
        <Tiz
          class="witness witness2"
          :avatar="data.last.witness2.look.avatar"
          :emote="data.last.witness2.look.emote"
          :hat="data.last.witness2.look.hat"
          :body="data.last.witness2.look.body"
          :shoe="data.last.witness2.look.shoe"
          :item0="data.last.witness2.look.item0"
          :item1="data.last.witness2.look.item1"
          :item2="data.last.witness2.look.item2"/></div
      ><br />
      Tous nos voeux de bonheur à <br />
      Ludovic151 et mica2<br />
      qui ont été mariés par Guruji en présence de<br />
      foxy974 et missbad67.
    </Card>
    <template #right-column
      ><Card
        header="ensavoirplus.gif"
        :width="154"
        :height="34"
        top
        color="lightblue"
        justified
      >
        Toutes les infos, les techniques, news.<br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        BBS de Bacteria<br />
        <br />
        Lis l'histoire sur Bacteria écrite par Kunu.<br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        Bacteria Sanctuary.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        424187 membres joueurs de Bacteria.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        12591547 parties ont été jouées.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        8684 parties hier.<br />
        <br />
        Niveau des joueurs<br />
        <br />
        # Membres %<br />
        0 180500 42.55%<br />
        1 220717 52.03%<br />
        2 13356 3.15%<br />
        3 5305 1.25%<br />
        4 3067 0.72%<br />
        5 1045 0.25%<br />
        6 197 0.05%<br />
        7 0 0%
      </Card></template
    >
  </Container>
</template>

<script>
import User from "@/component/link/User.vue";
import Tiz from "../../component/Tiz.vue";
import { format, differenceInCalendarDays } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Games",
  components: {
    User,
    Tiz
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/weddings.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/weddings.json");
    this.data = req.data;
    next();
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "PPp", {
        locale: window.__localeId__
      });
    },
    formatDistance(date) {
      return differenceInCalendarDays(new Date(), new Date(date), {
        locale: window.__localeId__
      });
    }
  },
  metaInfo: {
    title: "section.wedding",
    meta: [
      {
        name: "description",
        content:
          "chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chimboz, accueil"
      },
      {
        property: "og:description",
        content: "Chimboz, accueil"
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: #eef5fa;
  padding: 2px 0;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}

.wedding {
  position: relative;
}

.witness,
.married {
  position: absolute;
}

.witness {
  top: 165px;
}

.married {
  top: 175px;
}

.witness1 {
  left: 100px;
}

.witness2 {
  left: 275px;
}

.married1 {
  left: 150px;
}

.married2 {
  left: 225px;
}
</style>
