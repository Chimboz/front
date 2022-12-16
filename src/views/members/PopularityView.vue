<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Members" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <GlobalCard header="popularity.gif" justified bg="popularity.gif">
      <div class="flex centered hstack">
        <router-link to="#today" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Classement du jour</router-link
        >
        <router-link to="#general" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Classement général</router-link
        >
        <router-link to="#yesterday" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Champions du jour</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Classement des groupes</router-link
        >
        <router-link to="#vote" class="btn-sm blue-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Voter</router-link
        >
      </div>
      <br />

      Il te <b>prend la tête</b> et tu as envie de lui faire sentir&nbsp;?
      <br />
      Tu ne <b>peux plus la voir</b> et tu veux que tout le monde le
      sache&nbsp;?
      <br />
      Cette fille est <b>trop cool</b> et ceux qui ne l'aiment pas ne la
      connaissent pas&nbsp;! <br />
      Ce mec et son groupe <b>assurent grave</b> et tu as envie de le lui
      prouver&nbsp;?
      <br />
      <br />
      Viens tous les jours <b>régler tes comptes</b> ou <b>soutenir</b> tes amis
      avec la <b>popularité</b>&nbsp;! <br />
      Vote <b>POUR</b> elle et sa cote remonte, vote <b>CONTRE</b> lui et il
      descend en flêche ! <br />
      <br />
      Le <b>+ populaire du jour</b> gagne les lunettes pour la journée, les 3
      <b>+ populaires du jour</b> gagnent une auréole pour la journée, le
      <b>- aimé</b> gagne une crotte pour la journée !
    </GlobalCard>
    <br /><GlobalCard id="today" v-if="data">
      <template #header>Classement du jour !</template>
      Classement toujours en cours ! <br />Tu peux encore descendre ou remonter
      quelqu'un !<br />
      <br />
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.today.best" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><UserLink :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.today.worst" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><UserLink :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </GlobalCard>
    <br />
    <GlobalCard id="yesterday" v-if="data">
      <template #header>Champions du jour !</template>
      <template #subtitle>Hier, ils ont été héroïques... ou nazes !!!</template>

      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.yesterday.best" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><UserLink :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.yesterday.worst" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><UserLink :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div></div></GlobalCard
    ><br />
    <GlobalCard id="general" v-if="data">
      <template #header>Classement général !</template>
      <template #subtitle
        >Les membres qui gagnent à être connus... et ceux à éviter !!!</template
      >
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.general.best" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><UserLink :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.general.worst" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><UserLink :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </GlobalCard>
    <br /><GlobalCard id="groups" v-if="data">
      <template #header>Classement des groupes ! </template>
      <template #subtitle>Plus on est de fous...</template>
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.groups.best" :key="rank.group.id">
                <td>{{ rank.score }}</td>
                <td><GroupLink :group="rank.group" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.groups.worst" :key="rank.group.id">
                <td>{{ rank.score }}</td>
                <td><GroupLink :group="rank.group" /></td>
              </tr>
            </tbody>
          </table>
        </div></div></GlobalCard
    ><br />
    <GlobalCard id="vote" v-if="user"
      ><template #header>Voter Pour/Contre un membre !</template> Un membre
      t'ennuie ? Descends le !<br />
      Tu trouves un membre sympa ? Donne lui ta voix !
      <br /><br />
      <form @submit.prevent="vote()" class="flex">
        <select class="btn-md" required>
          <option value="for">Pour</option>
          <option value="against">Contre</option></select
        ><input
          required
          minlength="3"
          maxlength="15"
          name="group"
          type="text"
          class="btn-md"
          autocomplete="group"
          :placeholder="$t('placeholder.username')"
        /><button type="submit" class="btn-action">go</button>
      </form>
    </GlobalCard>
    <template #right-column
      ><GlobalCard
        header="ensavoirplus.webp"
        :width="154"
        :height="46"
        top
        color="blue"
        justified
        v-if="data"
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;Hier
        <b>{{ data.stats.yesterday.for + data.stats.yesterday.against }}</b>
        votes.<br />
        <b>POUR&nbsp;: {{ data.stats.yesterday.for }}</b> ({{
          (
            (data.stats.yesterday.for * 100) /
            (data.stats.yesterday.for + data.stats.yesterday.against)
          ).toFixed(2)
        }}%)<br />
        <b>CONTRE&nbsp;: {{ data.stats.yesterday.against }}</b> ({{
          (
            (data.stats.yesterday.against * 100) /
            (data.stats.yesterday.for + data.stats.yesterday.against)
          ).toFixed(2)
        }}%)<br />
        <br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />Aujourd'hui
        <b>{{ data.stats.today.for + data.stats.today.against }}</b>
        votes.<br />
        <b>POUR: {{ data.stats.today.for }}</b> ({{
          (
            (data.stats.today.for * 100) /
            (data.stats.today.for + data.stats.today.against)
          ).toFixed(0)
        }}%)<br />
        <b>CONTRE: {{ data.stats.today.against }}</b> ({{
          (
            (data.stats.today.against * 100) /
            (data.stats.today.for + data.stats.today.against)
          ).toFixed(0)
        }}%)
      </GlobalCard></template
    >
  </GlobalContainer>
</template>

<script setup lang="ts">
import api from "@/modules/api";
import { useAuthStore } from "@/stores/auth";
import { fetchData } from "@/utils";
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
const auth = useAuthStore();
const user = computed(() => auth.user);

// @vuese
// @group View/Members
// Popularity page
const data = ref<any>(undefined);

function vote() {
  console.log("Envoyé!");
}
fetchData(async () => {
  data.value = (await api.get("popularity")).data;
  // TODO remove
  data.value.groups = {
    best: [],
    worst: [],
  };
  data.value.stats.yesterday = data.value.stats.today;
});

// meta title section.popularity
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template: 100% / 50% 50%;
}

th,
td {
  font-weight: bold;
  text-align: center;
}

.hstack {
  justify-content: center;
}
</style>
