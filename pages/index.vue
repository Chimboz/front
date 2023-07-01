<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <NuxtLink to="/levels">
          <div class="level fullwidth">
            {{ $t('level') }}
            <div class="number">
              <Number :number="data.level" />
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/messenger" class="block mt-2">
          <div class="messages">
            <img
              draggable="false"
              alt="Messages"
              src="@/assets/img/home/messages.png"
              width="154"
              height="67"
              class="fullwidth"
              @contextmenu.prevent
            />
            <div>
              <Number :number="data.messages" color="pink" />
            </div>
          </div>
          {{ $t('mi.message', data.messages) }}
        </NuxtLink>
        <NuxtLink to="/friends" class="block mt-2">
          <div class="friends">
            <img
              draggable="false"
              alt="Friends"
              src="@/assets/img/home/friends.png"
              width="154"
              height="67"
              class="fullwidth"
              @contextmenu.prevent
            />
            <div>
              <Number :number="data.friends" color="pink" />
            </div>
          </div>
          {{ $t('friends.online', data.friends) }}
        </NuxtLink>
      </Card>
      <Bank />
    </template>
    <img
      draggable="false"
      src="/announce/img.svg"
      alt="Announcement"
      width="468"
      height="137"
      class="mb-3"
      style="width: 100%; height: auto"
      @contextmenu.prevent
    />
    <Card header="lottery.webp">
      <template #header />
      <div class="mb-3">
        <div v-if="lottery">
          <div>{{ $t('lottery.firstLine') }}</div>
          {{ $t('lottery.secondLine') }}
        </div>
        <RandomNumber v-else :max="30" :value="gain" />
      </div>
      <Button type="button" color="orange" :disabled="!lottery" @click="handle">
        <template #prepend>
          <img
            v-if="lottery"
            draggable="false"
            alt="Lottery handle"
            class="handle"
            height="33"
            width="16"
            src="@/assets/img/lottery/up.svg"
            @contextmenu.prevent
          /><img
            v-else
            draggable="false"
            alt="Lottery handle"
            class="handle"
            height="33"
            width="16"
            src="@/assets/img/lottery/down.svg"
            @contextmenu.prevent
          /> </template
        >{{ $t('button.lottery') }}
      </Button>
    </Card>
    <Radio src="track.flac" />
    <Card color="yellow" left>
      <template #subtop>
        {{ $t('chapaniouz') }}
      </template>
      <template #header>
        <img
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
      <Markdown :src="data.news.content" />
      <div class="news-date">
        {{ data.news.author }}, {{ $format(data.news.date, 'PPp') }}
      </div>
    </Card>
    <Card>
      <template #subtop>
        <NuxtLink to="/chaparazzi" class="chaparazzi-link">
          {{ $t('chaparazzi') }}
        </NuxtLink>
      </template>
      <div class="gallery flex">
        <div
          v-for="photo of data.gallery"
          :key="photo.name"
          class="flex col photo"
          style="margin: auto"
        >
          <NuxtLink :to="'/chaparazzi/' + photo.name">
            <img
              draggable="false"
              :src="`gallery/${photo.name}`"
              :alt="photo.name"
              @contextmenu.prevent
            /> </NuxtLink
          ><b>{{ $format(photo.date, 'PP') }}</b>
        </div>
      </div>
      <div style="text-align: right">
        <NuxtLink to="/chaparazzi">
          <img
            src="@/assets/img/puce.svg"
            alt="Puce"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          {{ $t('chaparazzi.more') }}
        </NuxtLink>
      </div>
    </Card>
    <template #right-column>
      <Card color="blue" top>
        <template #header>
          <NuxtLink to="/online" class="mb-2 block">
            <h1>{{ data.connected }}</h1>
            {{ $t('online', data.connected) }}
          </NuxtLink>
        </template>
        <div>{{ data.members }} {{ $t('members.text', data.members) }}</div>
        <div>{{ data.last24 }} {{ $t('members.past', data.last24) }}</div>
      </Card>
      <NuxtLink to="/shop">
        <Card
          color="yellow"
          header="packs.webp"
          :width="154"
          :height="96"
          class="packs"
        >
          <template #button>
            <Button type="button" color="yellow" icon="item.svg">
              {{ $t('shop.pack') }}
            </Button>
          </template>
          <Pack :name="data.shop[0].pack" :looks="data.shop[0].looks" />
          <Button
            type="button"
            color="yellow"
            icon="item.svg"
            class="fullwidth my-3"
          >
            {{ $t('shop.item') }}
          </Button>
          <Pack :name="data.shop[1].pack" :looks="data.shop[1].looks" />
        </Card>
      </NuxtLink>
    </template>
  </Container>
</template>

<script setup lang="ts">
// data.value = (await useFetch("home")).data;
// TODO remove
const { data } = await useFetch<any>('/api/home');
const lottery = ref(true);
const gain = ref(0);

async function handle() {
  lottery.value = false;
  gain.value = (await useFetch<any>('/api/lottery')).data.value.gain;
}

definePageMeta({
  category: 'home',
  section: 'home',
});
const { t } = useI18n();
useHead({ title: computed(() => t('home')) });
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

.friends,
.messages {
  position: relative;
}

.messages div,
.friends div {
  position: absolute;
  transform: translate(-50%, -50%);
}

.messages div,
.friends div {
  left: 50%;
  top: 50%;
}

.messages div {
  left: 70%;
}

.handle {
  margin-left: calc(-4% - 16px);
  margin-top: -16px;
  border-image: url(@/assets/img/lottery/down.svg);
}
</style>
