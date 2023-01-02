<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <NuxtLink to="/levels">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div v-if="data" class="number">
              <img
                v-for="number in data.level.toString(10)"
                :key="number.index"
                draggable="false"
                :alt="number"
                width="19"
                height="21"
                :src="asset(`img/number/${number}.svg`)"
                @contextmenu.prevent
              />
            </div></div></NuxtLink
        ><br />
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" /></div></Card
      ><br />
      <Bank
    /></template>

    <Cabin
      v-if="data"
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
    <br />
    <div class="games">
      <Card
        v-if="data && data.bacteria"
        header="bacteria.svg"
        :height="74"
        justified
      >
        <div class="number">
          <img
            v-for="number in data.bacteria.rank.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <b> sur </b>
        <div class="number">
          <img
            v-for="number in data.bacteria.players.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <br />
        <div class="number">
          <img
            v-for="number in data.bacteria.score.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <b> point(s)</b><br /><br />
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
        <br />
        <div class="centered">
          <div class="number">
            <img
              v-for="number in (
                data.bacteria.stats.win +
                data.bacteria.stats.draw +
                data.bacteria.stats.lose
              ).toString(10)"
              :key="number.index"
              draggable="false"
              :alt="number"
              width="19"
              height="21"
              :src="asset(`img/number/${number}.svg`)"
              @contextmenu.prevent
            />
          </div>
          <b> parties</b>
        </div>
      </Card>
      <Card
        v-if="data && data.patojdur"
        header="patojdur.svg"
        :height="56"
        justified
      >
        <div class="number">
          <img
            v-for="number in data.patojdur.rank.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <b> sur </b>
        <div class="number">
          <img
            v-for="number in data.patojdur.players.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <br />
        <div class="number">
          <img
            v-for="number in data.patojdur.score.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <b> point(s)</b>
        <br /><br />
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
      <Card
        v-if="data && data.mazo"
        header="mazo.svg"
        :height="52"
        justified
      >
        <div class="number">
          <img
            v-for="number in data.mazo.rank.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <b> sur </b>
        <div class="number">
          <img
            v-for="number in data.mazo.players.toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <br />
        <img
          v-for="number in data.mazo.score.toString(10)"
          :key="number.index"
          draggable="false"
          :alt="number"
          width="19"
          height="21"
          :src="asset(`img/number/${number}.svg`)"
          @contextmenu.prevent
        />
        <b> point(s)</b>
      </Card>
    </div>
    <template #right-column>
      <Card
        v-if="data"
        color="blue"
        header="messages.gif"
        :width="154"
        :height="56"
      >
        <div class="pm-number">
          <img
            v-for="number in data.pm
              .reduce((prev: number, curr: any) => prev + +curr.new, 0)
              .toString(10)"
            :key="number.index"
            draggable="false"
            :alt="number"
            width="19"
            height="21"
            :src="asset(`img/number/pink/${number}.svg`)"
            @contextmenu.prevent
          />
        </div>
        <div style="margin-top: -21px">
          <NuxtLink
            v-for="message of data.pm"
            :key="message.author.id"
            :to="`/messenger/${message.author.id}`"
            :class="{ active: message.new }"
          >
            <div class="list fullwidth col pm">
              <div>
                <img
                  draggable="false"
                  :src="asset(`img/bbs/msg${message.new ? '_new' : ''}.svg`)"
                  alt="Voir le dernier message"
                  title="Voir le dernier message"
                  @contextmenu.prevent
                />&nbsp;<LinkUser :user="message.author" />
              </div>
              <div>{{ distanceToNow(message.date) }}</div>
            </div>
          </NuxtLink>
        </div></Card
      ><br />
      <Card
        v-if="data"
        color="blue"
        header="forum.gif"
        :width="154"
        :height="45"
      >
        <StrokeText class="forum-title">Forum</StrokeText>
        <div style="margin-top: -16px">
          <NuxtLink
            v-for="message of data.forum"
            :key="message.id"
            :to="`/bbs/${message.topic.forum}-${message.topic.id}-${message.topic.page}#p${message.id}`"
          >
            <div class="list fullwidth col" style="align-items: flex-start">
              <div>
                <NuxtLink :to="`/bbs/${message.forum.id}`">{{
                  message.forum.name
                }}</NuxtLink>
              </div>
              <div>
                <img
                  draggable="false"
                  src="@/assets/img/bbs/msg.svg"
                  alt="Voir le dernier message"
                  title="Voir le dernier message"
                  @contextmenu.prevent
                />&nbsp;{{ message.topic.title }}
              </div>
            </div>
          </NuxtLink>
        </div></Card
      ><br /><Card v-if="data" color="blue">
        <template #button>
          <Button type="button" icon="register.svg">{{
            $t("profile.friendsList")
          }}</Button>
        </template>
        <NuxtLink
          v-for="friend of data.friends.sort(
            (a: any, b: any) =>
              b.status.connected +
              (b.status.room ? 1 : 0) -
              a.status.connected -
              (a.status.room ? 1 : 0)
          )"
          :key="friend.user.id"
          :to="'/book/' + friend.user.id"
        >
          <div
            class="list fullwidth flex-centered"
            style="justify-content: flex-start"
          >
            <img
              v-if="friend.status.connected && friend.status.room"
              alt="Online on tchat"
              src="@/assets/img/icon/account/online_tchat.png"
            /><img
              v-else-if="friend.status.connected"
              alt="Online on website"
              src="@/assets/img/icon/account/online.png"
            /><img
              v-else
              alt="Offline"
              src="@/assets/img/icon/account/offline.png"
            />&nbsp;
            <div class="flex col" style="align-items: flex-start">
              <LinkUser :user="friend.user" />
              {{ friend.status.connected ? friend.status.room : "" }}
            </div>
          </div></NuxtLink
        >
      </Card>
      <br />
      <Card v-if="data" color="blue">
        <template #button>
          <Button type="button" icon="register.svg">{{
            $t("profile.groupsList")
          }}</Button>
        </template>
        <NuxtLink
          v-for="group of data.groups"
          :key="group.id"
          :to="'/groups/' + group.id"
        >
          <div
            class="list fullwidth flex-centered"
            style="justify-content: flex-start"
          >
            <img
              :style="{ opacity: group.owner ? '1' : '0' }"
              alt="Group owner"
              width="22"
              height="22"
              src="@/assets/img/icon/account/leader.svg"
            />&nbsp;
            <div class="flex col" style="align-items: flex-start">
              <LinkGroup :group="group" />
            </div></div
        ></NuxtLink>
      </Card>
    </template>
  </Container>
