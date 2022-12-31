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
    <Card
      v-if="data"
      header="group.webp"
      :height="70"
      color="blue"
      justified
    >
      <div class="group-header">
        <blazon
          :shape="data.blazon.shape"
          :top="data.blazon.top"
          :bot="data.blazon.bot"
          :primary="data.blazon.primary"
          :secondary="data.blazon.secondary"
        />
        <div class="flex col">
          <StrokeText class="group-name">{{ data.name }}</StrokeText>
          <div class="motto">"{{ data.motto }}"</div>
        </div>
        <img
          v-if="data.official"
          src="@/assets/img/group/official.svg"
          alt="Official"
          style="float: right"
          @contextmenu.prevent
        />
      </div>
      <div
        class="markdown-body description"
        v-html="messageRender(data.description)"
      ></div>
      <br />
      <Card v-if="data" class="justified">
        {{ $t(`group.leader.${data.type}`) }}:
        <UserLink :user="data.leader" />
        <br /><br />
        Occupation du groupe:
        <b>{{ (((data.members.length + 1) / data.size) * 100).toFixed(0) }}%</b>
        (<b>{{ data.members.length + 1 }}</b
        >/<b>{{ data.size }}</b
        >)<br /><br />
        Membres du groupe:
        <UserLink
          v-for="(member, index) of data.members"
          :key="member.id"
          :user="member"
          :separator="index < data.members.length - 1"
        /><br /><br />
        Localisation : <b>{{ data.localisation }}</b
        ><br /><br />
        <div class="icon flex col centered">
          <div style="line-height: 10px">Niveau moyen</div>
          <div>
            <img
              v-for="digit in data.level.toString(10)"
              :key="digit.index"
              draggable="false"
              :alt="digit"
              width="19"
              height="21"
              :src="asset(`img/number/${digit}.svg`)"
              @contextmenu.prevent
            />
          </div>
        </div>
        &nbsp;<img
          :src="asset(`img/group/${data.status}.png`)"
          :alt="data.status"
          @contextmenu.prevent
        />
      </Card>
      <br />
      Groupe no. <b>{{ data.id }}</b> créé le
      <b
        >{{ format(data.date, "PPp") }} ({{
          distance(Date.now(), data.date)
        }}
        jours)</b
      ><br />
      <br v-if="data.bacteria" />
      <Card v-if="data.bacteria" class="justified"
        ><img
          src="@/assets/img/group/bacteria.gif"
          alt="Bacteria"
          style="float: left"
          @contextmenu.prevent
        /><b>Bacteria</b><br /><br />
        Classé : <b>{{ data.bacteria.rank }}</b
        >/<b>{{ data.bacteria.total }}</b> avec
        <b>{{ data.bacteria.points }}</b> points.</Card
      ><br v-if="data.patojdur" />
      <Card v-if="data.patojdur" class="justified"
        ><img
          src="@/assets/img/group/patojdur.gif"
          alt="Patojdur"
          style="float: left"
          @contextmenu.prevent
        /><b>Patojdur</b><br /><br />
        Classé : <b>{{ data.patojdur.rank }}</b
        >/<b>{{ data.patojdur.total }}</b> avec
        <b>{{ data.patojdur.points }}</b> points.</Card
      ><br v-if="data.popularity" />
      <Card v-if="data.popularity" class="justified"
        ><img
          src="@/assets/img/group/popularity.gif"
          alt="Popularity"
          style="float: left"
          @contextmenu.prevent
        /><b>Popularity</b><br /><br />
        Classé : <b>{{ data.popularity.rank }}</b
        >/<b>{{ data.popularity.total }}</b> avec
        <b>{{ data.popularity.points }}</b> points.</Card
      ><br v-if="data.global" />
      <Card v-if="data.global" class="justified">
        Classement général : <b>{{ data.global.rank }}</b
        >/<b>{{ data.global.total }}</b> avec
        <b>{{ data.global.points }}</b> points.</Card
      >
    </Card>
    <template #right-column
      ><Card v-if="data" color="blue">
        <template #header> Inscription pour rejoindre ce groupe </template>
        <div class="justified">
          <img
            :src="asset(`img/group/${data.status}.png`)"
            :alt="data.status"
            style="float: left; margin-right: 4px"
          />
          {{ $t(`group.${data.status}`) }}
          <div v-if="user">
            <br />
            <a
              style="cursor: var(--pointer)"
              @click.prevent="join"
              @keyup.prevent="join"
              >Rejoindre ce groupe</a
            >
          </div>
        </div>
      </Card></template
    >
  </Container>
</template>
<script setup lang="ts">


import api from "@/plugins/api";
import messageRender from "@/plugins/messageRender";
import { fetchData, asset } from "@/utils";
import { format, distance } from "@/utils/date";
import useAuthStore from "@/stores/auth";
import { ref, computed } from "vue";
import { useHead } from "@vueuse/head";

const auth = useAuthStore();
const user = computed(() => auth.user);

const data = ref<any>(undefined);

function join() {
  useFetch(`groups/demand/${data.value.id}`);
}

fetchData(async (params) => {
  data.value = (await useFetch(`groups/${params.id}`)).data;
  data.value.level = 25;
});

// /api/group.json
useHead({ title: "section.group" });
</script>
<style lang="scss" scoped>
.blazon {
  float: left;
}
.motto {
  text-align: left;
  padding: 0 6px;
}

.group-name {
  height: 28px;
  font-size: 28px;
  fill: var(--text-button);
  stroke: #f39;
  stroke-width: 4;
}

.description {
  text-align: left;
}

.group-header {
  font-family: "Chimboz Heavy";
  color: #3c556f;
  font-size: 16px;
  min-height: 90px;
}

.icon {
  display: inline-flex;
  font-family: "Pixelade";
  font-size: 13px;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid var(--main-bg);
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
  vertical-align: middle;
}
</style>
