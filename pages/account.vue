<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <NuxtLink to="/levels">
          <div class="level fullwidth mb-3">
            {{ $t('level') }}
            <div class="number">
              <Number :number="data.level" />
            </div>
          </div>
        </NuxtLink>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div>
      </Card>
      <Bank />
    </template>

    <Cabin
      v-model:motto="data.motto"
      v-model:website="data.website"
      v-model:centrea="data.centres[0]"
      v-model:centreb="data.centres[1]"
      v-model:centrec="data.centres[2]"
      v-model:centred="data.centres[3]"
      :data="data"
      @update-item="(name: any, item: any) => (data.look[name] = item)"
      @emote="(emote:any) => (data.look.emote = emote)"
      @previous-item="
        (name: any) =>
          (data.look[name] =
            data.items[name][
              data.items[name].map((item: any) => item.id).indexOf(data.look[name]) -
              1
            ].id)
      "
      @next-item="
        (name: any) =>
          (data.look[name] =
            data.items[name][
              data.items[name].map((item: any) => item.id).indexOf(data.look[name]) +
              1
            ].id)
      "
      @change-gender="(gender: any) => (data.gender = gender)"
    />
    <div class="games">
      <Card header="bacteria.svg" :height="74" left>
        <div class="number">
          <Number :number="data.bacteria.rank" />
        </div>
        <b> sur </b>
        <div class="number">
          <Number :number="data.bacteria.players" />
        </div>
        <br>
        <div class="number">
          <Number :number="data.bacteria.score" />
        </div>
        <b> point(s)</b><br><br>
        <DoughnutChart
          :chart-data="statsBacteria()"
          :options="{
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
          }"
        />
        <br>
        <div class="centered">
          <div class="number">
            <Number
              :number="
                data.bacteria.stats.win +
                  data.bacteria.stats.draw +
                  data.bacteria.stats.lose
              "
            />
          </div>
          <b> parties</b>
        </div>
      </Card>
      <Card header="patojdur.svg" :height="56" left>
        <div class="number">
          <Number :number="data.patojdur.rank" />
        </div>
        <b> sur </b>
        <div class="number">
          <Number :number="data.patojdur.players" />
        </div>
        <br>
        <div class="number">
          <Number :number="data.patojdur.score" />
        </div>
        <b> point(s)</b>
        <br><br>
        <BarChart
          :chart-data="statsPatojdur()"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: { min: data.patojdur.stats.record },
            },
          }"
        />
      </Card>
      <Card header="mazo.svg" :height="52" left>
        <div class="number">
          <Number :number="data.mazo.rank" />
        </div>
        <b> sur </b>
        <div class="number">
          <Number :number="data.mazo.players" />
        </div>
        <br>
        <Number :number="data.mazo.score" />
        <b> point(s)</b>
      </Card>
    </div>
    <template #right-column>
      <Card color="blue" header="messages.gif" :width="154" :height="56">
        <div class="pm-number">
          <Number
            :number="data.pm
              .reduce((prev: number, curr: any) => prev + +curr.new, 0)"
            color="pink"
          />
        </div>
        <div style="margin-top: -21px">
          <div
            v-for="message of data.pm"
            :key="message.author.id"
            class="list fullwidth col pm link"
            :class="{ active: message.new }"
            @click="$router.push(`/messenger/${message.author.id}`)"
          >
            <div>
              <img
                draggable="false"
                :src="asset(`img/bbs/msg${message.new ? '_new' : ''}.svg`)"
                alt="Voir le dernier message"
                title="Voir le dernier message"
                @contextmenu.prevent
              >&nbsp;<LinkUser :user="message.author" @click.stop />
            </div>
            <div>{{ $distanceToNow(message.date) }}</div>
          </div>
        </div>
      </Card>
      <Card color="blue" header="forum.gif" :width="154" :height="45">
        <StrokeText class="forum-title">
          Forum
        </StrokeText>
        <div style="margin-top: -16px">
          <div
            v-for="message of data.forum"
            :key="message.id"
            class="list fullwidth col link"
            style="align-items: flex-start"
            @click.prevent="
              $router.push(
                `/bbs/${message.forum.id}-${message.topic.id}-${
                  message.topic.page ?? 1
                }#p${message.id}`
              )
            "
          >
            <div>
              <NuxtLink :to="`/bbs/${message.forum.id}-1`" @click.stop>
                {{ message.forum.name }}
              </NuxtLink>
            </div>
            <div>
              <img
                draggable="false"
                src="@/assets/img/bbs/msg.svg"
                alt="Voir le dernier message"
                title="Voir le dernier message"
                @contextmenu.prevent
              >&nbsp;{{ message.topic.title }}
            </div>
          </div>
        </div>
      </Card><Card color="blue">
        <template #button>
          <Button type="button" icon="register.svg">
            {{ $t('profile.friends') }}
          </Button>
        </template>
        <div
          v-for="friend of data.friends.sort(
            (a: any, b: any) =>
              b.status.connected +
              (b.status.room ? 1 : 0) -
              a.status.connected -
              (a.status.room ? 1 : 0)
          )"
          :key="friend.user.id"
          class="list fullwidth flex-centered link"
          style="justify-content: flex-start"
          @click="$router.push(`/book/${friend.user.id}`)"
        >
          <img
            v-if="friend.status.connected && friend.status.room"
            alt="Online on tchat"
            src="@/assets/img/icon/account/online_tchat.png"
          ><img
            v-else-if="friend.status.connected"
            alt="Online on website"
            src="@/assets/img/icon/account/online.png"
          ><img
            v-else
            alt="Offline"
            src="@/assets/img/icon/account/offline.png"
          >&nbsp;
          <div class="flex col" style="align-items: flex-start">
            <LinkUser :user="friend.user" />
            {{ friend.status.connected ? friend.status.room : '' }}
          </div>
        </div>
      </Card>
      <Card color="blue">
        <template #button>
          <Button type="button" icon="register.svg">
            {{ $t('profile.groups') }}
          </Button>
        </template>
        <div
          v-for="group of data.groups.sort((a: any, b:any) => b.owner || -a.owner)"
          :key="group.id"
          class="list fullwidth flex-centered link"
          style="justify-content: flex-start"
          @click="$router.push(`/groups/${group.id}`)"
        >
          <img
            :style="{ opacity: group.owner ? '1' : '0' }"
            alt="Group owner"
            width="22"
            height="22"
            src="@/assets/img/icon/account/leader.svg"
          >&nbsp;
          <div class="flex col" style="align-items: flex-start">
            <LinkGroup :group="group" />
          </div>
        </div>
      </Card>
    </template>
  </Container>
