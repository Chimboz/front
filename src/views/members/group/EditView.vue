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
    <GlobalCard
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
        <div class="flex col centered">
          <StrokeText class="group-name">{{ data.name }}</StrokeText>
          Groupe n°{{ data.id }}<br />
          Créé le {{ formatDate(data.date) }}
        </div>
      </div>
    </GlobalCard>
    <br />
    <Cabin
      v-if="data"
      :data="{
        blazon: {
          shape: data.blazon.shape,
          top: data.blazon.top,
          bot: data.blazon.bot,
          primary: data.blazon.primary,
          secondary: data.blazon.secondary,
        },
        items: {
          primary: [
            '#444444',
            '#CECECE',
            '#999999',
            '#FF0000',
            '#CC6600',
            '#FE9E01',
            '#FFFF00',
            '#ADE76B',
            '#66CC00',
            '#018352',
            '#9412FE',
            '#376DA8',
            '#6699CC',
            '#FE81C0',
            '#FF3399',
            '#E40173',
            '#FFFFFF',
            '#000000',
          ],
          top: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          shape: [0, 1, 2, 3, 4, 5],
          bot: [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
            38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
            55, 56, 57, 58,
          ],
          secondary: [
            '#444444',
            '#CECECE',
            '#999999',
            '#FF0000',
            '#CC6600',
            '#FE9E01',
            '#FFFF00',
            '#ADE76B',
            '#66CC00',
            '#018352',
            '#9412FE',
            '#376DA8',
            '#6699CC',
            '#FE81C0',
            '#FF3399',
            '#E40173',
            '#FFFFFF',
            '#000000',
          ],
        },
      }"
      @update-item="(name: any, item: any) => (data.blazon[name] = item)"
      @previous-item="
        (name: any) =>
          (data.blazon[name] =
            data.items[name][data.items[name].indexOf(data.blazon[name]) - 1])
      "
      @next-item="
        (name: any) =>
          (data.blazon[name] =
            data.items[name][
              data.items[name].indexOf(data.blazon[name]) + 1
            ])
      "
    />
    <br />
    <GlobalCard v-if="data" color="blue">
      <template #header>Informations</template>
      <form>
        <input
          v-model="data.motto"
          maxlength="100"
          name="title"
          class="btn-md"
          type="text"
          placeholder="Motto"
        /><br /><br />
        <textarea
          v-model="data.description"
          placeholder="Description"
          required
          minlength="3"
          autocorrect="on"
          spellcheck="true"
          maxlength="60000"
          class="btn-md description"
          @focus="focusHandler"
          @select="selectionHandler"
        /><br /><br />
        <input
          v-model="data.localisation"
          maxlength="100"
          name="title"
          class="btn-md"
          type="text"
          placeholder="Localisation"
        />
        <br /><br />
        <input
          id="open"
          type="radio"
          name="status"
          value="open"
          :checked="data.status == 'open'"
        /><label for="open"
          ><img
            src="@/assets/img/group/open.png"
            width="50"
            height="50"
            alt="Open"
            draggable="false"
            @contextmenu.prevent
        /></label>
        <input
          id="demand"
          type="radio"
          name="status"
          value="demand"
          :checked="data.status == 'demand'"
        /><label for="demand"
          ><img
            src="@/assets/img/group/demand.png"
            width="50"
            height="50"
            alt="Demand"
            draggable="false"
            @contextmenu.prevent
        /></label>
        <input
          id="close"
          type="radio"
          name="status"
          value="close"
          :checked="data.status == 'close'"
        /><label for="close"
          ><img
            src="@/assets/img/group/close.png"
            width="50"
            height="50"
            alt="Close"
            draggable="false"
            @contextmenu.prevent
        /></label>
        <br /><br />
        <GlobalButton color="green" type="submit"
          ><template #prepend
            ><img
              draggable="false"
              alt="Arrow icon"
              class="arrow green jitter"
              src="@/assets/img/arrow.svg"
              @contextmenu.prevent /></template
          >Sauver</GlobalButton
        >
      </form></GlobalCard
    ><br />
    <GlobalCard v-if="data" color="blue">
      <template #header>Membres</template>
      <div v-for="user of data.members" :key="user.id" class="inline">
        <UserLink :user="user" :separator="false" /><img
          src="@/assets/img/icon/failure.svg"
          width="11"
          height="11"
          alt="Close"
          draggable="false"
          class="pointer"
          @click.prevent="removeMember(user.id)"
          @contextmenu.prevent
        />
      </div> </GlobalCard
    ><br />
    <GlobalCard v-if="data" color="blue">
      <template #header>Demandes</template>
      <div v-for="user of data.demands" :key="user.id" class="inline">
        <UserLink :user="user" :separator="false" /><img
          src="@/assets/img/icon/success.svg"
          width="11"
          height="11"
          alt="Close"
          draggable="false"
          class="pointer"
          @click.prevent="acceptDemand(user.id)"
          @contextmenu.prevent
        /><img
          src="@/assets/img/icon/failure.svg"
          width="11"
          height="11"
          alt="Close"
          draggable="false"
          class="pointer"
          @click.prevent="rejectDemand(user.id)"
          @contextmenu.prevent
        /></div></GlobalCard
    ><br />
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
    ><br /><GlobalCard
      ><a
        style="color: red; cursor: var(--pointer)"
        @click.prevent="deleteGroup()"
        >Supprimer le groupe</a
      ></GlobalCard
    >
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import Blazon from "@/components/blazon/BlazonComponent.vue";
import StrokeText from "@/components/core/StrokeTextComponent.vue";
import Cabin from "@/components/blazon/CabinComponent.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";

const locales = { fr, enGB };

// @vuese
// @group View/Members/Group
// Group edition page
const data = ref<any>(undefined);

function formatDate(date: number) {
  return format(new Date(data.value.date), "PPp", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}
function deleteGroup() {
  console.log("Suppression");
}
function removeMember(id: number) {
  console.log(`Suppression du membre ${id}`);
}
function acceptDemand(id: number) {
  console.log(`Acceptation du membre ${id}`);
}
function rejectDemand(id: number) {
  console.log(`Rejection du membre ${id}`);
}

function focusHandler() {}
function selectionHandler() {}

// /api/edit.json
// meta title section.groupedit
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

.description {
  resize: vertical;
  min-height: 240px;
}

input[type="radio"] {
  display: none;
}

label {
  cursor: var(--pointer);
}

input:checked + label {
  filter: brightness(1.2);
}
</style>
