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
    <Card header="patojdur.webp" left bg="patojdur.gif" :height="77">
      <div class="flex centered hstack">
        <NuxtLink
          to="#gameplay"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            @contextmenu.prevent
          >&nbsp;Le gameplay
        </NuxtLink>
        <NuxtLink
          to="#modes"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            @contextmenu.prevent
          >&nbsp;Les modes
        </NuxtLink>
        <NuxtLink
          to="#races"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            @contextmenu.prevent
          >&nbsp;Les courses
        </NuxtLink>
        <NuxtLink
          to="#yesterday"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            @contextmenu.prevent
          >&nbsp;Champion du jour
        </NuxtLink>
        <NuxtLink
          to="#today"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            @contextmenu.prevent
          >&nbsp;Classement du jour
        </NuxtLink>
        <NuxtLink
          to="#general"
          class="btn-sm blue-bg"
        >
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            @contextmenu.prevent
          >&nbsp;Classement général
        </NuxtLink>
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
            @contextmenu.prevent
          >&nbsp;Les records
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
        src="@/assets/img/game/patojdur/preview.webp"
        width="200"
        height="170"
        alt="A game of bacteria"
        title="A game of bacteria"
        style="float: left; margin-right: 16px; border: 3px solid #6699cc"
        @contextmenu.prevent
      >
      Patojdur est un jeu de style course-labyrinthe qui consiste à traverser à
      la nage les marécages le plus vite possible. A toi d’éviter les roseaux,
      les nénuphars et les plantes aquatiques, trouver les bons courants afin de
      faire le meilleur chrono du jour ou de battre le record de la course !
      <br>
      <br>
      Les grenouilles seront là pour t’encourager ou se moquer de toi, mais seul
      ton courage et ta persévérance te permettront de devenir le meilleur
      patojeur !
    </Card>
    <br>
    <Card id="tutorial" left>
      <template #header>
        Comment jouer&nbsp;?
      </template>
      <b>Attention : les visiteurs ne peuvent pas jouer !</b><br>
      Il faut te rendre dans les marécages, demande ton chemin si tu ne sais pas
      comment y aller.<br>
      Va ensuite te placer sur un des emplacements tout à gauche de la mare, et
      attends ton tour ! (Les grenouilles n'autorisent que 5 <b>Patojeurs</b> en
      même temps, sécurité oblige).<br>
      Quand ton tour arrive, tu te retrouves dans l'eau, court chargement,
      compte à rebours (3, 2, 1, GO !) et voilà, à toi de traverser la mare en
      nageant le plus vite possible !<br>
      <br>
      Bonne Chance ! tu en auras besoin, la concurrence sera rude ! La victoire
      au millième près !
    </Card><br>
    <Card id="gameplay" left>
      <template #header>
        Gameplay
      </template>
      <b>Patojdur</b> se joue aux touches directionnelles (les flèches).<br>
      Avance dans la direction de ton choix (haut, bas, droite ou gauche), quand
      tu fais du sur-place, c'est que tu es bloqué, essaye une autre direction !
      Les obstacles ne sont pas forcément visibles !<br>
      Les bulles te téléportent dans des endroits plus ou moins avantageux, à
      toi de trouver les bonnes !<br>
      Pas de note esthétique ! Le gagnant du jour est celui qui aura traversé le
      marécage le plus rapidement !<br>
      <br>
      <br>
      <b>Départ Boost</b> : Pour obtenir un départ <b>boost</b>, tu dois
      effectuer la bonne combinaison de touches durant le compte à rebours.<br>
      <br>
      Un bonne combinaison est constituée de <b>5 touches</b>, seules les
      touches directionnelles (les flèches) sont utilisées.<br>
      <br>
      Exemple d'une combinaison (fausse) : Flèche Gauche, Flèche Gauche, Flèche
      Droite, Flèche Haut, Flèche Droite. (GGDHD)<br>
      <br>
      <b>Indice</b> : pour <b>Burnin'Flak</b>, la bonne combinaison commence par
      Flèche Gauche, Flèche Haut... (GH...)
    </Card><br>
    <Card id="modes" left>
      <template #header>
        Les modes
      </template>
      Pour le moment, seul le mode <b>single</b> est accessible.
    </Card><br>
    <Card id="races" left>
      <template #header>
        Les courses
      </template>
      <b>10 courses différentes</b>, plus ou moins difficiles. Chaque jour une
      course différente, un classement différent !<br>
      <br>
      Durant la phase de test de <b>Patojdur</b>, seule la course n°1
      (<b>Burnin'Flak</b>) est accessible.
    </Card><br>
    <Card id="records">
      <template #header>
        Records !
      </template>
      <template #subtitle>
        Ce jour là, il a comme volé sur l'eau...
      </template>
      <table class="fullwidth">
        <colgroup>
          <col width="20%">
          <col width="20%">
          <col width="30%">
          <col width="30%">
        </colgroup>
        <thead>
          <tr>
            <th>Course</th>
            <th>Record</th>
            <th>Membre</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.record" :key="index">
            <td>{{ rank.race }}</td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
            <td><LinkUser :user="rank.user" /></td>
            <td class="left">
              <b>{{ $format(rank.date, "PPp") }}</b><br><i>{{ rank.day }}e journée</i>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br><Card id="yesterday">
      <template #header>
        Les champions du jour !
      </template>
      <template #subtitle>
        Hier, ils ont cloué le bec des grenouilles... et des autres membres
        !
      </template>
      Les 10 premiers du classement remportent le
      <b>casque Patojdur</b> pour la journée.<br>
      <br>
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="60">
          <col width="60">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Temps</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.yesterday" :key="index">
            <td>{{ index + 1 }}</td>
            <td><LinkUser :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
            <td>{{ $format(rank.date, "p") }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br><Card id="general">
      <template #header>
        Classement général single {{ data.day - 1 }}e journée
      </template>
      <template #subtitle>
        2 heures par jour minimum dans la mare...
      </template>
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="40">
          <col width="40">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Points</th>
            <th>Classé</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.general" :key="index">
            <td>{{ index + 1 }}</td>
            <td><LinkUser :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
            <td>{{ rank.races }}</td>
          </tr>
        </tbody>
      </table>
    </Card><br><Card id="today">
      <template #header>
        {{ data.day }}e journée ! {{ data.stats.today }} patojeurs !
      </template>
      La {{ data.day }}e journée de course est en cours !
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="60">
          <col width="60">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Temps</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.today" :key="index">
            <td>{{ index + 1 }}</td>
            <td><LinkUser :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
            <td>{{ $format(rank.date, "p") }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br><Card id="groups">
      <template #header>
        Classement des groupes !
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
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        >&nbsp;<NuxtLink to="/bbs/6-1">
          BBS de Patojdur
        </NuxtLink><br>
        <br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        >
        Hier, il y a eu {{ data.stats.yesterday }} Patojeurs.<br><br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        >&nbsp;Aujourd'hui, il y a
        {{ data.stats.today }} Patojeurs.<br>
      </Card>
    </template>
  </Container>
</template>

<script setup lang="ts">

const { data } = await useFetch<any>('https://chimboz.fr/api/games/patoj')
data.value.stats = {
  today: 1,
  yesterday: 2
}

const { t } = useI18n()
useHead({ title: t('patojdur') })
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: #eef5fa;
  padding: 2px 0;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}
</style>
