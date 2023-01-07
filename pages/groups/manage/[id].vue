<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card
      header="group.webp"
      bg="groups.gif"
      :height="70"
      color="blue"
      justified
    >
      <template #header>Gérer mes groupes</template>
      Sur cette page, tu peux tout faire et tout savoir sur tes groupes...<br />
      <br />
      Ils n'étaient en fait qu'une bande de nazes ? Désinscris-toi ! Alors, le
      gang de tes rêves t'as pris ? Découvre-le tout de suite ! Envie de fonder
      ton propre club ? Si tu as un super niveau, go !
    </Card>
    <br />
    <Card color="blue" justified>
      <template #header>Mes inscriptions</template>
      <template #subtitle
        >Faire partie de ce groupe c'est ce qu'y a de plus classe...</template
      >
      <table class="centered fullwidth">
        <colgroup>
          <col width="100%" />
          <col width="150" />
        </colgroup>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.member" :key="index">
            <td><LinkGroup :group="group" /></td>
            <td>
              [<span
                class="link"
                style="cursor: var(--pointer)"
                @click.prevent="leave(group.id)"
                @keyup.prevent="leave(group.id)"
                >Se désinscrire</span
              >]
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card color="blue">
      <template #header>Mes demandes en attente </template>
      <template #subtitle>Tout vient à point à qui sait attendre !</template>
      <table class="centered fullwidth">
        <colgroup>
          <col width="100%" />
          <col width="150" />
        </colgroup>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.pending" :key="index">
            <td><LinkGroup :group="group" /></td>
            <td>
              [<span
                class="link"
                style="cursor: var(--pointer)"
                @click.prevent="cancel(group.id)"
                @keyup.prevent="cancel(group.id)"
                >Annuler</span
              >]
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card color="blue">
      <template #header>Mes groupes </template>
      <template #subtitle
        >Ils étaient bien sûr les meilleurs groupes de la communauté...
      </template>
      <table class="centered fullwidth">
        <colgroup>
          <col width="100%" />
          <col width="150" />
        </colgroup>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.owner" :key="index">
            <td><LinkGroup :group="group" /></td>
            <td>
              [<NuxtLink :to="'/groups/edit/' + group.id">Gérer</NuxtLink
              >]
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <NuxtLink to="/groups/create"
        ><img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        />&nbsp;Créer un nouveau groupe</NuxtLink
      >
    </Card>
    <template #right-column
      ><Card color="blue" header="ensavoirplus.webp">
        <b>{{ data.stats.total }}</b> groupes ont été créés. <br />
        <div class="justified">
          <img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Group : <b>{{ data.stats.type.group }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.group / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Klub : <b>{{ data.stats.type.klub }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.klub / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Clan : <b>{{ data.stats.type.clan }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.clan / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Ekip : <b>{{ data.stats.type.ekip }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.ekip / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br />
          <img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Skwat : <b>{{ data.stats.type.skwat }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.skwat / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Guild : <b>{{ data.stats.type.guild }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.guild / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Alliance : <b>{{ data.stats.type.alliance }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.alliance / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Empire : <b>{{ data.stats.type.empire }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.empire / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Sekt : <b>{{ data.stats.type.sekt }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.sekt / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Skool : <b>{{ data.stats.type.skool }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.skool / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Hord : <b>{{ data.stats.type.hord }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.hord / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Meute : <b>{{ data.stats.type.meute }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.meute / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Gang : <b>{{ data.stats.type.gang }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.gang / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          Triad : <b>{{ data.stats.type.triad }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.triad / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          >
        </div>
        <br /><img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent />
        Pour <b>rejoindre</b> un groupe <b>ou pour en créer un</b>, tu as besoin
        d'avoir un certain
        <NuxtLink to="/levels">niveau</NuxtLink>.<br /><br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent />Le nombre de groupes que tu peux rejoindre tel
        que décrit dans le
        <NuxtLink to="/levels">tableau des niveaux</NuxtLink>, comprend
        uniquement les <b>groupes des membres</b>, les
        <b>Groupes Officiels</b> ne sont pas comptés.<br /><img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent />
        Projecteur sur :
        <div><LinkGroup :group="data.random" /></div></Card
    ></template>
  </Container>
</template>
<script setup lang="ts">

import { fetchData } from "@/utils";

import { useHead } from "@vueuse/head";
import { RouterLink } from "vue-router";

const { data } = await useFetch("https://localhost:3000/api/groups_manage");

function cancel(id: number) {
  useFetch(`groups/manage/${id}/0`);
}
function leave(id: number) {
  useFetch(`groups/manage/${id}/1`);
}

useHead({ title: "section.groups" });
</script>