</template>

<script setup lang="ts">
import { DoughnutChart, BarChart } from 'vue-chart-3';
import {
  Chart,
  Legend,
  DoughnutController,
  ArcElement,
  Tooltip,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

Chart.register(
  Legend,
  DoughnutController,
  ArcElement,
  Tooltip,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
);

const { data } = await useFetch<any>('/api/account');

function statsBacteria () {
  return {
    labels: ['Win', 'Draw', 'Lose'],
    datasets: [
      {
        data: [
          data.value.bacteria.stats.win,
          data.value.bacteria.stats.draw,
          data.value.bacteria.stats.lose,
        ],
        backgroundColor: ['#5b3', '#fff', '#fb0d0d'],
      },
    ],
  };
}
function statsPatojdur () {
  return {
    labels: ['Best', 'Today', 'Yesterday'],
    datasets: [
      {
        data: [
          data.value.patojdur.stats.best,
          data.value.patojdur.stats.today,
          data.value.patojdur.stats.yesterday,
        ],
        backgroundColor: ['#fc0', '#6ebef0', '#5aa1cd'],
      },
    ],
  };
}

const { t } = useI18n();
useHead({ title: computed(() => t('account')) });
</script>
<style lang="scss">
.games .card {
  display: inline-block;
}
</style>
<style lang="scss" scoped>
.pm-number {
  transform: translate(30px, -42px);
}

.pm {
  padding: 2px 10px;
  align-items: flex-start;
}

.pm.active div:first-child {
  filter: drop-shadow(0 0 2px var(--light)) drop-shadow(0 0 1px var(--light));
}

.forum-title {
  font-family: 'Chimboz Heavy';
  height: 16px;
  font-size: var(--lg-font-size);
  fill: var(--text-button);
  stroke: #a10069;
  stroke-width: 4;
  transform: translateY(-40px);
}

.games {
  column-count: 3;
}

.number {
  display: inline-block;
  white-space: nowrap;
}
</style>
