<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <template #header>
          <NuxtLink to="/online">
            <h1>{{ data.connected }}</h1>
            {{ $t('online', data.connected) }}
          </NuxtLink>
        </template>
        <div>{{ data.members }} {{ $t('members.text', data.members) }}</div>
        {{ data.last24 }} {{ $t('members.past', data.last24) }}
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
            <Button type="button" color="yellow" icon="register.svg">
              {{ $t('button.pack') }}
            </Button>
          </template>
          <Pack name="supporter" :looks="data.shop.looks" />
        </Card>
      </NuxtLink>
    </template>
    <Demo class="mb-3" />
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
            >
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
          >
          {{ $t('chaparazzi.more') }}
        </NuxtLink>
      </div>
    </Card>
    <template #right-column>
      <Card color="blue" header="games.gif">
        <div class="fullwidth">
          <img src="@/assets/img/game/bacteria/head.gif" alt="Bacteria">
          <img src="@/assets/img/game/bacteria/bg.gif" alt="">
          <Avatar
            style="margin-top: -66px; margin-bottom: 13px"
            :avatar="data.bacteria.user.look.avatar"
            :emote="data.bacteria.user.look.emote"
            :hat="data.bacteria.user.look.hat"
            :body="data.bacteria.user.look.body"
            :shoe="data.bacteria.user.look.shoe"
            :item0="data.bacteria.user.look.item0"
            :item1="data.bacteria.user.look.item1"
            :item2="data.bacteria.user.look.item2"
          />
          <div class="game-champion">
            <LinkUser :user="data.bacteria.user" /><br>{{
              $t('champion.bacteria')
            }}
          </div>
          <img src="@/assets/img/game/patojdur/head.gif" alt="Patojdur">
          <img src="@/assets/img/game/patojdur/bg.gif" alt="">
          <Avatar
            style="margin-top: -66px; margin-bottom: 13px"
            :avatar="data.patojdur.user.look.avatar"
            :emote="data.patojdur.user.look.emote"
            :hat="data.patojdur.user.look.hat"
            :body="data.patojdur.user.look.body"
            :shoe="data.patojdur.user.look.shoe"
            :item0="data.patojdur.user.look.item0"
            :item1="data.patojdur.user.look.item1"
            :item2="data.patojdur.user.look.item2"
          />
          <div class="game-champion">
            <LinkUser :user="data.patojdur.user" /><br>{{
              $t('champion.patojdur')
            }}
          </div>
          <img src="@/assets/img/game/mazo/head.gif" alt="Mazo">
          <img src="@/assets/img/game/mazo/bg.gif" alt="">
          <Avatar
            style="margin-top: -66px; margin-bottom: 13px"
            :avatar="data.mazo.user.look.avatar"
            :emote="data.mazo.user.look.emote"
            :hat="data.mazo.user.look.hat"
            :body="data.mazo.user.look.body"
            :shoe="data.mazo.user.look.shoe"
            :item0="data.mazo.user.look.item0"
            :item1="data.mazo.user.look.item1"
            :item2="data.mazo.user.look.item2"
          />
          <div class="game-champion">
            <LinkUser :user="data.mazo.user" /><br>{{ $t('champion.mazo') }}
          </div>
        </div>
      </Card>
    </template>
  </Container>
</template>
<script setup lang="ts">
const { data } = await useFetch<any>('https://chimboz.fr/api/right');

const { t } = useI18n();
useHead({ title: t('login') });
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
.login-form {
  justify-content: center;
}

.game-champion {
  background: linear-gradient(to bottom, #58a8db, var(--selected-main-card));
  margin-bottom: var(--md-gap);
}

.chaparazzi-link {
  font-weight: normal;
  fill: var(--light);
}

.chaparazzi-link:hover {
  text-decoration: none;
}

.gallery {
  flex-wrap: wrap;
}

.gallery .photo {
  width: 30%;
}

.gallery .photo img {
  border: 1px solid var(--main-bg);
  width: 100%;
}
</style>
