<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <Card color="yellow" left header="bank.gif">
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
            <tr>
              <th class="centered">
                Date
              </th>
              <th>Description</th>
              <th style="text-align: right">
                Solde
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="line of data"
              :key="line.date"
              class="bank-line"
              :class="{ loss: line.value < 0 }"
            >
              <td class="centered">
                <b>{{ $format(line.date, 'PPp') }}</b>
              </td>
              <td>{{ line.description }}</td>
              <td style="text-align: right">
                <Number
                  :number="Math.abs(line.value)"
                  :color="line.value < 0 ? 'pink' : 'yellow'"
                />
              </td>
            </tr>
          </tbody>
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
      /><b> Balance sur 7 jours</b><br /><br />
      <BarChart
        :chart-data="bankData"
        :options="{
          scales: {
            x: {
              reverse: true
            },
            y: {
              min: Math.min(...bankData.datasets[0].data.flatMap((n: number) => n)),
              max: Math.max(...bankData.datasets[0].data.flatMap((n: number) => n))
            }
          }
        }"
      />
    </Card>
    <template #right-column>
      <Bank />
    </template>
  </Container>
</template>
<script setup lang="ts">
import { BarChart } from 'vue-chart-3'
import {
  Chart,
  Tooltip,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartData
} from 'chart.js'
import { isSameDay, eachDayOfInterval, subMonths } from 'date-fns'
import useAuthStore from '@/stores/auth'

Chart.register(Tooltip, BarController, BarElement, CategoryScale, LinearScale)

const auth = useAuthStore()
const { $format } = useNuxtApp()

const { data } = await useFetch<any>('/api/bank')

const bankData = computed(() => {
  const dataset: ChartData<any> = {
    labels: [] as string[],
    datasets: [{ type: 'bar', data: [], backgroundColor: [] }]
  }
  let balance = +auth.user!.money
  const today = new Date()
  eachDayOfInterval({
    start: subMonths(today, 1),
    end: today
  })
    .reverse()
    .forEach((day) => {
      const value: number = data.value
        .filter((el: any) => isSameDay(el.date, day))
        .reduce((prev: any, curr: any) => prev.value + curr.value).value
      balance -= value
      dataset.labels!.push($format(day, 'd MMM'))
      dataset.datasets[0].data.push([balance, balance + value])
      dataset.datasets[0].backgroundColor.push(value > 0 ? '#5b3' : '#fb0d0d')
    })
  return dataset
})

const { t } = useI18n()
useHead({ title: t('bank') })
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
