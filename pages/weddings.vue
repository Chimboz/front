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
    <Card header="wedding.webp" justified bg="wedding.gif">
      <div class="flex centered hstack">
        <NuxtLink to="#today" class="btn-sm blue-bg"
          ><img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          />&nbsp;{{ $t("wedding.section.today") }}</NuxtLink
        >
        <NuxtLink to="#divorce" class="btn-sm blue-bg"
          ><img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          />&nbsp;{{ $t("wedding.section.divorces") }}</NuxtLink
        >
        <NuxtLink to="#best" class="btn-sm blue-bg"
          ><img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          />&nbsp;{{ $t("wedding.section.holding") }}</NuxtLink
        >
        <NuxtLink to="#broken" class="btn-sm blue-bg"
          ><img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          />&nbsp;{{ $t("wedding.section.held") }}</NuxtLink
        >
      </div>
      <br />
      <span v-html="$t('wedding.description')"></span>
    </Card>
    <br /><Card v-if="data" id="last">
      <template #header>{{ $t("wedding.section.last") }}</template>
      {{ $t("date.on") }} <b>{{ format(data.last.date, "PPp") }}</b
      >, <b>{{ data.last.id }}</b
      ><sup>{{ $t("score.nth") }}</sup> {{ $t("wedding.name") }}. <br /><br />
      <div class="wedding">
        <img
          draggable="false"
          alt="Star"
          src="@/assets/img/social/wedding/wedding.svg"
          @contextmenu.prevent
        />
        <Avatar
          class="witness witness1"
          :avatar="data.last.witness1.look.avatar"
          emote="kawai"
          :hat="data.last.witness1.look.hat"
          :body="data.last.witness1.look.body"
          :shoe="data.last.witness1.look.shoe"
          :item0="data.last.witness1.look.item0"
          :item1="data.last.witness1.look.item1"
          :item2="data.last.witness1.look.item2"
        />
        <Avatar
          class="married married1"
          :avatar="data.last.married1.look.avatar"
          emote="luv"
          :hat="data.last.married1.look.hat"
          :body="data.last.married1.look.body"
          :shoe="data.last.married1.look.shoe"
          :item0="data.last.married1.look.item0"
          :item1="data.last.married1.look.item1"
          :item2="data.last.married1.look.item2"
        />
        <Avatar
          class="married married2"
          :avatar="data.last.married2.look.avatar"
          emote="luv"
          :hat="data.last.married2.look.hat"
          :body="data.last.married2.look.body"
          :shoe="data.last.married2.look.shoe"
          :item0="data.last.married2.look.item0"
          :item1="data.last.married2.look.item1"
          :item2="data.last.married2.look.item2"
        />
        <Avatar
          class="witness witness2"
          :avatar="data.last.witness2.look.avatar"
          emote="kawai"
          :hat="data.last.witness2.look.hat"
          :body="data.last.witness2.look.body"
          :shoe="data.last.witness2.look.shoe"
          :item0="data.last.witness2.look.item0"
          :item1="data.last.witness2.look.item1"
          :item2="data.last.witness2.look.item2"
        />
      </div>
      <br />
      {{ $t("wedding.wishes") }}<br />
      <LinkUser :user="data.last.married1" /> &amp;
      <LinkUser :user="data.last.married2" /><br />
      <span v-html="$t('wedding.marriedbyguruji')"></span><br />
      <LinkUser :user="data.last.witness1" /> &amp;
      <LinkUser :user="data.last.witness2" />. </Card
    ><br />
    <Card v-if="data" id="today">
      <template #header
        ><img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Marriage icon"
          width="143"
          height="64"
        /><br />{{ $t("wedding.title.today") }}
      </template>
      {{ $t("date.Today") }}, <b>{{ format(Date.now(), "PP") }}</b
      >, <b>{{ data.today.length }}</b> {{ $t("wedding.celebrated") }}.
      <br /><br />
      <div v-for="wedding of data.today" :key="wedding.id" class="fullwidth">
        {{ $t("date.On") }} <b>{{ format(wedding.date, "PPp") }}</b
        >,<br />
        <LinkUser :user="wedding.married1" /> &amp;
        <LinkUser :user="wedding.married2" /> {{ $t("wedding.gotmarried")
        }}<br />
        {{ $t("wedding.gotwitnessed") }} <LinkUser :user="wedding.witness1" />
        {{ $t("wedding.andof") }} <LinkUser :user="wedding.witness2" /><br />
        <i
          ><NuxtLink :to="'/weddings/' + wedding.id">{{
            wedding.id
          }}</NuxtLink
          ><sup>{{ $t("score.nth") }}</sup> {{ $t("wedding.name") }}</i
        >
      </div>
    </Card>
    <br />
    <Card v-if="data" id="best">
      <template #header
        ><img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Marriage icon"
          width="143"
          height="64"
        /><br />Les 20 mariages qui tiennent&nbsp;!
      </template>
      <template #subtitle
        >Ça commence pour un jour... ça fini pour toujours !</template
      >
      <table class="fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="50" />
          <col width="50" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Couple</th>
            <th>Mariage</th>
            <th>Jours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <LinkUser :user="wedding.married1" /> et
              <LinkUser :user="wedding.married2" />
            </td>
            <td>
              <i
                >n°<NuxtLink :to="'/weddings/' + wedding.id">{{
                  wedding.id
                }}</NuxtLink></i
              >
            </td>
            <td>
              <b>{{ distance(Date.now(), wedding.date) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card v-if="data" id="divorce">
      <template #header
        ><img
          src="@/assets/img/social/wedding/divorce2.webp"
          alt="Divorce icon"
          width="143"
          height="64"
        /><br />Les divorces depuis 24 heures
      </template>
      <template #subtitle
        >Le mariage est virtuel mais la douleur est réelle&nbsp;!</template
      >
      <b>{{ data.divorce.length }}</b> couples ont été brisés&nbsp;!<br /><br />
      <table class="fullwidth">
        <colgroup>
          <col width="100" />
          <col width="100%" />
          <col width="50" />
          <col width="50" />
        </colgroup>
        <thead>
          <tr>
            <th>Heure</th>
            <th>Couple brisé</th>
            <th>Mariage</th>
            <th>Jours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.divorce" :key="index">
            <td>{{ format(wedding.dateend, "p") }}</td>
            <td>
              <LinkUser :user="wedding.married1" /> a plaqué
              <LinkUser :user="wedding.married2" />
            </td>
            <td>
              <i
                >n°<NuxtLink :to="'/weddings/' + wedding.id">{{
                  wedding.id
                }}</NuxtLink></i
              >
            </td>
            <td>
              <b>{{ distance(wedding.datebegin, wedding.dateend) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card v-if="data" id="broken">
      <template #header
        ><img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Marriage icon"
          width="143"
          height="64"
        /><br />Les 20 mariages qui ont tenu !
      </template>
      <template #subtitle>C'est fini... mais ça a duré !!! </template>
      <table class="fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="50" />
          <col width="50" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Couple</th>
            <th>Mariage</th>
            <th>Jours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.broken" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <LinkUser :user="wedding.married1" /> et
              <LinkUser :user="wedding.married2" />
            </td>
            <td>
              <i
                >n°<NuxtLink :to="'/weddings/' + wedding.id">{{
                  wedding.id
                }}</NuxtLink></i
              >
            </td>
            <td>
              <b>{{ distance(wedding.datebegin, wedding.dateend) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column
      ><Card
        v-if="data"
        header="ensavoirplus.webp"
        :width="154"
        :height="34"
        top
        color="blue"
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        />
        En tout, <b>Guruji</b> a célébré <b>{{ data.stats.total }}</b> mariages.
        <br /><br />
        <img
          src="@/assets/img/social/wedding/divorce.webp"
          alt="Divorce"
          draggable="false"
          width="56"
          height="39"
          @contextmenu.prevent
        /><br />
        <b>{{ data.stats.divorce }}</b> mariés ont divorcé. <br /><br />
        <img
          src="@/assets/img/social/wedding/mariage.webp"
          alt="Wedding"
          draggable="false"
          width="56"
          height="39"
          @contextmenu.prevent
        /><br />
        En ce moment, <b>{{ data.stats.total - data.stats.divorce }}</b> couples
        sont heureux, donc ça laisse
        <b>{{
          data.stats.members - (data.stats.total - data.stats.divorce) * 2
        }}</b>
        célibs !!! <br /><img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Wedding"
          draggable="false"
          width="130"
          height="58"
          style="width: 100%"
          @contextmenu.prevent
        /><br />
        <h3>Archive de tous les mariages</h3>
        <br />
        <form class="flex fullwidth" @submit.prevent="search()">
          <input
            v-model="idSearch"
            required
            min="1"
            :max="data.last.id"
            name="id"
            type="number"
            class="btn-md"
            aria-label="Wedding number"
            :placeholder="$t('placeholder.weddingid')"
          /><button type="submit" class="btn-action">go</button>
        </form>
        <br />
        <form class="flex fullwidth" @submit.prevent="search()">
          <input
            v-model="userSearch"
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            aria-label="Username"
            :placeholder="$t('placeholder.username')"
          /><button type="submit" class="btn-action">go</button>
        </form>
      </Card></template
    >
  </Container>
</template>

<script setup lang="ts">

import { fetchData } from "@/utils";
import { distance, format } from "@/utils/date";

import { RouterLink, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

const router = useRouter();
const data = ref<any>(undefined);
const idSearch = ref<undefined | number>(undefined);
const userSearch = ref("");

function search() {
  router.push(`/weddings/${idSearch.value}`);
}

fetchData(async () => {
  data.value = (await useFetch("weddings")).data;
});

useHead({ title: "section.wedding" });
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

.wedding {
  position: relative;
  width: 400px;
  margin: auto;
}

@media (max-width: 464px) {
  .wedding {
    display: none;
  }
}

.witness,
.married {
  position: absolute;
}

.witness {
  top: 165px;
}

.married {
  top: 175px;
}

.witness1 {
  left: 70px;
}

.witness2 {
  left: 275px;
}

.married1 {
  left: 130px;
}

.married2 {
  left: 215px;
}

#today .fullwidth {
  padding: var(--md-gap);
}

#today .fullwidth:nth-child(odd) {
  background: var(--light);
}
</style>
