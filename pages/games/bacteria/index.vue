<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Games" />
        </div>
      </Card><br>
      <Rules bot />
    </template>
    <Card header="bacteria.webp" left bg="bacteria.gif">
      <div class="flex centered hstack">
        <NuxtLink
          to="#records"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;Les records
        </NuxtLink>
        <NuxtLink
          to="#best"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;Les meilleurs
        </NuxtLink>
        <NuxtLink
          to="#worst"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;Les pires
        </NuxtLink>
        <NuxtLink
          to="#groups"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;Les groupes
        </NuxtLink>
        <NuxtLink to="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            width="14"
            height="13"
            alt="Help icon"
            src="@/assets/img/icon/button/help.svg"
            @contextmenu.prevent
          >&nbsp;Comment jouer&nbsp;?
        </NuxtLink>
      </div>
      <br>
      <img
        draggable="false"
        src="@/assets/img/game/bacteria/preview.webp"
        width="200"
        height="191"
        alt="A game of bacteria"
        title="A game of bacteria"
        style="float: left; margin-right: 16px; border: 3px solid #6699cc"
        @contextmenu.prevent
      >
      Bacteria est le jeu ancestral de notre île. Depuis des milliers d'années,
      des membres dédient leur vie à s'entraîner à cet art si complexe et
      profond.
      <br>
      Des millions de combats ont déjà eu lieu, et encore plus de parties sont à
      venir.
      <br>
      Retrouve sur cette page le
      <a href="#top">classement des champions</a> et toute les infos dont tu as
      besoin, pour devenir toi aussi, un <b>guerrier Bacteria</b> .<br>
      <br>
    </Card>
    <br>
    <Card id="tutorial" left>
      <template #header>
        Comment jouer&nbsp;?
      </template>

      <img
        draggable="false"
        src="@/assets/img/game/bacteria/howto.png"
        alt="A game of bacteria"
        width="194"
        height="128"
        title="A game of bacteria"
        style="float: left; margin-right: 16px; border: 3px solid #6699cc"
        @contextmenu.prevent
      >
      Il y a 2 endroits pour jouer: <b>Bacteria débutants</b> et
      <b>Bacteria Pro</b> Si tu ne sais pas comment y aller demande ton chemin
      !<br>
      <br>
      Pour jouer c'est simple, va dans une cabine, elle s'allume si elle
      t'accepte, et quand un membre ou un visiteur va dans l'autre cabine, la
      partie démarre !<br><b>Attention</b>&nbsp;: Les visiteurs ne peuvent
      jouer qu'en <b>Bacteria débutants</b>, les cabines de
      <b>Bacteria Pro</b> sont réservées aux membres !
    </Card><br>
    <Card id="records">
      <template #header>
        Records !
      </template>
      <template #subtitle>
        Dans le bon ou le mauvais, ce sont les meilleurs !
      </template>
      <b>parties jouées</b><br>
      <div class="fullwidth light">
        <LinkUser :user="data.records.played.user" /> avec
        {{ data.records.played.record }} parties jouées&nbsp;!
      </div>
      <br>
      <b>parties gagnées</b><br>
      <div class="fullwidth light">
        <LinkUser :user="data.records.win.user" /> avec
        {{ data.records.win.record }} parties gagnées&nbsp;!
      </div>
      <br>
      <b>parties perdues</b><br>
      <div class="fullwidth light">
        <LinkUser :user="data.records.lost.user" /> avec
        {{ data.records.lost.record }} parties perdues&nbsp;!
      </div>
      <br>
      <b>match nuls</b><br>
      <div class="fullwidth light">
        <LinkUser :user="data.records.draw.user" /> avec
        {{ data.records.draw.record }} match nuls&nbsp;!
      </div>
    </Card>
    <br><Card id="best">
      <template #header>
        Les 20 plus acharnés de Bacteria !
      </template>
      <template #subtitle>
        Des heures de phagocytage acharné pour en arriver la...
      </template>
      Les 10 premiers du classement remportent le
      <b>casque Bacteria</b>.<br>
      <br>
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="40">
          <col width="100%">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Score</th>
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td><LinkUser :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
            <td>
              <Tooltip>
                <template #tooltip>
                  <b>W{{ rank.win }}/D{{ rank.draw }}/L{{ rank.lose }}</b>
                </template>
                <Progress :win="rank.win" :draw="rank.draw" :lose="rank.lose" />
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br><Card id="worst">
      <template #header>
        Les 20 pires brèles de Bacteria !
      </template>
      <template #subtitle>
        Les meilleurs... en partant du bas !
      </template>
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="40">
          <col width="100%">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Score</th>
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.worst" :key="index">
            <td>{{ index + 1 }}</td>
            <td><LinkUser :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
            <td>
              <Tooltip>
                <template #tooltip>
                  <b>W{{ rank.win }}/D{{ rank.draw }}/L{{ rank.lose }}</b>
                </template>
                <Progress :win="rank.win" :draw="rank.draw" :lose="rank.lose" />
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br><Card id="groups">
      <template #header>
        Les 10 meilleurs groupes de Bacteria !
      </template>
      <template #subtitle>
        Plus on est de fous...
      </template>
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="40">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Groupe</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.groups" :key="index">
            <td>{{ index + 1 }}</td>
            <td><LinkGroup :group="rank.group" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column>
      <Card
        header="ensavoirplus.webp"
        :width="154"
        :height="46"
        top
        color="blue"
        left
      >
        Toutes les infos, les techniques, news.<br>
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >&nbsp;<NuxtLink to="/bbs/5-1">
          BBS de Bacteria
        </NuxtLink><br>
        <br>
        Lis l'histoire sur <b>Bacteria</b> écrite par <b>Kunu</b>.<br>
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >&nbsp;<NuxtLink to="/games/bacteria/story">
          Bacteria Sanctuary
        </NuxtLink><br>
        <br>
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >&nbsp;<b>{{ data.stats.player }}</b> membres joueurs de
        <b>Bacteria</b>.<br>
        <br>
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >&nbsp;<b>{{ data.stats.games }}</b> parties ont été jouées.<br>
        <br>
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >&nbsp;<b>{{ data.stats.yesterday }}</b> parties hier.
      </Card>
    </template>
  </Container>
</template>

<script setup lang="ts">
const { data } = await useFetch<any>('https://chimboz.fr/api/games/bacteria')
data.value.stats = {
  player: 1,
  games: 2,
  yesterday: 3
}

const { t } = useI18n()
useHead({ title: t('bacteria') })
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: var(--light);
  padding: var(--sm-gap) 0;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}
</style>
