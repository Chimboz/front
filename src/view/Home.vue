<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <router-link to="/levels" v-if="data">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div class="number">
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
            </div>
          </div>
        </router-link>
        <router-link to="/mi" v-if="data">
          <div class="messages">
            <div>
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.messages.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="require(`@/asset/img/number/pink/${number}.svg`)"
              />
            </div>
            <img
              draggable="false"
              @contextmenu.prevent
              alt="Messages"
              src="@/asset/img/home/messages.png"
              width="154"
              height="67"
              class="fullwidth"
            />
          </div>
          {{ $t("mi.message", data.messages) }}
        </router-link>
        <router-link to="/friends" v-if="data">
          <div class="friends">
            <div>
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.friends.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="require(`@/asset/img/number/pink/${number}.svg`)"
              />
            </div>
            <img
              draggable="false"
              @contextmenu.prevent
              alt="Friends"
              src="@/asset/img/home/friends.png"
              width="154"
              height="67"
              class="fullwidth"
            />
          </div>
          {{ $t("friends.online", data.friends) }}
        </router-link>
      </GlobalCard>
      <br />
      <Bank />
    </template>
    <img
      draggable="false"
      @contextmenu.prevent
      src="/announce/img.svg"
      alt="Announcement"
      width="468"
      height="137"
      style="width: 100%"
    />
    <br />
    <GlobalCard header="lottery.webp" v-if="data && data.lottery">
      <template #header> </template>
      <div v-if="lottery">
        <div>{{ $t("lottery.firstLine") }}</div>
        {{ $t("lottery.secondLine") }}
      </div>
      <RandomNumber v-else :max="30" :value="gain" :duration="5000" /> <br /><br
        v-if="!lottery"
      />
      <GlobalButton color="orange" @click="handle"
        ><template #prepend
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Lottery handle"
            class="handle"
            height="33"
            width="16"
            src="@/asset/img/lottery/up.svg"
            v-if="lottery" /><img
            draggable="false"
            @contextmenu.prevent
            alt="Lottery handle"
            class="handle"
            height="33"
            width="16"
            src="@/asset/img/lottery/down.svg"
            v-else /></template
        >{{ $t("button.lottery") }}</GlobalButton
      ></GlobalCard
    >
    <br />
    <Radio src="track.flac" />
    <br />
    <GlobalCard color="yellow" justified v-if="data">
      <template #subtop>{{ $t("section.chapaniouz") }}</template>
      <template #header
        ><img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/home/chimboking.webp"
          width="130"
          height="70"
          alt="Chimboking portrait"
          style="float: left; margin: 0 16px 16px 0"
        />
        {{ data.news.title }}
      </template>
      <div class="markdown-body" v-html="formatMessage"></div>
      <div class="news-date">{{ data.news.author }}, {{ formatDate }}</div>
    </GlobalCard>
    <br />
    <GlobalCard v-if="data">
      <template #subtop
        ><router-link to="/chaparazzi" class="chaparazzi-link">{{
          $t("section.chaparazzi")
        }}</router-link></template
      >
      <div class="gallery flex">
        <div
          class="flex col photo"
          v-for="photo of data.gallery"
          :key="photo.name"
          style="margin: auto"
        >
          <router-link :to="'/chaparazzi/' + photo.name">
            <img
              draggable="false"
              @contextmenu.prevent
              :src="`gallery/${photo.name}`"
              :alt="photo.name" /></router-link
          ><b>{{ formatDatePhotos(photo.date) }}</b>
        </div>
      </div>
      <div style="text-align: right">
        <router-link to="/chaparazzi">
          <img
            src="@/asset/img/puce.svg"
            alt="Puce"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          {{ $t("chaparazzi.more") }}
        </router-link>
      </div>
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="blue" top v-if="data">
        <template #header
          ><router-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $t("online", data.connected) }}</router-link
          ></template
        >
        <div>{{ data.members }} {{ $t("members.text", data.members) }}</div>
        <div>
          {{ data.last24 }} {{ $t("members.past", data.last24) }}
        </div></GlobalCard
      ><br />
      <router-link to="/shop">
        <GlobalCard
          color="yellow"
          header="packs.webp"
          :width="154"
          :height="96"
          class="packs"
          v-if="data"
        >
          <template #button>
            <GlobalButton color="yellow" icon="item.svg">{{
              $t("shop.pack")
            }}</GlobalButton>
          </template>
          <Pack
            :name="data.shop[0].pack"
            :looks="data.shop[0].looks"
          /><br /><br />
          <GlobalButton color="yellow" icon="item.svg" class="fullwidth">{{
            $t("shop.item")
          }}</GlobalButton
          ><br />
          <Pack :name="data.shop[1].pack" :looks="data.shop[1].looks" />
        </GlobalCard>
      </router-link>
    </template>
  </GlobalContainer>
</template>

<script>
import Radio from "@/component/Radio.vue";
import RandomNumber from "@/component/core/RandomNumber.vue";
import Bank from "@/component/Bank.vue";
import Pack from "@/component/Pack.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };
import messageRender from "@/module/messageRender.js";

// @vuese
// @group View
// Home page
export default {
  name: "HomeView",
  components: {
    Bank,
    RandomNumber,
    Pack,
    Radio,
  },
  data() {
    return {
      data: null,
      lottery: true,
      gain: 0,
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/home.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/home.json");
    this.data = req.data;
    next();
  },
  methods: {
    async handle({ currentTarget }) {
      this.lottery = false;
      currentTarget.disabled = true;
      const req = await this.api.get("/api/lottery.json");
      this.gain = req.data.gain;
    },
    formatDatePhotos(date) {
      return format(new Date(date), "PP", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
  },
  computed: {
    formatMessage() {
      return messageRender(this.data.news.content);
    },
    formatDate() {
      return format(new Date(this.data.news.date), "PPp", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
  },
  metaInfo: {
    title: "section.home",
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
      { property: "og:image", content: "/android-chrome-192x192.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" },
    ],
  },
};
</script>

<style src="@/asset/css/bbs/markdown.css"></style>
<style src="katex/dist/katex.min.css"></style>
<style src="@/asset/css/bbs/code.css"></style>
<style lang="scss">
.packs .card-btn {
  background: linear-gradient(
    to bottom,
    var(--dark-card-blue),
    var(--dark-card-blue) 50%,
    var(--main-card-yellow) 50%
  ) !important;
}
</style>
<style lang="scss" scoped>
.news-date {
  color: var(--title-card-yellow);
  font-style: italic;
  text-align: right;
}

.chaparazzi-link {
  font-weight: normal;
  fill: var(--light);
}

.chaparazzi-link:hover {
  text-decoration: none;
}

.gallery .photo {
  width: 30%;
}

.gallery .photo img {
  border: 1px solid var(--main-bg);
  width: 100%;
}

.messages div {
  transform: translate3d(20%, 200%, 0);
}

.friends div {
  transform: translate3d(0, 210%, 0);
}

.handle {
  margin-left: calc(-4% - 16px);
  margin-top: -16px;
  border-image: url(../asset/img/lottery/down.svg);
}
</style>
