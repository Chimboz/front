<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" top>
        <router-link to="/levels">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div class="number" v-if="data">
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.level.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="asset(`img/number/${number}.svg`)"
              />
            </div></div></router-link
        ><br />
        <div class="flex col fullwidth">
          <SideNavEntries section="account" /></div></GlobalCard
      ><br />
      <Bank
    /></template>

    <Cabin
      v-if="data"
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
      v-model:motto="data.motto"
      v-model:website="data.website"
      v-model:centrea="data.centres[0]"
      v-model:centreb="data.centres[1]"
      v-model:centrec="data.centres[2]"
      v-model:centred="data.centres[3]"
    />
    <br />
    <div class="games">
      <GlobalCard
        header="bacteria.svg"
        :height="74"
        justified
        v-if="data && data.bacteria"
      >
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.bacteria.rank.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <b> sur </b>
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.bacteria.players.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <br />
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.bacteria.score.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <b> point(s)</b><br /><br />
        <DoughnutChart
          :chartData="statsBacteria"
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
              draggable="false"
              @contextmenu.prevent
              :alt="number"
              v-for="number in (
                data.bacteria.stats.win +
                data.bacteria.stats.draw +
                data.bacteria.stats.lose
              ).toString(10)"
              :key="number.index"
              width="19"
              height="21"
              :src="asset(`img/number/${number}.svg`)"
            />
          </div>
          <b> parties</b>
        </div>
      </GlobalCard>
      <GlobalCard
        header="patojdur.svg"
        :height="56"
        justified
        v-if="data && data.patojdur"
      >
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.patojdur.rank.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <b> sur </b>
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.patojdur.players.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <br />
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.patojdur.score.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <b> point(s)</b>
        <br /><br />
        <BarChart
          :chartData="statsPatojdur"
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
      </GlobalCard>
      <GlobalCard
        header="mazo.svg"
        :height="52"
        justified
        v-if="data && data.mazo"
      >
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.mazo.rank.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <b> sur </b>
        <div class="number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.mazo.players.toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/${number}.svg`)"
          />
        </div>
        <br />
        <img
          draggable="false"
          @contextmenu.prevent
          :alt="number"
          v-for="number in data.mazo.score.toString(10)"
          :key="number.index"
          width="19"
          height="21"
          :src="asset(`img/number/${number}.svg`)"
        />
        <b> point(s)</b>
      </GlobalCard>
    </div>
    <template #right-column>
      <GlobalCard
        color="blue"
        header="messages.gif"
        :width="154"
        :height="56"
        v-if="data"
      >
        <div class="pm-number">
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="number"
            v-for="number in data.pm
              .reduce((prev: number, curr: any) => prev + +curr.new, 0)
              .toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="asset(`img/number/pink/${number}.svg`)"
          />
        </div>
        <div style="margin-top: -21px">
          <router-link
            v-for="message of data.pm"
            :key="message.author.id"
            :to="`/messenger/${message.author.id}`"
            :class="{ active: message.new }"
          >
            <div class="list fullwidth col pm">
              <div>
                <img
                  draggable="false"
                  @contextmenu.prevent
                  :src="
                    asset(`img/bbs/msg${
                      message.new ? '_new' : ''
                    }.svg`)
                  "
                  alt="Voir le dernier message"
                  title="Voir le dernier message"
                />&nbsp;<UserLink :user="message.author" />
              </div>
              <div>{{ formatDate(message.date) }}</div>
            </div>
          </router-link>
        </div></GlobalCard
      ><br />
      <GlobalCard
        color="blue"
        header="forum.gif"
        :width="154"
        :height="45"
        v-if="data"
      >
        <StrokeText class="forum-title">Forum</StrokeText>
        <div style="margin-top: -16px">
          <router-link
            v-for="message of data.forum"
            :key="message.id"
            :to="`/topic/${message.topic.id}/${message.topic.page}#${message.id}`"
          >
            <div class="list fullwidth col" style="align-items: flex-start">
              <div>
                <router-link :to="`/bbs/${message.forum.id}`">{{
                  message.forum.name
                }}</router-link>
              </div>
              <div>
                <img
                  draggable="false"
                  @contextmenu.prevent
                  src="@/assets/img/bbs/msg.svg"
                  alt="Voir le dernier message"
                  title="Voir le dernier message"
                />&nbsp;{{ message.topic.title }}
              </div>
            </div>
          </router-link>
        </div></GlobalCard
      ><br /><GlobalCard color="blue" v-if="data">
        <template #button>
          <GlobalButton icon="register.svg">{{
            $t("profile.friendsList")
          }}</GlobalButton>
        </template>
        <router-link
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
              <UserLink :user="friend.user" />
              {{ friend.status.connected ? friend.status.room : "" }}
            </div>
          </div></router-link
        >
      </GlobalCard>
      <br />
      <GlobalCard color="blue" v-if="data">
        <template #button>
          <GlobalButton icon="register.svg">{{
            $t("profile.groupsList")
          }}</GlobalButton>
        </template>
        <router-link
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
              <GroupLink :group="group" />
            </div></div
        ></router-link>
      </GlobalCard>
    </template>
  </GlobalContainer>
</template>

<script setup lang="ts">
import Cabin from "@/components/CabinComponent.vue";
import Bank from "@/components/BankComponent.vue";
import StrokeText from "@/components/core/StrokeTextComponent.vue";
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
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
const locales = { fr, enGB };

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

// @vuese
// @group View/Account
// Account page

const data = ref<any>(undefined);

function formatDate(date: number) {
  return formatDistanceToNowStrict(new Date(date), {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
    addSuffix: true,
  });
}
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
// meta title section.account
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
  column-count: 2;
}

.number {
  display: inline-block;
}
</style>
