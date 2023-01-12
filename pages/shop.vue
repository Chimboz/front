<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div>
      </Card><br>
      <Rules bot />
    </template>
    <Card

      color="yellow"
      header="shop.svg"
      :height="109"
      style="position: relative"
    >
      <audio autoplay>
        <source src="@/assets/sound/shop/moving_stars.flac" type="audio/flac">
      </audio>
      <audio autoplay>
        <source src="@/assets/sound/shop/preview.mp3" type="audio/mpeg">
      </audio>
      <audio ref="clickAudio">
        <source src="@/assets/sound/shop/show.wav" type="audio/wav">
      </audio>
      <audio ref="buyAudio">
        <source src="@/assets/sound/shop/selected.mp3" type="audio/mpeg">
      </audio>
      <div class="preview fullwidth flex">
        <img
          draggable="false"
          class="pack-preview"
          alt="Pack preview"
          height="196"
          width="468"
          src="@/assets/img/shop/cabin.svg"
          @contextmenu.prevent
        >
        <div class="preview-tiz flex centered">
          <Avatar
            :avatar="shown.looks[0].avatar"
            :emote="shown.looks[0].emote"
            :hat="shown.looks[0].hat"
            :body="shown.looks[0].body"
            :shoe="shown.looks[0].shoe"
            :item0="shown.looks[0].item0"
            :item1="shown.looks[0].item1"
            :item2="shown.looks[0].item2"
          />
          <Avatar
            v-if="shown.looks.length === 2"
            :avatar="shown.looks[1].avatar"
            :emote="shown.looks[1].emote"
            :hat="shown.looks[1].hat"
            :body="shown.looks[1].body"
            :shoe="shown.looks[1].shoe"
            :item0="shown.looks[1].item0"
            :item1="shown.looks[1].item1"
            :item2="shown.looks[1].item2"
          />
          <div class="preview-price">
            <img
              src="@/assets/img/shop/circle.svg"
              width="58"
              height="57"
              draggable="false"
              alt="Shop price"
              @contextmenu.prevent
            >
            <span>{{ shown.cost }}p.</span>
          </div>
        </div>
        <div>
          <div class="preview-infos">
            <br><br>
            <h3>Pack {{ shown.name }}</h3>
            {{ shown.description }}<br><br>
            <Button
              v-if="user"
              type="button"
              color="yellow"
              icon="credits.svg"
              @click.prevent="buy()"
            >
              Acheter
            </Button>
          </div>
        </div>
      </div>
      <h3>Les dernières fringues</h3>
      <div class="menu flex">
        <div class="flex hstack">
          <Pack
            v-for="pack of data.packs"
            :key="pack.name"
            :name="pack.name"
            :looks="pack.looks"
            @click.prevent="show(pack)"
          />
        </div>
      </div>
    </Card>
    <template #right-column>
      <Bank />
    </template>
  </Container>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth'

const { $eventBus } = useNuxtApp()
const auth = useAuthStore()
const user = computed(() => auth.user)

const { data } = await useFetch<any>('https://chimboz.fr/api/shop')
const shown = ref<any>(data.value.packs[0])
const buyAudio = ref<null | HTMLAudioElement>(null)
const clickAudio = ref<null | HTMLAudioElement>(null)

function show (pack: any) {
  shown.value = pack
  clickAudio.value!.play()
}
function buy () {
  buyAudio.value!.play()
  $eventBus.emit('confirmation', {
    message: 'confirm.buy',
    api: 'shop/buy',
    payload: {
      id: shown.value.id
    }
  })
}

useHead({ title: 'section.shop' })
</script>
<style lang="scss">
.menu .pack {
  max-width: calc(25% - var(--sm-gap));
}
</style>
<style lang="scss" scoped>
.pack-preview {
  width: 100%;
  margin-top: -30px;
  margin-right: -100%;
  float: right;
}

.pack-preview::after {
  clear: both;
}

h3 {
  border-bottom: 2px solid;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  color: #ff2fac;
  font-size: var(--lg-font-size);
  line-height: 14px;
  text-align: left;
  margin-bottom: 6px;
}

.menu {
  position: relative;
}

.menu > div {
  position: relative;
  flex-wrap: wrap;
  max-height: 450px;
  overflow-y: auto;
  padding: 6px 0;
}

.preview {
  width: 100%;
}

.preview-tiz {
  width: 46%;
  justify-content: center;
  position: relative;
}

.preview-price {
  position: absolute;
  right: 0;
  top: 0;
  width: 58px;
  height: 57px;
}

.preview-price img {
  animation: spin linear 0.5s infinite;
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-20deg);
  }
}

.preview-price span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(-20deg);
  color: var(--light);
  font-size: 20px;
  font-family: "Impact";
}

.preview-infos {
  width: 52%;
  position: absolute;
  text-align: left;
}

.preview-tiz .tiz {
  transform: scale(1.8);
}

.preview-tiz .tiz:first-child {
  z-index: 1;
}

.preview-tiz .tiz:nth-child(2) {
  transform: scale(1.6);
}

.btn-shop {
  text-transform: uppercase;
  border-radius: 4px;
  font-family: "Pixelated Verdana 10";
  border: 1px solid;
  border-color: #f0e0b8 #f0e0b8 #b4aa6e #f0e0b8;
  color: var(--light);
  font-size: 11px;
  background: linear-gradient(
    to bottom,
    #dfbe20,
    #ceaf1e 49%,
    #b59c2a 51%,
    #e8d8a0
  );
  padding: 4px;
}
</style>
