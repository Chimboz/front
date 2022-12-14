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
      <ScrollableContainer
        route="banklogs"
        class="fullwidth"
        :maxHeight="300"
        @scroll-data="(results: any[]) => (data = [...data, ...results])"
      >
        <table class="w-100">
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
                :key="number"
                width="19"
                height="21"
                :src="
                  asset(
                    `img/number/${line.value < 0 ? 'pink/' : ''}${number}.svg`
                  )
                "
              />
            </td>
          </tr>
        </table>
      </ScrollableContainer>
      <br />
      <img
        src="@/assets/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Balance sur 7 jours</b> <br /><br />
      <BarChart
        :chartData="bankData()"
        :options="{
          elements: {
            line: { borderColor: '#ffb907' },
            point: { borderColor: '#ffb907', backgroundColor: '#ffb907' },
          },
          scales: {
            x: {
              gridLines: {
                offsetGridLines: false,
              },
              reverse: true,
            },
          },
        }"
      />
    </GlobalCard>
    <template #right-column><Bank /></template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import Bank from "@/components/BankComponent.vue";
import ScrollableContainer from "@/components/core/ScrollableContainerComponent.vue";
import { BarChart } from "vue-chart-3";
import {
  Chart,
  Legend,
  Tooltip,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  type ChartData,
} from "chart.js";
import { ref } from "vue";
import { format, isSameDay, eachDayOfInterval, subDays } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import api from "@/modules/api";
import { fetchData, asset } from "@/utils";
import { useAuthStore } from "@/stores/auth";
const locales = { fr, enGB };

Chart.register(
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement
);

const auth = useAuthStore();

// @vuese
// @group View/Account
// Bank page

const data = ref<any>(undefined);

fetchData(async () => {
  // data.value = (await api.get("bank")).data;
  // TODO remove
  data.value = (await api.get("http://localhost:5173/api/bank.json")).data;
});

function formatDate(date: number) {
  return format(new Date(date), "PPp", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}
function formatDateStats(date: Date) {
  return format(date, "d MMM", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}
function bankData() {
  const dataset: ChartData<any> = {
    labels: [] as any[],
    datasets: [
      {
        type: "line",
        label: "Total",
        data: [],
        backgroundColor: ["#ffb907"],
        tension: 0.4,
      },
      { type: "bar", label: "Balance", data: [], backgroundColor: [] },
    ],
  };
  let balance = +auth.user!.money;
  let i = 0;
  const today = new Date();
  for (const day of eachDayOfInterval({
    start: subDays(today, 6),
    end: today,
  }).reverse()) {
    const chartData: any = data.value.filter((el: any) =>
      isSameDay(el.date, day)
    );
    let value = 0;
    if (chartData.length == 1) value = chartData[0].value;
    if (chartData.length > 1)
      value = chartData.reduce(
        (prev: any, curr: any) => prev.value + curr.value
      );
    if (i > 0) balance -= dataset.datasets[1].data[i - 1];
    dataset.labels!.push(formatDateStats(day));
    dataset.datasets[1].data.push(value);
    dataset.datasets[0].data.push(balance);
    dataset.datasets[1].backgroundColor.push(value > 0 ? "#5b3" : "#fb0d0d");
    i++;
  }
  return dataset;
}
// /api/bank.json
// meta title section.bank
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
</style>
