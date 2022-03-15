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
      <br />
      <img
        src="@/asset/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Balance sur 7 jours</b>
      <br /><br>
      <BarChart :chartData="bankData" />
    </GlobalCard>
    <template #right-column><Bank /></template>
  </GlobalContainer>
</template>
<script>
import Bank from "@/component/Bank.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };
import { BarChart } from "vue-chart-3";
import {
  Chart,
  Tooltip,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(Tooltip, BarController, BarElement, CategoryScale, LinearScale);

// @vuese
// @group View/Account
// Bank page
export default {
  name: "LevelView",
  components: { Bank, BarChart },
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
    formatDateStats(date) {
      return format(new Date(date), "PP", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
    sameDay(d1, d2) {
      return (
        new Date(d1).getFullYear() === new Date(d2).getFullYear() &&
        new Date(d1).getMonth() === new Date(d2).getMonth() &&
        new Date(d1).getDate() === new Date(d2).getDate()
      );
    },
    getDaysArray() {
      const e = new Date();
      const s = new Date(e.getFullYear(), e.getMonth(), e.getDate() - 6);
      for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
        a.push(new Date(d));
      }
      return a;
    },
  },
  computed: {
    bankData() {
      const dataset = {
        labels: [],
        datasets: [{ data: [], backgroundColor: [] }],
      };
      for (const day of this.getDaysArray(
        this.data[this.data.length - 1].date,
        this.data[0].date
      )) {
        const data = this.data.filter((el) => this.sameDay(el.date, day));
        const value = 0;
        if (data.length == 1) value = data[0].value;
        if (data.length > 1)
          value = data.reduce((prev, curr) => prev.value + curr.value);
        dataset.labels.push(this.formatDateStats(day));
        dataset.datasets[0].data.push(value);
        dataset.datasets[0].backgroundColor.push(value > 0 ? "#5b3" : "#fb0d0d");
      }
      console.log(dataset);
      return dataset;
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
