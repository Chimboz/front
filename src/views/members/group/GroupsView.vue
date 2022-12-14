<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <GlobalCard
      header="group.webp"
      bg="groups.gif"
      :height="70"
      color="blue"
      justified
    >
      Envie de former un vrai gang avec tes potes ? Rejoindre une guilde de
      guerriers Bacteria ? Un fan club de ta star préférée avec tes copines ?
      Marre des faux groupes qui sont en réalité de simples messages de forum
      ?<br />
      <br />
      Pour choisir ton clan, c'est ici ! Si tu disposes d'un niveau suffisant,
      tu peux rejoindre un ou des groupes ; et même en créer. Pour certains
      groupes, ton entrée est immédiate, pour d'autres tu devras être approuvé
      par le chef du groupe... A toi de faire tes preuves !
    </GlobalCard>
    <br />
    <GlobalCard color="blue" justified v-if="data">
      <template #header>Groupes officiels</template>
      <template #subtitle
        >Ce sont les groupes qui participent directement à
        <b>chimboz.fr</b>.</template
      >
      Les membres de ces groupes sont nommés par
      <router-link to="/groups/1">les créateurs du site</router-link>, et se
      voient attribuer des rubriques à modérer (<router-link to="photos"
        >albums</router-link
      >, <router-link to="faq">faq</router-link>,
      <router-link to="bbs">BBS</router-link>...)ou même un poste sur le chat
      (<router-link to="/groups/3">modos officiels</router-link>,
      <router-link to="/groups/9">aideurs officiels</router-link>). <br /><br />
      <table class="centered fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
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
            <td><GroupLink :group="group" /></td>
            <td>{{ group.genre }}</td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>
    <br />
    <GlobalCard color="blue" v-if="data">
      <template #header>Groupes de membre</template>
      <template #subtitle
        >Les 20 derniers groupes créés par les membres</template
      >
      Les membres de ces groupes sont designés par
      <b>le créateur du groupe</b>... <br /><br />
      <table class="centered fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
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
            <td><GroupLink :group="group" /></td>
            <td>{{ group.genre }}</td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>
    <br />
    <GlobalCard color="blue" v-if="data">
      <template #header>Classement général des groupes, par jeu</template>
      <template #subtitle
        >Les 10 meilleurs groupes, tous les jeux réunis
      </template>
      Le nombre de points correspond au classement général.<br />
      Par exemple, si un groupe est classé
      <b
        >10<sup>ème</sup> à Bactéria, 2<sup>ème</sup> à Patojdur, et 7<sup
          >ème</sup
        >
        à Popularité</b
      >, leur nombre de points sera <b>10+2+7</b> soit <b>19 points</b>. Cela
      signifie que moins un groupe a des points, plus il est fort !<br /><br />
      <table class="centered fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
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
            <td><GroupLink :group="group" /></td>
            <td>{{ group.score }}</td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>
    <br />
    <GlobalCard v-if="authenticated">
      <template #header>Moi et mes groupes</template>

      <router-link to="/groups/manage"
        ><img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />
        Gérer mes groupes</router-link
      >
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="blue" header="ensavoirplus.webp" v-if="data">
        <b>{{ data.stats.total }}</b> groupes ont été créés. <br />
        <div class="justified">
          <img
            src="@/assets/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
            @contextmenu.prevent
            height="17"
            width="17"
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
          @contextmenu.prevent
          height="17"
          width="17" />
        Pour <b>rejoindre</b> un groupe <b>ou pour en créer un</b>, tu as besoin
        d'avoir un certain
        <router-link to="/levels">niveau</router-link>.<br /><br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17" />
        Le nombre de groupes que tu peux rejoindre tel que décrit dans le
        <router-link to="/levels">tableau des niveaux</router-link>, comprend
        uniquement les <b>groupes des membres</b>, les
        <b>Groupes Officiels</b> ne sont pas comptés.<br /><img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17" />
        Projecteur sur :
        <div><GroupLink :group="data.random" /></div></GlobalCard
    ></template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import api from "@/modules/api";
import { useAuthStore } from "@/stores/auth";
import { fetchData } from "@/utils";
import { ref, computed } from "vue";
const auth = useAuthStore();
const user = computed(() => auth.user);

// @vuese
// @group View/Members/Group
// Groups page

const data = ref<any>(undefined);
const authenticated = true;

fetchData(async () => {
  data.value = (await api.get("groups")).data;
});
// /api/groups.json
// meta title section.groups
</script>
