<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" justified>
        <template #button>
          <GlobalButton icon="rules.svg">Registre</GlobalButton>
        </template>
        <ScrollableContainer
          route="adminlogs"
          class="fullwidth"
          @scroll-data="(results: Array<any>) => (data = [...data, ...results])"
        >
          <div class="log" v-for="(log, index) in data" :key="index">
            <b>{{ formatDate(log.date) }}</b
            ><em> par <UserLink :user="log.moderator" /></em><br />
            <b>{{ log.type }} de <UserLink :user="log.author" /></b><br />
            {{ log.reason }}
          </div>
        </ScrollableContainer></GlobalCard
      ></template
    >
    <router-view></router-view>
    <template #right-column
      ><GlobalCard color="blue">
        <template #button>
          <GlobalButton icon="search.svg">Chercher</GlobalButton>
        </template>
        <form @submit.prevent="search()" class="flex fullwidth">
          <input
            required
            autofocus
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
            v-model="username"
            v-on:keyup="onKeypressValue()"
            v-on:keydown="onKeypressValue()"
          />
          <button type="submit" class="btn-action">go</button>
        </form>
        <div class="suggestions" v-if="suggestionsHere && username != ''">
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
import ScrollableContainer from "@/components/core/ScrollableContainer";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
const locales = { fr, enGB };

// @vuese
// @group View
// Admin page.
const data = ref<Array<any>>([]);
const username = ref("");
const suggestionsHere = ref<Array<any>>([]);

function onKeypressValue() {
  if (username.value != undefined && username.value != "") {
    /*api.get("/api/test.json").then((res: any) => {
          if (res.data && res.data.length > 0) {
            suggestionsHere.value = res.data;
          }
        });*/
  }
}

function search(){
  return true;
}
function formatDate(date: number) {
  return format(new Date(date), "PPp", {
    //locale: locales[navigator.language.split("-")[0]],
  });
}
// /api/admin.json
// meta title section.admin
</script>
<style lang="scss" scoped>
.log {
  padding: var(--md-gap);
}

.log:nth-child(2n + 1) {
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
