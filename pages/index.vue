<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
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
        <router-link v-if="data" to="/mi">
          <div class="messages">
            <div>
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
        <router-link v-if="data" to="/friends">
          <div class="friends">
            <div>
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
      </Card>
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
    <Card v-if="data && data.lottery" header="lottery.webp">
      <template #header> </template>
      <div v-if="lottery">
        <div>{{ $t("lottery.firstLine") }}</div>
        {{ $t("lottery.secondLine") }}
      </div>
      <RandomNumber v-else :max="30" :value="gain" /> <br /><br
        v-if="!lottery"
      />
      <Button type="button" color="orange" @click="handle"
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
        >{{ $t("button.lottery") }}</Button
      ></Card
    >
    <br />
    <Radio src="track.flac" />
    <br />
    <Card v-if="data" color="yellow" justified>
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
      <div class="news-date">
        {{ data.news.author }}, {{ format(data.news.date, "PPp") }}
      </div>
    </Card>
    <br />
    <Card v-if="data">
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
          ><b>{{ format(photo.date, "PP") }}</b>
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
    </Card>
    <template #right-column
      ><Card v-if="data" color="blue" top>
        <template #header
          ><router-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $t("online", data.connected) }}</router-link
          ></template
        >
        <div>{{ data.members }} {{ $t("members.text", data.members) }}</div>
        <div>
          {{ data.last24 }} {{ $t("members.past", data.last24) }}
        </div></Card
      ><br />
      <router-link to="/shop">
        <Card
          v-if="data"
          color="yellow"
          header="packs.webp"
          :width="154"
          :height="96"
          class="packs"
        >
          <template #button>
            <Button type="button" color="yellow" icon="item.svg">{{
              $t("shop.pack")
            }}</Button>
          </template>
          <Pack
            :name="data.shop[0].pack"
            :looks="data.shop[0].looks"
          /><br /><br />
          <Button
            type="button"
            color="yellow"
            icon="item.svg"
            class="fullwidth"
            >{{ $t("shop.item") }}</Button
          ><br />
          <Pack :name="data.shop[1].pack" :looks="data.shop[1].looks" />
        </Card>
      </router-link>
    </template>
  </Container>
</template>

<script setup lang="ts">




import { ref } from "vue";
import { useHead } from "@vueuse/head";
import messageRender from "@/plugins/messageRender";
import api from "@/plugins/api";
import { asset, fetchData } from "@/utils";
import { format } from "@/utils/date";

// data.value = (await useFetch("home")).data;
// TODO remove
const { data } = await useFetch(`https://localhost:3000/api/home.json`)
const lottery = ref(true);
const gain = ref(0);

async function handle({ currentTarget }: { currentTarget: HTMLButtonElement }) {
  lottery.value = false;
  currentTarget.disabled = true;

  // data.value = (await useFetch("randomppt")).data;
  // TODO remove
  gain.value = (
    await useFetch(`https://localhost:3000/api/lottery.json`)
  ).data.gain;
}

useHead({ title: "section.home" });
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
