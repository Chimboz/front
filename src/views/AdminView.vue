<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" justified>
        <template #button>
          <GlobalButton icon="rules.svg" type="button">Registre</GlobalButton>
        </template>
        <ScrollableContainer
          route="adminlogs"
          class="fullwidth"
          @scroll-data="(results: any[]) => (data = [...data, ...results])"
        >
          <div v-for="(log, index) in data" :key="index" class="log">
            <b>{{ formatDate(log.date) }}</b
            ><em> par <UserLink :user="log.moderator" /></em><br />
            <b>{{ log.type }} de <UserLink :user="log.author" /></b><br />
            {{ log.reason }}
          </div>
        </ScrollableContainer></GlobalCard
      ></template
    >
    <RouterView />
    <template #right-column
      ><GlobalCard color="blue">
        <template #button>
          <GlobalButton type="button" icon="search.svg">Chercher</GlobalButton>
        </template>
        <form class="flex fullwidth" @submit.prevent="search()">
          <input
            v-model="username"
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            aria-label="Username"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
            @keyup="onKeypressValue()"
            @keydown="onKeypressValue()"
          />
          <button type="submit" class="btn-action">go</button>
        </form>
        <div v-if="suggestionsHere && username != ''" class="suggestions">
          <ul>
            <li v-for="suggestion in suggestionsHere" :key="suggestion">
              <router-link :to="'/admin/' + suggestion.mid">{{
                suggestion.pseudo
              }}</router-link>
            </li>
          </ul>
        </div></GlobalCard
      ></template
    >
  </GlobalContainer>
</template>
<script setup lang="ts">
import ScrollableContainer from "@/components/core/ScrollableContainerComponent.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";

const locales = { fr, enGB };

// @vuese
// @group View
// Admin page.
const data = ref<any[]>([]);
const username = ref("");
const suggestionsHere = ref<any[]>([]);

function onKeypressValue() {
  if (username.value !== undefined && username.value !== "") {
    /* api.get("/api/test.json").then((res: any) => {
          if (res.data && res.data.length > 0) {
            suggestionsHere.value = res.data;
          }
        }); */
  }
}

function search() {
  return true;
}
function formatDate(date: number) {
  return format(new Date(date), "PPp", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}
// /api/admin.json
// meta title section.admin
</script>
<style lang="scss" scoped>
.log {
  padding: var(--md-gap);
}

.log:nth-child(odd) {
  background: #fff3;
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
