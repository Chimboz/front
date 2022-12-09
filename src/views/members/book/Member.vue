<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <span class="pink justified">
      <router-link to="/book" class="pink"
        >» Retour à l'annuaire</router-link
      > </span
    ><br />
    <GlobalCard
      class="member"
      :class="[data.gender]"
      v-if="data"
      justified
    >
      <div class="member-header">
        <GlobalAvatar
          :avatar="data.look.avatar"
          :emote="data.look.emote"
          :hat="data.look.hat"
          :body="data.look.body"
          :shoe="data.look.shoe"
          :item0="data.look.item0"
          :item1="data.look.item1"
          :item2="data.look.item2"
        />
        <div class="flex col" style="z-index: 1; position: relative">
          <StrokeText class="pseudo" justified>{{ data.name }}</StrokeText>
          <div class="motto">"{{ data.motto }}"</div>
        </div>
      </div>
      <div class="member-body">
        <div class="member-portrait centered">
          <div class="portrait flex">
            <GlobalAvatar
              :avatar="data.look.avatar"
              :emote="data.look.emote"
              :hat="data.look.hat"
              :body="data.look.body"
              :shoe="data.look.shoe"
              :item0="data.look.item0"
              :item1="data.look.item1"
              :item2="data.look.item2"
            />
          </div>
          <div v-if="!data.status.connected">
            Dernière visite le <b>{{ formatDate(data.status.date) }}</b>
          </div>
          <div v-else>
            <div
              class="online flex centered"
              :class="{ tchat: data.status.room }"
            >
              <img
                draggable="false"
                @contextmenu.prevent
                alt="Online"
                src="@/assets/img/tiz/tiz_shape.svg"
              />&nbsp;<b>En ligne</b>
            </div>
            <b>{{ data.status.room }}</b>
          </div>
        </div>
        <div class="member-text">
          <p>
            <img
              src="@/assets/img/member/wedding.svg"
              height="20"
              width="20"
              alt="Wedding icon"
              draggable="false"
              @contextmenu.prevent
            />&nbsp;
            <span v-if="data.wedding">
              <router-link :to="'/weddings/' + data.wedding.id"
                >Marié</router-link
              >
              avec
              <UserLink :user="data.wedding.user" /> depuis
              {{ formatDistance(data.wedding.date) }} jours
            </span>
            <span v-else><b>Célibataire</b></span>
          </p>
          <p>
            Intérêts :
            <b v-for="(interest, index) of data.centres" :key="index"
              >{{ interest
              }}<span v-if="index < data.centres.length - 1">, </span></b
            >
          </p>
          <p>
            Page perso :
            <a
              target="_blank"
              rel="noreferrer noopennr nofollower"
              :href="data.website"
              >{{ data.website }}</a
            >
          </p>
          <p>
            Inscrit aux groupes :
            <GroupLink
              v-for="(group, index) of data.groups"
              :group="group"
              :key="group.id"
              :separator="index < data.groups.length - 1"
            />
          </p>
          <br />
          <div class="icon flex centered col">
            <div v-if="data.gender == 'male'">Chimbo</div>
            <div v-else-if="data.gender == 'female'">Chimbette</div>
            <div v-else>Chimbi</div>
            <img
              draggable="false"
              @contextmenu.prevent
              :alt="
                data.gender.charAt(0).toUpperCase() +
                data.gender.slice(1) +
                ' gender'
              "
              height="16"
              width="20"
              :src="
                require(`@/assets/img/member/${data.gender}/${data.gender}.svg`)
              "
            />
          </div>
          &nbsp;
          <div class="icon flex centered col">
            <div>Niveau</div>
            <div>
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="digit"
                v-for="digit in data.level.toString(10)"
                :key="digit.index"
                width="19"
                height="21"
                :src="require(`@/assets/img/number/${digit}.svg`)"
              />
            </div>
          </div>
          <br /><br />
          <p>
            Vérification du nom :
            <b
              >{{ data.name.toLowerCase() }},
              {{ data.name.toUpperCase() }}</b
            >
          </p>
          <p>
            Signe astrologik : <b>{{ data.astro }}</b>
          </p>
        </div>
      </div>
      <br />
      <div class="member-section" v-if="data.bacteria">
        <img
          draggable="false"
          @contextmenu.prevent
          :src="require(`@/assets/img/member/${data.gender}/bacteria.svg`)"
          alt="Bacteria"
          style="float: left"
        />
        <span
          >Classement : <b>{{ data.bacteria.rank }}</b
          ><sup v-if="data.bacteria.rank == 1">er</sup><sup v-else>ème</sup
          ><br /><b>{{
            data.bacteria.win + data.bacteria.lose + data.bacteria.draw
          }}</b>
          parties, <b>{{ data.bacteria.win }}</b> gagnées,
          <b>{{ data.bacteria.lose }}</b> perdues,
          <b>{{ data.bacteria.draw }}</b> nulles<br /><b>{{
            data.bacteria.score
          }}</b>
          points</span
        >
      </div>
      <br v-if="data.bacteria" />
      <div class="member-section" v-if="data.patojdur">
        <img
          draggable="false"
          @contextmenu.prevent
          :src="require(`@/assets/img/member/${data.gender}/patojdur.svg`)"
          alt="Patojdur"
          style="float: left"
        />
        <span
          >Classement : <b>{{ data.patojdur.rank }}</b
          ><sup v-if="data.patojdur.rank == 1">er</sup
          ><sup v-else>ème</sup> avec
          <b>{{ data.patojdur.score }}</b> points<br />Aujourd'hui
          <b>{{ data.patojdur.today.rank }}</b
          ><sup v-if="data.patojdur.today.rank == 1">er</sup
          ><sup v-else>ème</sup> avec <b>{{ data.patojdur.today.score }}</b>
          <br />Hier <b>{{ data.patojdur.yesterday.rank }}</b
          ><sup v-if="data.patojdur.yesterday.rank == 1">er</sup
          ><sup v-else>ème</sup> avec
          <b>{{ data.patojdur.yesterday.score }}</b></span
        >
      </div>
      <br v-if="data.patojdur" />
      <div class="member-section" v-if="data.popularity">
        <img
          draggable="false"
          @contextmenu.prevent
          :src="require(`@/assets/img/member/${data.gender}/popularity.svg`)"
          alt="Patojdur"
          style="float: left"
        />
        <span
          >Classement : <b>{{ data.popularity.rank }}</b
          ><sup v-if="data.popularity.rank == 1">er</sup
          ><sup v-else>ème</sup> avec
          <b>{{ data.popularity.score }}</b> points<br />Aujourd'hui
          <b>{{ data.popularity.today.rank }}</b
          ><sup v-if="data.popularity.today.rank == 1">er</sup
          ><sup v-else>ème</sup> avec
          <b>{{ data.popularity.today.score }}</b> points<br />Hier
          <b>{{ data.popularity.yesterday.rank }}</b
          ><sup v-if="data.popularity.yesterday.rank == 1">er</sup
          ><sup v-else>ème</sup> avec
          <b>{{ data.popularity.yesterday.score }}</b> points</span
        >
      </div>
      <br v-if="data.popularity" />
      <div class="member-section registration">
        <span
          >Membre n°<b>{{ $route.params.id }}</b
          ><br />
          Dans la communauté depuis le
          <b>{{ formatDate(data.register) }}</b> (<b>{{
            formatDistance(data.register)
          }}</b>
          jours)</span
        >
      </div>
      <br />
      Messages sur le forum :
      <router-link :to="'/bbs/author/' + $route.params.id">{{
        data.forum
      }}</router-link>
    </GlobalCard>
    <template #right-column
      ><router-link v-if="user.role > 50" :to="'/admin/' + $route.params.id"
        ><GlobalButton icon="rules.svg">Modérer</GlobalButton></router-link
      ></template
    >
  </GlobalContainer>
