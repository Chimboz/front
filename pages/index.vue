<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <NuxtLink to="/levels">
          <div class="level fullwidth">
            {{ $t('level') }}
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
        </NuxtLink>
        <NuxtLink to="/messenger">
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
          </div>
          {{ $t('mi.message', data.messages) }}
        </NuxtLink>
        <NuxtLink to="/friends">
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
          </div>
          {{ $t('friends.online', data.friends) }}
        </NuxtLink>
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
      style="width: 100%; height: auto"
      @contextmenu.prevent
    />
    <br />
    <Card header="lottery.webp">
      <template #header />
      <div v-if="lottery">
        <div>{{ $t('lottery.firstLine') }}</div>
        {{ $t('lottery.secondLine') }}
      </div>
      <RandomNumber v-else :max="30" :value="gain" /> <br /><br
        v-if="!lottery"
      />
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
          />
        </template>{{ $t('button.lottery') }}
      </Button>
    </Card>
    <br />
    <Radio src="track.flac" />
    <br />
    <Card color="yellow" justified>
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
      <div class="markdown-body" v-html="$messageRender(data.news.content)" />
      <div class="news-date">
        {{ data.news.author }}, {{ $format(data.news.date, 'PPp') }}
      </div>
    </Card>
    <br />
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
            />
          </NuxtLink><b>{{ $format(photo.date, 'PP') }}</b>
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
          <NuxtLink to="/online">
            <h1>{{ data.connected }}</h1>
            {{ $t('online', data.connected) }}
          </NuxtLink>
        </template>
        <div>{{ data.members }} {{ $t('members.text', data.members) }}</div>
        <div>
          {{ data.last24 }} {{ $t('members.past', data.last24) }}
        </div>
      </Card><br />
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
          <Pack
            :name="data.shop[0].pack"
            :looks="data.shop[0].looks"
          /><br /><br />
          <Button
            type="button"
            color="yellow"
            icon="item.svg"
            class="fullwidth"
          >
            {{ $t('shop.item') }}
          </Button><br />
          <Pack :name="data.shop[1].pack" :looks="data.shop[1].looks" />
        </Card>
      </NuxtLink>
    </template>
  </Container>
</template>

<script setup lang="ts">
// data.value = (await useFetch("home")).data;
// TODO remove
const { data } = await useFetch<any>('/api/home')
const lottery = ref(true)
const gain = ref(0)

async function handle () {
  lottery.value = false
  gain.value = (await useFetch<any>('/api/lottery')).data.value.gain
}

const { t } = useI18n()
useHead({ title: t('home') })
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
  transform: translate3d(20%, -210%, 0);
}

.friends div {
  transform: translate3d(0, -205%, 0);
}

.handle {
  margin-left: calc(-4% - 16px);
  margin-top: -16px;
  border-image: url(../assets/img/lottery/down.svg);
}
</style>