</template>

<script setup lang="ts">




import { DoughnutChart, BarChart } from "vue-chart-3";
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
} from "chart.js";

import { fetchData, asset } from "@/utils";
import { distanceToNow } from "@/utils/date";
import { useHead } from "@vueuse/head";
import { RouterLink } from "vue-router";

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

const { data } = await useFetch("api/account");

function statsBacteria() {
  return {
    labels: ["Win", "Draw", "Lose"],
    datasets: [
      {
        data: [
          data.value.bacteria.stats.win,
          data.value.bacteria.stats.draw,
          data.value.bacteria.stats.lose,
        ],
        backgroundColor: ["#5b3", "#fff", "#fb0d0d"],
      },
    ],
  };
}
function statsPatojdur() {
  return {
    labels: ["Best", "Today", "Yesterday"],
    datasets: [
      {
        data: [
          data.value.patojdur.stats.best,
          data.value.patojdur.stats.today,
          data.value.patojdur.stats.yesterday,
        ],
        backgroundColor: ["#fc0", "#6ebef0", "#5aa1cd"],
      },
    ],
  };
}

// /api/account.json
useHead({ title: "section.account" });
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

.active .pm div:first-child {
  filter: drop-shadow(0 0 2px var(--light)) drop-shadow(0 0 1px var(--light));
}

.forum-title {
  font-family: "Chimboz Heavy";
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
