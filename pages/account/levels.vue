<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card v-if="data" color="yellow" justified
      ><template #subtop>Niveaux</template>
      <div class="flex">
        <div class="level-list">
          <div
            v-for="rank of data"
            :key="rank.level"
            class="pointer"
            @click="selected = rank.level"
            @keyup="selected = rank.level"
          >
            <img
              v-for="number in rank.level.toString(10)"
              :key="number.index"
              draggable="false"
              :alt="number"
              width="19"
              height="21"
              :src="asset(`img/number/${number}.svg`)"
              @contextmenu.prevent
            />&nbsp;<b>{{ rank.name }}</b>
          </div>
        </div>
        <div class="level-description flex centered">
          <img
            width="200"
            height="200"
            :alt="'Level' + data[selected].level"
            :src="asset(`img/level/${data[selected].level}.png`)"
          />
          <div v-for="(line, index) of data[selected].content" :key="index">
            {{ line }}
          </div>
          <b>Membres ayant ce niveau :</b> {{ data[selected].number }}
        </div>
      </div>
    </Card>
    <template #right-column> </template>
  </Container>
</template>
<script setup lang="ts">

import { asset, fetchData } from "@/utils";

import { useHead } from "@vueuse/head";

const data = ref<any>(undefined);
const selected = ref(0);

fetchData(async () => {
  // data.value = (await useFetch("account/levels")).data;
  // TODO remove
  data.value = (await useFetch(`https://localhost:3000/api/levels.json`)).data;
});
// /api/levels.json
useHead({ title: "section.levels" });
</script>

<style lang="scss" scoped>
.level-list {
  max-height: 450px;
  overflow-y: scroll;
  direction: rtl;
  div {
    background: var(--dark-card-yellow);
    border: 2px solid var(--main-card-yellow);
    padding: var(--gap);
    border-radius: var(--border-radius);
    direction: ltr;
  }
}
.level-description {
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0%;
}
</style>
