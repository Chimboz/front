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
                :src="require(`@/asset/img/number/${number}.svg`)"
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
      @update-item="(name, item) => (data.look[name] = item)"
      @emote="(emote) => (data.look.emote = emote)"
      @previous-item="
        (name) =>
          (data.look[name] =
            data.items[name][data.items[name].indexOf(data.look[name]) - 1])
      "
      @next-item="
        (name) =>
          (data.look[name] =
            this.data.items[name][
              data.items[name].indexOf(data.look[name]) + 1
            ])
      "
      @change-gender="(gender) => (this.data.gender = gender)"
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
              :src="require(`@/asset/img/number/${number}.svg`)"
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
              
              y: { min: this.data.patojdur.stats.record },
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
            :src="require(`@/asset/img/number/${number}.svg`)"
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
          :src="require(`@/asset/img/number/${number}.svg`)"
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
              .reduce((prev, curr) => prev + +curr.new, 0)
              .toString(10)"
            :key="number.index"
            width="19"
            height="21"
            :src="require(`@/asset/img/number/pink/${number}.svg`)"
          />
        </div>
        <div style="margin-top: -21px">
          <router-link
            v-for="message of this.data.pm"
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
                    require(`@/asset/img/bbs/msg${
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
                  src="@/asset/img/bbs/msg.svg"
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
          v-for="friend of this.data.friends.sort(
            (a, b) =>
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
              src="@/asset/img/icon/account/online_tchat.png"
            /><img
              v-else-if="friend.status.connected"
              alt="Online on website"
              src="@/asset/img/icon/account/online.png"
            /><img v-else alt="Offline" src="@/asset/img/icon/account/offline.png" />&nbsp;
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
        <table class="fullwidth">
          <colgroup>
            <col width="30" />
            <col width="100%" />
          </colgroup>
          <tbody>
            <tr v-for="group of this.data.groups" :key="group.id">
              <td height="22">
                <img
                  v-if="group.owner"
                  alt="Group owner"
                  width="22"
                  height="22"
                  src="@/asset/img/icon/account/leader.svg"
                />
              </td>
              <td style="text-align: left"><GroupLink :group="group" /></td>
            </tr>
          </tbody>
        </table>
      </GlobalCard>
    </template>
  </GlobalContainer>
</template>

<script>
import Cabin from "@/component/Cabin.vue";
import Bank from "@/component/Bank.vue";
import StrokeText from "@/component/core/StrokeText.vue";
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };
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
export default {
  name: "AccountView",
  components: {
    Bank,
    Cabin,
    StrokeText,
    DoughnutChart,
    BarChart,
  },

  data() {
    return {
      data: null,
    };
  },
  methods: {
    formatDate(date) {
      return formatDistanceToNowStrict(new Date(date), {
        locale: locales[navigator.language.split("-")[0]],
        addSuffix: true,
      });
    },
  },
  computed: {
    statsBacteria() {
      return {
        labels: ["Win", "Draw", "Lose"],
        datasets: [
          {
            data: [
              this.data.bacteria.stats.win,
              this.data.bacteria.stats.draw,
              this.data.bacteria.stats.lose,
            ],
            backgroundColor: ["#5b3", "#fff", "#fb0d0d"],
          },
        ],
      };
    },
    statsPatojdur() {
      return {
        labels: ["Best", "Today", "Yesterday"],
        datasets: [
          {
            data: [
              this.data.patojdur.stats.best,
              this.data.patojdur.stats.today,
              this.data.patojdur.stats.yesterday,
            ],
            backgroundColor: ["#fc0", "#6ebef0", "#5aa1cd"],
          },
        ],
      };
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/account.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/account.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.account",
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
}
</style>
