<template>
  <Container>
    <template #left-column
      ><Card color="blue" justified>
        <template #button>
          <Button icon="rules.svg" type="button">Registre</Button>
        </template>
        <ScrollableContainer
          route="adminlogs"
          class="fullwidth"
          :max-height="600"
          @scroll-data="(results: any[]) => (data = [...data, ...results])"
        >
          <div v-for="(log, index) in data" :key="index" class="log">
            <b>{{ format(log.date, "PPp") }}</b
            ><em> par <LinkUser :user="log.moderator" /></em><br />
            <b>{{ log.type }} de <LinkUser :user="log.author" /></b><br />
            {{ log.reason }}
          </div>
        </ScrollableContainer></Card
      ></template
    >
    <RouterView />
    <template #right-column
      ><Card color="blue">
        <template #button>
          <Button type="button" icon="search.svg">Chercher</Button>
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
              <NuxtLink :to="'/admin/' + suggestion.mid">{{
                suggestion.pseudo
              }}</NuxtLink>
            </li>
          </ul>
        </div></Card
      ></template
    >
  </Container>
</template>
<script setup lang="ts">



import { format } from "@/utils/date";

const data = ref<any[]>([]);
const username = ref("");
const suggestionsHere = ref<any[]>([]);

function onKeypressValue() {
  if (username.value !== undefined && username.value !== "") {
    /* useFetch("/api/test.json").then((res: any) => {
          if (res.data && res.data.length > 0) {
            suggestionsHere.value = res.data;
          }
        }); */
  }
}

function search() {
  return true;
}

useHead({ title: "section.admin" });
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
