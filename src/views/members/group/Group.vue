<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <GlobalCard
      header="group.webp"
      :height="70"
      color="blue"
      v-if="data"
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
          style="float: right"
        />
      </div>
      <div class="markdown-body description" v-html="formatDescription"></div>
      <br />
      <GlobalCard v-if="data" class="justified">
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
          v-for="(user, index) of data.members"
          :user="user"
          :key="user.id"
          :separator="index < data.members.length - 1"
        /><br /><br />
        Localisation : <b>{{ data.localisation }}</b
        ><br /><br />
        <div class="icon flex col centered">
          <div style="line-height: 10px">Niveau moyen</div>
          <div>
            <img
              draggable="false"
              @contextmenu.prevent
              :alt="digit"
              v-for="digit in data.level.toString(10)"
              :key="digit.index"
              width="19"
              height="21"
              :src="require(`@/assets/img/number/${digit}.svg`)"
            />
          </div>
        </div>
        &nbsp;<img :src="require(`@/assets/img/group/${data.status}.png`)" />
      </GlobalCard>
      <br />
      Groupe no. <b>{{ $route.params.id }}</b> créé le
      <b>{{ formatDate }} ({{ formatDistance }} jours)</b><br />
      <br />
      <GlobalCard v-if="data" class="justified"
        ><img src="@/assets/img/group/bacteria.gif" style="float: left" /><b
          >Bacteria</b
        ><br /><br />
        Classé : <b>{{ data.bacteria.rank }}</b
        >/<b>{{ data.bacteria.total }}</b> avec
        <b>{{ data.bacteria.points }}</b> points.</GlobalCard
      ><br />
      <GlobalCard v-if="data" class="justified"
        ><img src="@/assets/img/group/patojdur.gif" style="float: left" /><b
          >Patojdur</b
        ><br /><br />
        Classé : <b>{{ data.patojdur.rank }}</b
        >/<b>{{ data.patojdur.total }}</b> avec
        <b>{{ data.patojdur.points }}</b> points.</GlobalCard
      ><br />
      <GlobalCard v-if="data" class="justified"
        ><img src="@/assets/img/group/popularity.gif" style="float: left" /><b
          >Popularity</b
        ><br /><br />
        Classé : <b>{{ data.popularity.rank }}</b
        >/<b>{{ data.popularity.total }}</b> avec
        <b>{{ data.popularity.points }}</b> points.</GlobalCard
      ><br />
      <GlobalCard v-if="data" class="justified">
        Classement général : <b>{{ data.global.rank }}</b
        >/<b>{{ data.global.total }}</b> avec
        <b>{{ data.global.points }}</b> points.</GlobalCard
      >
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="blue" v-if="data">
        <template #header> Inscription pour rejoindre ce groupe </template>
        <div class="justified">
          <img
            :src="require(`@/assets/img/group/${data.status}.png`)"
            style="float: left; margin-right: 4px"
          />
          {{ $t(`group.${data.status}`) }}
          <div v-if="authenticated">
            <br />
            <a @click.prevent="join" style="cursor: var(--pointer)"
              >Rejoindre ce groupe</a
            >
          </div>
        </div>
      </GlobalCard></template
    >
  </GlobalContainer>
</template>
<script setup lang="ts">
import Blazon from "@/components/blazon/Blazon.vue";
import StrokeText from "@/components/core/StrokeText.vue";
import messageRender from "@/modules/messageRender";
import { format, differenceInCalendarDays } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
const auth = useAuthStore();
const user = auth.user;
const locales = { fr, enGB };

// @vuese
// @group View/Members/Group
// Group view page
const data = ref<any>(null);
const authenticated = true;

function formatDescription() {
  return messageRender(data.description);
}
function formatDate() {
  return format(new Date(data.date), "PPp", {
    // locale: locales[navigator.language.split("-")[0]],
  });
}
function formatDistance() {
  return differenceInCalendarDays(
    new Date(),
    new Date(data.date) /*, {
        // locale: locales[navigator.language.split("-")[0]],
      }*/
  );
}
function join() {
  console.log("Rejoins " /*+ $route.params.id*/);
}

// /api/group.json
// meta title section.group
</script>
<style src="@/assets/css/bbs/markdown.css"></style>
<style src="katex/dist/katex.min.css"></style>
<style src="@/assets/css/bbs/code.css"></style>
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
