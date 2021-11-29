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
        <router-link to="#divorce" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les divorces</router-link
        >
        <router-link to="#best" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Ceux qui tiennent</router-link
        >
        <router-link to="#broken" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Ceux qui ont tenu</router-link
        >
      </div>
      <br />
      Dans notre monde, on peut se faire beaucoup d'amis, il arrive même que
      parfois, certaines relations aillent au-delà de l'amitié...<br />
      <br />
      Voilà pourquoi notre cher <b>Guruji</b> célèbre chaque <b>mercredi</b>,
      <b>samedi</b> et <b>dimanche</b> de magnifiques mariages sur la colline
      sacrée.<br />
      Seuls les membres célibataires peuvent demander à se marier.<br />
      Ceux qui veulent briser ces liens sacrés devront trouver la grotte du
      Divorce et affronter la honte et la peur.<br />
      <br />
      Les 3 couples qui tiennent le plus gagnent les fringues des mariés.
    </Card>
    <br /><Card id="last" v-if="data">
      <template #header>Le dernier mariage</template>
      Le <b>{{ formatDate(data.last.date, "PPp") }}</b
      >, <b>{{ data.last.id }}</b
      ><sup>ème</sup> mariage. <br /><br />
      <div class="wedding">
        <img
          draggable="false"
          @contextmenu.prevent
          alt="Star"
          src="@/asset/img/social/wedding/wedding.svg" />
        <Tiz
          class="witness witness1"
          :avatar="data.last.witness1.look.avatar"
          :emote="data.last.witness1.look.emote"
          :hat="data.last.witness1.look.hat"
          :body="data.last.witness1.look.body"
          :shoe="data.last.witness1.look.shoe"
          :item0="data.last.witness1.look.item0"
          :item1="data.last.witness1.look.item1"
          :item2="data.last.witness1.look.item2" />
        <Tiz
          class="married married1"
          :avatar="data.last.married1.look.avatar"
          :emote="data.last.married1.look.emote"
          :hat="data.last.married1.look.hat"
          :body="data.last.married1.look.body"
          :shoe="data.last.married1.look.shoe"
          :item0="data.last.married1.look.item0"
          :item1="data.last.married1.look.item1"
          :item2="data.last.married1.look.item2" />
        <Tiz
          class="married married2"
          :avatar="data.last.married2.look.avatar"
          :emote="data.last.married2.look.emote"
          :hat="data.last.married2.look.hat"
          :body="data.last.married2.look.body"
          :shoe="data.last.married2.look.shoe"
          :item0="data.last.married2.look.item0"
          :item1="data.last.married2.look.item1"
          :item2="data.last.married2.look.item2" />
        <Tiz
          class="witness witness2"
          :avatar="data.last.witness2.look.avatar"
          :emote="data.last.witness2.look.emote"
          :hat="data.last.witness2.look.hat"
          :body="data.last.witness2.look.body"
          :shoe="data.last.witness2.look.shoe"
          :item0="data.last.witness2.look.item0"
          :item1="data.last.witness2.look.item1"
          :item2="data.last.witness2.look.item2" /></div
      ><br />
      Tous nos voeux de bonheur à <br />
      <user :user="data.last.married1" /> et
      <user :user="data.last.married2" /><br />
      qui ont été mariés par <b>Guruji</b> en présence de<br />
      <user :user="data.last.witness1" /> et
      <user :user="data.last.witness2" />. </Card
    ><br />
    <Card id="today" v-if="data">
      <template #header
        ><img src="@/asset/img/wedding/mariage2.gif" /><br />Tous les mariages
        depuis 24 heures
      </template>
      Aujourd'hui, <b>{{ formatDate(Date.now(), "PP") }}</b
      >, <b>{{ data.today.length }}</b> mariages ont été célébrés. <br /><br />
      <div class="fullwidth" v-for="wedding of data.today" :key="wedding.id"
        >Le <b>{{ formatDate(wedding.date, "PPp") }}</b
        >,<br />
        <user :user="wedding.married1" /> et
        <user :user="wedding.married2" /> se sont mariés<br />
        en présence de <user :user="wedding.witness1" /> et de
        <user :user="wedding.witness2" /><br />
        <i
          ><router-link :to="'/weddings/' + wedding.id">{{
            wedding.id
          }}</router-link
          ><sup>ème</sup> mariage</i
        ></div
      >
    </Card>
    <br />
    <Card id="best" v-if="data">
      <template #header
        ><img src="@/asset/img/wedding/mariage2.gif" /><br />Les 20 mariages qui
        tiennent&nbsp;!
      </template>
      <template #subtitle
        >Ça commence pour un jour... ça fini pour toujours !</template
      >
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="50" />
          <col width="50" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Couple</th>
            <th>Mariage</th>
            <th>Jours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td
              ><user :user="wedding.married1" /> et
              <user :user="wedding.married2"
            /></td>
            <td
              ><i
                >n°<router-link :to="'/weddings/' + wedding.id">{{
                  wedding.id
                }}</router-link></i
              ></td
            >
            <td>
              <b>{{ formatDistance(wedding.date, Date.now()) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card id="divorce" v-if="data">
      <template #header
        ><img src="@/asset/img/wedding/divorce2.gif" /><br />Les divorces depuis
        24 heures
      </template>
      <template #subtitle
        >Le mariage est virtuel mais la douleur est réelle&nbsp;!</template
      >
      <b>{{ data.divorce.length }}</b> couples ont été brisés&nbsp;!<br /><br />
      <table class="score fullwidth">
        <colgroup>
          <col width="100" />
          <col width="100%" />
          <col width="50" />
          <col width="50" />
        </colgroup>
        <thead>
          <tr>
            <th>Heure</th>
            <th>Couple brisé</th>
            <th>Mariage</th>
            <th>Jours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.divorce" :key="index">
            <td>{{ formatDate(wedding.dateend, "p") }}</td>
            <td
              ><user :user="wedding.married1" /> a plaqué
              <user :user="wedding.married2"
            /></td>
            <td
              ><i
                >n°<router-link :to="'/weddings/' + wedding.id">{{
                  wedding.id
                }}</router-link></i
              ></td
            >
            <td>
              <b>{{ formatDistance(wedding.datebegin, wedding.dateend) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card id="broken" v-if="data">
      <template #header
        ><img src="@/asset/img/wedding/mariage2.gif" /><br />Les 20 mariages qui
        ont tenu !
      </template>
      <template #subtitle>C'est fini... mais ça a duré !!! </template>
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="50" />
          <col width="50" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Couple</th>
            <th>Mariage</th>
            <th>Jours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.broken" :key="index">
            <td>{{ index + 1 }}</td>
            <td
              ><user :user="wedding.married1" /> et
              <user :user="wedding.married2"
            /></td>
            <td
              ><i
                >n°<router-link :to="'/weddings/' + wedding.id">{{
                  wedding.id
                }}</router-link></i
              ></td
            >
            <td>
              <b>{{ formatDistance(wedding.datebegin, wedding.dateend) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column
      ><Card
        header="ensavoirplus_blue.gif"
        :width="154"
        :height="34"
        top
        v-if="data"
        color="blue"
      >
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />
        En tout, <b>Guruji</b> a célébré <b>{{ data.stats.total }}</b> mariages.
        <br /><br />
        <img
          src="@/asset/img/wedding/divorce.gif"
          alt="Divorce"
          draggable="false"
          @contextmenu.prevent
          width="56"
          height="39"
        /><br />
        <b>{{ data.stats.divorce }}</b> mariés ont divorcé. <br /><br />
        <img
          src="@/asset/img/wedding/mariage.gif"
          alt="Wedding"
          draggable="false"
          @contextmenu.prevent
          width="56"
          height="39"
        /><br />
        En ce moment, <b>{{ data.stats.total - data.stats.divorce }}</b> couples
        sont heureux, donc ça laisse
        <b>{{
          data.stats.members - (data.stats.total - data.stats.divorce) * 2
        }}</b>
        célibs !!! <br /><img
          src="@/asset/img/wedding/mariage2.gif"
          alt="Wedding"
          draggable="false"
          @contextmenu.prevent
          width="120"
          height="54"
          style="width: 100%"
        /><br /><h3>Archive de tous les mariages</h3><br />
        <form @submit.prevent="search()" class="flex fullwidth"
          ><input
            required
            min="1"
            :max="data.stats.total"
            name="id"
            type="number"
            class="btn-md"
            :placeholder="$t('placeholder.weddingid')"
          /><button
            type="submit"
            class="btn-md"
            style="font-family: 'Chimboz Heavy'"
            >go</button
          ></form
        ><br /><form @submit.prevent="search()" class="flex fullwidth"
          ><input
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
          /><button
            type="submit"
            class="btn-md"
            style="font-family: 'Chimboz Heavy'"
            >go</button
          ></form
        >
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
    formatDate(date, formatPattern) {
      return format(new Date(date), formatPattern, {
        locale: window.__localeId__
      });
    },
    formatDistance(datebegin, dateend) {
      return differenceInCalendarDays(new Date(dateend), new Date(datebegin), {
        locale: window.__localeId__
      });
    },
    search() {
      console.log("Envoyé!");
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

#today .fullwidth {
  padding: 6px;
}

#today .fullwidth:nth-child(2n + 1) {
  background: #eef5fa;
}
</style>
