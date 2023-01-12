<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Members" />
        </div>
      </Card>
      <br>
      <Rules bot />
    </template>
    <Card header="popularity.gif" justified bg="popularity.gif">
      <div class="flex centered hstack">
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
            style="image-rendering: pixelated"
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
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;Classement général
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
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;Champions du jour
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
          >&nbsp;Classement des groupes
        </NuxtLink>
        <NuxtLink to="#vote" class="btn-sm blue-bg">
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;Voter
        </NuxtLink>
      </div>
      <br>

      Il te <b>prend la tête</b> et tu as envie de lui faire sentir&nbsp;?
      <br>
      Tu ne <b>peux plus la voir</b> et tu veux que tout le monde le
      sache&nbsp;?
      <br>
      Cette fille est <b>trop cool</b> et ceux qui ne l'aiment pas ne la
      connaissent pas&nbsp;! <br>
      Ce mec et son groupe <b>assurent grave</b> et tu as envie de le lui
      prouver&nbsp;?
      <br>
      <br>
      Viens tous les jours <b>régler tes comptes</b> ou <b>soutenir</b> tes amis
      avec la <b>popularité</b>&nbsp;! <br>
      Vote <b>POUR</b> elle et sa cote remonte, vote <b>CONTRE</b> lui et il
      descend en flêche ! <br>
      <br>
      Le <b>+ populaire du jour</b> gagne les lunettes pour la journée, les 3
      <b>+ populaires du jour</b> gagnent une auréole pour la journée, le
      <b>- aimé</b> gagne une crotte pour la journée !
    </Card>
    <br><Card id="today">
      <template #header>
        Classement du jour !
      </template>
      Classement toujours en cours ! <br>Tu peux encore descendre ou remonter
      quelqu'un !<br>
      <br>
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkUser :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkUser :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
    <br>
    <Card id="yesterday">
      <template #header>
        Champions du jour !
      </template>
      <template #subtitle>
        Hier, ils ont été héroïques... ou nazes !!!
      </template>

      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkUser :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkUser :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card><br>
    <Card id="general">
      <template #header>
        Classement général !
      </template>
      <template #subtitle>
        Les membres qui gagnent à être connus... et ceux à éviter !!!
      </template>
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkUser :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkUser :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
    <br><Card id="groups">
      <template #header>
        Classement des groupes !
      </template>
      <template #subtitle>
        Plus on est de fous...
      </template>
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/star.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkGroup :group="rank.group" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            alt="Star"
            src="@/assets/img/social/popularity/poop.webp"
            width="141"
            height="58"
            @contextmenu.prevent
          >
          <table>
            <colgroup>
              <col width="30">
              <col width="100%">
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
                <td><LinkGroup :group="rank.group" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card><br>
    <Card
      v-if="user"
      id="vote"
    >
      <template #header>
        Voter Pour/Contre un membre !
      </template> Un membre
      t'ennuie ? Descends le !<br>
      Tu trouves un membre sympa ? Donne lui ta voix !
      <br><br>
      <form @submit.prevent="vote()">
        <div class="flex centered">
          <vue-recaptcha
            ref="recaptcha"
            theme="dark"
            sitekey="6LebtM8iAAAAAMjLDIYvDXTCZHkHx9cdqE1jNOke"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
          />
        </div>
        <br>
        <div class="flex">
          <select
            v-model="mode"
            class="btn-md"
            required
            aria-label="Type of vote"
          >
            <option value="for">
              Pour
            </option>
            <option value="against">
              Contre
            </option>
          </select><input
            v-model="pseudo"
            required
            minlength="3"
            maxlength="15"
            name="group"
            type="text"
            class="btn-md"
            autocomplete="username"
            aria-label="Username"
            :placeholder="$t('placeholder.username')"
          ><button type="submit" class="btn-action">
            go
          </button>
        </div>
      </form>
    </Card>
    <template #right-column>
      <Card
        header="ensavoirplus.webp"
        :width="154"
        :height="46"
        top
        color="blue"
        justified
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >&nbsp;Hier
        <b>{{ data.stats.yesterday.for + data.stats.yesterday.against }}</b>
        votes.<br>
        <b>POUR&nbsp;: {{ data.stats.yesterday.for }}</b> ({{
          (
            (data.stats.yesterday.for * 100) /
            (data.stats.yesterday.for + data.stats.yesterday.against)
          ).toFixed(2)
        }}%)<br>
        <b>CONTRE&nbsp;: {{ data.stats.yesterday.against }}</b> ({{
          (
            (data.stats.yesterday.against * 100) /
            (data.stats.yesterday.for + data.stats.yesterday.against)
          ).toFixed(2)
        }}%)<br>
        <br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >Aujourd'hui
        <b>{{ data.stats.today.for + data.stats.today.against }}</b>
        votes.<br>
        <b>POUR: {{ data.stats.today.for }}</b> ({{
          (
            (data.stats.today.for * 100) /
            (data.stats.today.for + data.stats.today.against)
          ).toFixed(0)
        }}%)<br>
        <b>CONTRE: {{ data.stats.today.against }}</b> ({{
          (
            (data.stats.today.against * 100) /
            (data.stats.today.for + data.stats.today.against)
          ).toFixed(0)
        }}%)
      </Card>
    </template>
  </Container>
</template>

<script setup lang="ts">
import { VueRecaptcha } from 'vue-recaptcha'
import useAuthStore from '@/stores/auth'

const auth = useAuthStore()
const user = computed(() => auth.user)

const { data } = await useFetch<any>('https://chimboz.fr/api/popularity')
data.value.groups = {
  best: [],
  worst: []
}
data.value.stats.yesterday = data.value.stats.today
const mode = ref<'for' | 'against'>('for')
const pseudo = ref('')
const recaptcha = ref<null | VueRecaptcha>(null)
const token = ref('')

function vote () {
  useFetch('popularity/vote', {
    body: {
      pseudo: pseudo.value,
      mode: mode.value,
      recaptcha: token.value
    }
  })
}

function onCaptchaVerified (recaptchaToken: string) {
  token.value = recaptchaToken
}

function onCaptchaExpired () {
  recaptcha.value!.reset()
}

useHead({ title: 'section.popularity' })
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
