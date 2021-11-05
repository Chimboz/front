<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
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
              /> </div></div></router-link
        ><br />
        <div class="flex col fullwidth">
          <SideNavEntries section="account"/></div></Card
      ><br />
      <Bank
    /></template>

    <Cabin
      v-if="data"
      :data="data"
      @update-item="(name, item) => (data.look[name] = item)"
      @previous-item="
        (name) =>
          (data.look[name] =
            data.items[name][data.items[name].indexOf(data.look[name]) - 1])
      "
      @next-item="
        (name) =>
          (data.look[name] = this.data.items[name][
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
    <Card
      header="bacteria_blue.jpg"
      :height="74"
      color="blue"
      justified
      bg="bacteria_blue.gif"
      v-if="data"
    >
      Actuellement en position : {{ data.bacteria.rank }} sur
      {{ data.bacteria.players }} joueurs classés<br />
      <br />
      Score : {{ data.bacteria.score }} point(s)<br />
      <br />
      Nombre de parties jouées :
      {{
        data.bacteria.stats.win +
          data.bacteria.stats.draw +
          data.bacteria.stats.lose
      }}
      , nombre de parties gagnées : {{ data.bacteria.stats.win }},<br />
      nombre de parties perdues : {{ data.bacteria.stats.lose }}, nombre de
      match nul : {{ data.bacteria.stats.draw }}
    </Card>
    <br />
    <Card
      header="patojdur_blue.gif"
      :height="56"
      color="blue"
      justified
      bg="patojdur_blue.gif"
      v-if="data"
    >
      Actuellement en position : {{ data.patojdur.rank }} sur
      {{ data.patojdur.players }} joueurs classés<br />
      Score : {{ data.patojdur.score }} point(s)<br />
      Record : {{ data.patojdur.stats.best }}
    </Card>
    <br />
    <Card
      header="mazo_blue.gif"
      :height="52"
      color="blue"
      justified
      bg="mazo_blue.gif"
      v-if="data"
    >
      Actuellement en position : {{ data.mazo.rank }} sur
      {{ data.mazo.players }} joueurs classés<br />
      Score : {{ data.mazo.score }} point(s)
    </Card>
    <template #right-column>
      <Card
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
        /></div>
        <div style="margin-top: -21px">
          <router-link
            v-for="message of this.data.pm"
            :key="message.author.id"
            :to="`/messenger/${message.author.id}`"
            :class="{ active: message.new }"
          >
            <div class="list fullwidth col pm"
              ><div>
                <img
                  draggable="false"
                  @contextmenu.prevent
                  :src="
                    require(`@/asset/img/bbs/msg${
                      message.new ? '_new' : ''
                    }.svg`)
                  "
                  alt="Voir le dernier message"
                  title="Voir le dernier message"/>&nbsp;<user
                  :user="message.author"/></div
              ><div>{{ formatDate(message.date) }}</div>
            </div>
          </router-link></div
        ></Card
      ><br />
      <Card
        color="blue"
        header="forum.gif"
        :width="154"
        :height="45"
        v-if="data"
      >
        <router-link
          v-for="message of data.forum"
          :key="message.id"
          :to="`/bbs/${message.forum.id}/${message.topic.id}#${message.id}`"
        >
          <div class="list fullwidth col" style="align-items: flex-start"
            ><div>
              <router-link :to="`/bbs/${message.forum.id}`">{{
                message.forum.name
              }}</router-link></div
            ><div
              ><img
                draggable="false"
                @contextmenu.prevent
                src="@/asset/img/bbs/msg.svg"
                alt="Voir le dernier message"
                title="Voir le dernier message"
              />&nbsp;{{ message.topic.title }}</div
            >
          </div>
        </router-link> </Card
      ><br /><Card color="blue" v-if="data">
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.friendsList") }}</Button>
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
          :to="'/member/' + friend.user.id"
        >
          <div
            class="list fullwidth flex-centered"
            style="justify-content: flex-start"
            ><img
              v-if="friend.status.connected && friend.status.room"
              src="@/asset/img/icon/account/online_tchat.png"
            /><img
              v-else-if="friend.status.connected"
              src="@/asset/img/icon/account/online.png"
            /><img
              v-else
              src="@/asset/img/icon/account/offline.png"
            />&nbsp;<div class="flex col" style="align-items: flex-start"
              ><user :user="friend.user" /> {{ friend.status.room }}</div
            ></div
          ></router-link
        >
      </Card>
      <br />
      <Card color="blue" v-if="data">
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.groupsList") }}</Button>
        </template>
        <router-link
          v-for="group of this.data.groups"
          :key="group.id"
          :to="'/group/' + group.id"
        >
          <div class="list fullwidth"
            ><img
              v-if="group.owner"
              src="@/asset/img/icon/account/offline.png"/>&nbsp;<group
              :group="group"/></div
        ></router-link>
      </Card>
    </template>
  </Container>
</template>

<script>
import Cabin from "@/component/Cabin.vue";
import Bank from "@/component/Bank.vue";
import User from "../component/link/User.vue";
import Group from "../component/link/Group.vue";
import { formatDistance } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Account",
  components: {
    Bank,
    Cabin,
    User,
    Group
  },

  data() {
    return {
      data: null
    };
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    },
    formatDate(date) {
      return formatDistance(new Date(date), new Date(), {
        locale: window.__localeId__,
        addSuffix: true
      });
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/account.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/account.json");
    this.data = req.data;
  },
  metaInfo: {
    title: "section.account",
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
.pm-number {
  transform: translate(30px, -42px);
}

.pm {
  padding: 2px 10px;
  align-items: flex-start;
}

.active .pm div:first-child {
  filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 1px #fff);
}
</style>
