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
    <GlobalCard header="book.webp" justified color="yellow">
      <div
        style="float: right; margin-top: -80px; width: 50%; position: relative"
      >
        <span v-html="$t('book.description')"></span>
      </div>
    </GlobalCard>
    <br /><GlobalCard>
      <img
        style="float: left"
        src="@/assets/img/book/search.webp"
        height="71"
        width="107"
        alt="Search icon"
      />
      <div style="display: inline-block">
        <label for="search"
          ><h1>{{ $t("book.search") }}</h1></label
        >
        <form class="flex" @submit.prevent="search()">
          <input
            id="search"
            v-model="userSearch"
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            :aria-label="$t('book.search')"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
          />
          <button type="submit" class="btn-action">go</button>
        </form>
        <div v-if="suggestionsHere && userSearch != ''" class="suggestions">
          <ul>
            <li v-for="suggestion in suggestionsHere" :key="suggestion">
              <router-link :to="'/book/' + suggestion.mid">{{
                suggestion.pseudo
              }}</router-link>
            </li>
          </ul>
        </div>
      </div></GlobalCard
    ><br />
    <GlobalCard v-if="data"
      ><template #header>{{ $t("book.last") }}</template>
      <table class="fullwidth">
        <colgroup>
          <col width="10%" />
          <col width="45%" />
          <col width="45%" />
        </colgroup>
        <thead>
          <tr>
            <th>{{ $t("No") }}</th>
            <th>{{ $t("Pseudo") }}</th>
            <th>{{ $t("book.registeredon") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in data.members" :key="index">
            <td>{{ member.id }}</td>
            <td><UserLink :user="member" /></td>
            <td>{{ format(member.date, "PPp") }}</td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>
    <template #right-column
      ><GlobalCard
        v-if="data"
        header="ensavoirplus.webp"
        :width="154"
        :height="34"
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
        /><b>{{ data.total }}</b> membres en tout.<br />
        <br />
        <b>Nouveaux</b><br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b>{{ data.day }}</b> depuis 24h!<br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b>{{ data.month }}</b> depuis 1 mois!<br />
        <br />
        <b>Les Genres :</b><br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        />Fille(s) : <b>{{ data.female }}</b
        >&nbsp; <sub>({{ ((data.female / data.total) * 100).toFixed(2) }}%)</sub
        ><br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        />Garçon(s) : <b>{{ data.male }}</b
        >&nbsp; <sub>({{ ((data.male / data.total) * 100).toFixed(2) }}%)</sub
        ><br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        />Inconnu(s) : <b>{{ data.total - data.female - data.male }}</b
        >&nbsp;
        <sub
          >({{
            (
              ((data.total - data.female - data.male) / data.total) *
              100
            ).toFixed(2)
          }}%)</sub
        >
      </GlobalCard></template
    >
  </GlobalContainer>
</template>

<script setup lang="ts">
import api from "@/modules/api";
import { fetchData } from "@/utils";
import { format } from "@/utils/date";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

const router = useRouter();
const data = ref<any>(undefined);
const userSearch = ref("");
const suggestionsHere = ref<any>(null);

fetchData(async () => {
  data.value = (await useFetch("book")).data;
});

async function search() {
  router.push(
    `/book/${
      (await useFetch(`book/search/${userSearch.value}/search`)).data.mid
    }`
  );
}

useHead({ title: "section.popularity" });
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

.suggestions {
  background: var(--light);
  box-shadow: 0 0 var(--md-gap) var(--dark);
  position: absolute;
  cursor: default;
  z-index: 1;
}

.suggestions ul {
  padding: 0;
}

.suggestions li {
  overflow: hidden;
  display: list-item;
  text-align: left;
  padding: var(--md-gap);
}
</style>
