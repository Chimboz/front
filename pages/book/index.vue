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
    <Card header="book.webp" justified color="yellow">
      <div
        style="float: right; margin-top: -80px; width: 50%; position: relative"
      >
        <span v-html="$t('book.description')" />
      </div>
    </Card>
    <br><Card>
      <img
        style="float: left"
        src="@/assets/img/book/search.webp"
        height="71"
        width="107"
        alt="Search icon"
      >
      <div style="display: inline-block">
        <label for="search"><h1>{{ $t("book.search") }}</h1></label>
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
          >
          <button type="submit" class="btn-action">
            go
          </button>
        </form>
        <div v-if="suggestionsHere && userSearch != ''" class="suggestions">
          <ul>
            <li v-for="suggestion in suggestionsHere" :key="suggestion">
              <NuxtLink :to="'/book/' + suggestion.mid">
                {{
                  suggestion.pseudo
                }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </Card><br>
    <Card>
      <template #header>
        {{ $t("book.last") }}
      </template>
      <table class="fullwidth">
        <colgroup>
          <col width="10%">
          <col width="45%">
          <col width="45%">
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
            <td><LinkUser :user="member" /></td>
            <td>{{ $format(member.date, "PPp") }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column>
      <Card

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
        ><b>{{ data.total }}</b> membres en tout.<br>
        <br>
        <b>Nouveaux</b><br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        ><b>{{ data.day }}</b> depuis 24h!<br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        ><b>{{ data.month }}</b> depuis 1 mois!<br>
        <br>
        <b>Les Genres :</b><br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >Fille(s) : <b>{{ data.female }}</b>&nbsp; <sub>({{ ((data.female / data.total) * 100).toFixed(2) }}%)</sub><br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >Garçon(s) : <b>{{ data.male }}</b>&nbsp; <sub>({{ ((data.male / data.total) * 100).toFixed(2) }}%)</sub><br>
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >Inconnu(s) : <b>{{ data.total - data.female - data.male }}</b>&nbsp;
        <sub>({{
          (
            ((data.total - data.female - data.male) / data.total) *
            100
          ).toFixed(2)
        }}%)</sub>
      </Card>
    </template>
  </Container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const { data } = await useFetch<any>('https://chimboz.fr/api/book')
const userSearch = ref('')
const suggestionsHere = ref<any>(null)

async function search () {
  router.push(
    `/book/${
      (await useFetch<any>(`book/search/${userSearch.value}/search`)).data.value.mid
    }`
  )
}

const { t } = useI18n()
useHead({ title: t('popularity') })
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
