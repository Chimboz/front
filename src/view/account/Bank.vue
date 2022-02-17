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
    <GlobalCard color="yellow" v-if="data" justified header="bank.gif">
      <table class="fullwidth">
        <colgroup>
          <col width="100" />
          <col width="100%" />
          <col width="100" />
        </colgroup>
        <thead style="background: var(--dark-card-yellow)">
          <th class="centered">Date</th>
          <th>Description</th>
          <th style="text-align: right">Solde</th>
        </thead>
        <tr
          v-for="line of data"
          :key="line.date"
          class="bank-line"
          :class="{ loss: line.value < 0 }"
        >
          <td class="centered">
            <b>{{ formatDate(line.date) }}</b>
          </td>
          <td>{{ line.description }}</td>
          <td style="text-align: right">
            <img
              draggable="false"
              @contextmenu.prevent
              :alt="number"
              v-for="number in Math.abs(line.value).toString(10)"
              :key="number.index"
              width="19"
              height="21"
              :src="
                require(`@/asset/img/number/${
                  line.value < 0 ? 'pink/' : ''
                }${number}.svg`)
              "
            />
          </td>
        </tr>
      </table>
    </GlobalCard>
    <template #right-column><Bank /></template>
  </GlobalContainer>
</template>
<script>
import Bank from "@/component/Bank.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View/Account
// Bank page
export default {
  name: "LevelView",
  components: { Bank },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "PPp", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/bank.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/bank.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.conversation",
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
.bank-line {
  padding: var(--gap);
  background: var(--dark-card-yellow);
}

.bank-line:not(.loss) {
  background: #5b33 !important;
}

.loss {
  background: #fb0d0d33 !important;
}

.loss .sign {
  color: var(--main-button-red);
}

.sign {
  position: relative;
  top: 4px;
  color: var(--main-button-green);
  font-size: var(--lg-font-size);
  font-family: "Jagger SF";
}
</style>
