<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Members" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <Card header="group.webp" bg="groups.gif" :height="70" color="blue" left>
      Envie de former un vrai gang avec tes potes ? Rejoindre une guilde de
      guerriers Bacteria ? Un fan club de ta star préférée avec tes copines ?
      Marre des faux groupes qui sont en réalité de simples messages de forum
      ?<br>
      <br>
      Pour choisir ton clan, c'est ici ! Si tu disposes d'un niveau suffisant,
      tu peux rejoindre un ou des groupes ; et même en créer. Pour certains
      groupes, ton entrée est immédiate, pour d'autres tu devras être approuvé
      par le chef du groupe... A toi de faire tes preuves !
    </Card>
    <Card color="blue" left>
      <template #header>
        Groupes officiels
      </template>
      <template #subtitle>
        Ce sont les groupes qui participent directement à
        <b>chimboz.fr</b>.
      </template>
      Les membres de ces groupes sont nommés par
      <NuxtLink to="/groups/1">
        les créateurs du site
      </NuxtLink>, et se voient
      attribuer des rubriques à modérer (<NuxtLink to="/chaparazzi">
        albums
      </NuxtLink>, <NuxtLink to="/wiki">
        faq
      </NuxtLink>,
      <NuxtLink to="/bbs">
        BBS
      </NuxtLink>...)ou même un poste sur le chat
      (<NuxtLink to="/groups/3">
        modos officiels
      </NuxtLink>,
      <NuxtLink to="/groups/9">
        aideurs officiels
      </NuxtLink>). <br><br>
      <table class="centered fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="40">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du groupe</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="group in data.officials" :key="group.id">
            <td>
              <b>{{ group.id }}</b>
            </td>
            <td><LinkGroup :group="group" /></td>
            <td>{{ group.genre }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <Card color="blue">
      <template #header>
        Groupes de membre
      </template>
      <template #subtitle>
        Les 20 derniers groupes créés par les membres
      </template>
      Les membres de ces groupes sont designés par
      <b>le créateur du groupe</b>... <br><br>
      <table class="centered fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="40">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du groupe</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="group in data.members" :key="group.id">
            <td>
              <b>{{ group.id }}</b>
            </td>
            <td><LinkGroup :group="group" /></td>
            <td>{{ group.genre }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <Card color="blue">
      <template #header>
        Classement général des groupes, par jeu
      </template>
      <template #subtitle>
        Les 10 meilleurs groupes, tous les jeux réunis
      </template>
      Le nombre de points correspond au classement général.<br>
      Par exemple, si un groupe est classé
      <b>10<sup>ème</sup> à Bactéria, 2<sup>ème</sup> à Patojdur, et 7<sup>ème</sup>
        à Popularité</b>, leur nombre de points sera <b>10+2+7</b> soit <b>19 points</b>. Cela
      signifie que moins un groupe a des points, plus il est fort !<br><br>
      <table class="centered fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="40">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du groupe</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="group in data.best" :key="group.id">
            <td>
              <b>{{ group.id }}</b>
            </td>
            <td><LinkGroup :group="group" /></td>
            <td>{{ group.score }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <Card v-if="user">
      <template #header>
        Moi et mes groupes
      </template>

      <NuxtLink to="/groups/manage">
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >
        Gérer mes groupes
      </NuxtLink>
    </Card>
    <template #right-column>
      <Card color="blue" header="ensavoirplus.webp">
        <b>{{ data.stats.total }}</b> groupes ont été créés. <br>
        <div class="left">
          <img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Group : <b>{{ data.stats.type.group }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.group / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Klub : <b>{{ data.stats.type.klub }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.klub / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Clan : <b>{{ data.stats.type.clan }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.clan / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Ekip : <b>{{ data.stats.type.ekip }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.ekip / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br>
          <img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Skwat : <b>{{ data.stats.type.skwat }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.skwat / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Guild : <b>{{ data.stats.type.guild }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.guild / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Alliance : <b>{{ data.stats.type.alliance }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.alliance / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Empire : <b>{{ data.stats.type.empire }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.empire / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Sekt : <b>{{ data.stats.type.sekt }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.sekt / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Skool : <b>{{ data.stats.type.skool }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.skool / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Hord : <b>{{ data.stats.type.hord }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.hord / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Meute : <b>{{ data.stats.type.meute }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.meute / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Gang : <b>{{ data.stats.type.gang }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.gang / data.stats.total) * 100).toFixed(2)
          }}%)</sub><br><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          >
          Triad : <b>{{ data.stats.type.triad }}</b>&nbsp;
          <sub>({{
            ((data.stats.type.triad / data.stats.total) * 100).toFixed(2)
          }}%)</sub>
        </div>
        <br><img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >
        Pour <b>rejoindre</b> un groupe <b>ou pour en créer un</b>, tu as besoin
        d'avoir un certain
        <NuxtLink to="/levels">
          niveau
        </NuxtLink>.<br><br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >
        Le nombre de groupes que tu peux rejoindre tel que décrit dans le
        <NuxtLink to="/levels">
          tableau des niveaux
        </NuxtLink>, comprend
        uniquement les <b>groupes des membres</b>, les
        <b>Groupes Officiels</b> ne sont pas comptés.<br><img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >
        Projecteur sur :
        <div><LinkGroup :group="data.random" /></div>
      </Card>
    </template>
  </Container>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth';

const auth = useAuthStore();
const user = computed(() => auth.user);

const { data } = await useFetch<any>('https://chimboz.fr/api/groups');

const { t } = useI18n();
useHead({ title: t('groups') });
</script>
