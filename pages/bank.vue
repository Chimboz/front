<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card color="yellow" justified header="bank.gif">
      <ScrollableContainer
        route="banklogs"
        class="fullwidth"
        :max-height="300"
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
              <b>{{ format(line.date, "PPp") }}</b>
            </td>
            <td>{{ line.description }}</td>
            <td style="text-align: right">
              <img
                v-for="number in Math.abs(line.value).toString(10)"
                :key="number"
                draggable="false"
                :alt="number"
                width="19"
                height="21"
                :src="
                  asset(
                    `img/number/${line.value < 0 ? 'pink/' : ''}${number}.svg`
                  )
                "
                @contextmenu.prevent
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
        height="17"
        width="17"
        @contextmenu.prevent
      /><b> Balance sur 7 jours</b> <br /><br />
      <BarChart
        :chart-data="bankData()"
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
    </Card>
    <template #right-column><Bank /></template>
  </Container>
</template>
<script setup lang="ts">
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

import { isSameDay, eachDayOfInterval, subDays } from "date-fns";
import { format } from "@/utils/date";

import { fetchData, asset } from "@/utils";
import useAuthStore from "@/stores/auth";


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

const { data } = await useFetch("/api/bank");

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
  eachDayOfInterval({
    start: subDays(today, 6),
    end: today,
  })
    .reverse()
    .forEach((day) => {
      const chartData: any = data.value.filter((el: any) =>
        isSameDay(el.date, day)
      );
      let value = 0;
      if (chartData.length === 1) value = chartData[0].value;
      if (chartData.length > 1)
        value = chartData.reduce(
          (prev: any, curr: any) => prev.value + curr.value
        );
      if (i > 0) balance -= dataset.datasets[1].data[i - 1];
      dataset.labels!.push(format(day, "d MMM"));
      dataset.datasets[1].data.push(value);
      dataset.datasets[0].data.push(balance);
      dataset.datasets[1].backgroundColor.push(value > 0 ? "#5b3" : "#fb0d0d");
      i++;
    });
  return dataset;
}
// /api/bank.json
useHead({ title: "section.bank" });
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
