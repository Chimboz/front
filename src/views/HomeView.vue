<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <router-link v-if="data" to="/levels">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div class="number">
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
            </div>
          </div>
        </router-link>
        <router-link to="/mi">
          <div class="messages">
            <div v-if="data">
              <img
                v-for="number in data.messages.toString(10)"
                :key="number.index"
                draggable="false"
                :alt="number"
                width="19"
                height="21"
                :src="asset(`img/number/pink/${number}.svg`)"
                @contextmenu.prevent
              />
            </div>
            <img
              draggable="false"
              alt="Messages"
              src="@/assets/img/home/messages.png"
              width="154"
              height="67"
              class="fullwidth"
              @contextmenu.prevent
            />
          </div>
          {{ $t("mi.message", data.messages) }}
        </router-link>
        <router-link to="/friends">
          <div class="friends">
            <div v-if="data">
              <img
                v-for="number in data.friends.toString(10)"
                :key="number.index"
                draggable="false"
                :alt="number"
                width="19"
                height="21"
                :src="asset(`img/number/pink/${number}.svg`)"
                @contextmenu.prevent
              />
            </div>
            <img
              draggable="false"
              alt="Friends"
              src="@/assets/img/home/friends.png"
              width="154"
              height="67"
              class="fullwidth"
              @contextmenu.prevent
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
      src="/announce/img.svg"
      alt="Announcement"
      width="468"
      height="137"
      style="width: 100%"
      @contextmenu.prevent
    />
    <br />
    <GlobalCard v-if="data && data.lottery" header="lottery.webp">
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
            v-if="lottery"
            draggable="false"
            alt="Lottery handle"
            class="handle"
            height="33"
            width="16"
            src="@/assets/img/lottery/up.svg"
            @contextmenu.prevent /><img
            v-else
            draggable="false"
            alt="Lottery handle"
            class="handle"
            height="33"
            width="16"
            src="@/assets/img/lottery/down.svg"
            @contextmenu.prevent /></template
        >{{ $t("button.lottery") }}</GlobalButton
      ></GlobalCard
    >
    <br />
    <Radio src="track.flac" />
    <br />
    <GlobalCard v-if="data" color="yellow" justified>
      <template #subtop>{{ $t("section.chapaniouz") }}</template>
      <template #header
        ><img
          draggable="false"
          src="@/assets/img/home/chimboking.webp"
          width="130"
          height="70"
          alt="Chimboking portrait"
          style="float: left; margin: 0 16px 16px 0"
          @contextmenu.prevent
        />
        {{ data.news.title }}
      </template>
      <div
        class="markdown-body"
        v-html="messageRender(data.news.content)"
      ></div>
      <div class="news-date">{{ data.news.author }}, {{ formatDate() }}</div>
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
          v-for="photo of data.gallery"
          :key="photo.name"
          class="flex col photo"
          style="margin: auto"
        >
          <router-link :to="'/chaparazzi/' + photo.name">
            <img
              draggable="false"
              :src="`gallery/${photo.name}`"
              :alt="photo.name"
              @contextmenu.prevent /></router-link
          ><b>{{ formatDatePhotos(photo.date) }}</b>
        </div>
      </div>
      <div style="text-align: right">
        <router-link to="/chaparazzi">
          <img
            src="@/assets/img/puce.svg"
            alt="Puce"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          {{ $t("chaparazzi.more") }}
        </router-link>
      </div>
    </GlobalCard>
    <template #right-column
      ><GlobalCard v-if="data" color="blue" top>
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
          v-if="data"
          color="yellow"
          header="packs.webp"
          :width="154"
          :height="96"
          class="packs"
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

<script setup lang="ts">
import Radio from "@/components/RadioComponent.vue";
import RandomNumber from "@/components/core/RandomNumberComponent.vue";
import Bank from "@/components/BankComponent.vue";
import Pack from "@/components/PackComponent.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
import messageRender from "@/modules/messageRender";
import api from "@/modules/api";
import { asset, fetchData } from "@/utils";

const locales = { fr, enGB };

// @vuese
// @group View
// Home page
const data: any = ref(undefined);
const lottery = ref(true);
const gain = ref(0);

fetchData(async () => {
  // data.value = (await api.get("home")).data;
  // TODO remove
  data.value = (await api.get("http://localhost:5173/api/home.json")).data;
});

async function handle({ currentTarget }: { currentTarget: HTMLButtonElement }) {
  lottery.value = false;
  currentTarget.disabled = true;

  // TODO branch api
  const req = await api.get("/api/lottery.json");
  gain.value = req.data.gain;
}
function formatDatePhotos(date: number) {
  return format(new Date(date), "PP", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}

function formatDate() {
  return format(new Date(data.value.news.date), "PPp", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}

// meta title section.home
</script>
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
  border-image: url(../assets/img/lottery/down.svg);
}
</style>
