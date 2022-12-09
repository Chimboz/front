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
      <template #header>Gérer mes groupes</template>
      Sur cette page, tu peux tout faire et tout savoir sur tes groupes...<br />
      <br />
      Ils n'étaient en fait qu'une bande de nazes ? Désinscris-toi ! Alors, le
      gang de tes rêves t'as pris ? Découvre-le tout de suite ! Envie de fonder
      ton propre club ? Si tu as un super niveau, go !
    </GlobalCard>
    <br />
    <GlobalCard color="blue" justified v-if="data">
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
            <td><GroupLink :group="group" /></td>
            <td>
              [<span
                class="link"
                @click.prevent="leave(group.id)"
                style="cursor: var(--pointer)"
                >Se désinscrire</span
              >]
            </td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>
    <br />
    <GlobalCard color="blue" v-if="data">
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
            <td><GroupLink :group="group" /></td>
            <td>
              [<span
                class="link"
                @click.prevent="cancel(group.id)"
                style="cursor: var(--pointer)"
                >Annuler</span
              >]
            </td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>
    <br />
    <GlobalCard color="blue" v-if="data">
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
            <td><GroupLink :group="group" /></td>
            <td>
              [<router-link :to="'/groups/edit/' + group.id">Gérer</router-link
              >]
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <router-link to="/groups/create"
        ><img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;Créer un nouveau groupe</router-link
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
          width="17" />Le nombre de groupes que tu peux rejoindre tel que décrit
        dans le <router-link to="/levels">tableau des niveaux</router-link>,
        comprend uniquement les <b>groupes des membres</b>, les
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
// @vuese
// @group View/Members/Group
// Groups management page

  
const data = ref<any>(null);

    cancel(id) {
      console.log("Annulé " + id);
    },
    leave(id) {
      console.log("Quitté " + id);
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/manage.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await api.get("/api/manage.json");
    data = req.data;
    next();
  },
  metaInfo: {
    title: "section.groups",
  },
</script>