</template>

<script setup lang="ts">
import StrokeText from "@/components/core/StrokeText.vue";
import { useAuthStore } from "@/stores/auth";
const auth = useAuthStore();
const user = auth.user;
import { format, differenceInCalendarDays } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View/Members/Book
// Member page


  data() {
    return {
      data: null,
      duration: 1,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/member.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await api.get("/api/member.json");
    data = req.data;
    next();
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "PPp", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
    formatDistance(date) {
      return differenceInCalendarDays(new Date(), new Date(date), {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
    ban() {
      console.log(
        "Banni" + $route.params.id + " durée " + duration * 86400
      );
    },
  },
  metaInfo: {
    title: "section.member",
  },
};
</script>
<style lang="scss">
.card {
  background-size: contain;
  background-repeat: repeat-x;
}
.male .card,
.unknown .card {
  background-image: url(../../../assets/img/member/male/header.gif);
  background-color: #d5e6f3;
}

.female .card {
  background-image: url(../../../assets/img/member/female/header.gif);
  background-color: #ff96da;
}
</style>
<style lang="scss" scoped>
.member {
  overflow: hidden;
}

.motto {
  margin-left: 33%;
  text-align: left;
}

.member-body {
  background: #eff5fa;
  clear: both;
}

.member-header {
  font-family: "Chimboz Heavy";
  color: #fff;
  font-size: 20px;
  text-shadow: 2px 1px #0008;
  min-height: 90px;
}

.member-header .tiz {
  float: left;
  margin: 40px auto -100% 12%;
  transform: rotate(-5deg) scale(3);
}

.pseudo {
  margin-left: 33%;
  width: 67%;
  font-size: 35px;
  fill: var(--text-button);
  stroke: #f39;
  stroke-width: 3;
  text-shadow: -1px 3px #f39;
  height: 35px;
  overflow: visible;
}

.portrait {
  justify-content: center;
  align-items: center;
  background: url(../../../assets/img/member/portrait.png);
  height: 112px;
  width: 104px;
  margin-bottom: 6px;
  overflow: hidden;
}

.member-section,
.member-body {
  z-index: 1;
  position: relative;
  border-radius: var(--md-gap);
}

.member-section,
.member-text {
  padding: 6px;
}

.member-portrait {
  float: right;
  background: var(--light);
  border-radius: var(--md-gap);
  padding: 6px;
  width: 116px;
}

.member-section {
  background: #a9cbe4;
  display: flex;
  align-items: center;
}
.female .member-section {
  background: #f481cc;
}

.icon {
  display: inline-flex;
  font-family: "Pixelade";
  font-size: 13px;
  justify-content: space-evenly;
  width: 50px;
  height: 50px;
  border: 1px solid var(--main-bg);
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
}

.member-section img {
  padding-right: 6px;
}

.online {
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  color: var(--light);
  justify-content: center;
  width: 100%;
  height: 26px;
  background: linear-gradient(to bottom, #0193ca, #2d4a97);
  border-radius: 10px;
}

.online.tchat {
  background: linear-gradient(to bottom, #81cb00, #40972d);
}

.online img {
  height: 20px;
}

.registration {
  padding: var(--gap);
}
</style>
