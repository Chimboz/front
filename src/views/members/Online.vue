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
    <GlobalCard v-if="data"
      ><template #subtop>Sur le tchat</template
      ><span
        v-for="user in data.tchat"
        :key="user.id"
        style="display: inline-block"
        ><UserLink :user="user" />&nbsp;({{ user.room }})&nbsp;
      </span></GlobalCard
    ><br />
    <GlobalCard v-if="data"
      ><template #subtop>Sur le site</template
      ><span v-for="(user, index) in data.site" :key="user.id"
        ><UserLink
          :user="user"
          :separator="index < data.tchat.length - 1" /></span
    ></GlobalCard>
    <template #right-column
      ><GlobalCard
        header="ensavoirplus.webp"
        :width="154"
        :height="34"
        top
        color="blue"
        justified
        v-if="data"
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />Le record de connectés est de <b>{{ data.record.online }}</b> le
        <b>{{ formatDate() }}</b
        >.
      </GlobalCard></template
    >
  </GlobalContainer>
</template>
<script setup lang="ts">
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
const locales = { fr, enGB };

// @vuese
// @group View/Members
// Online page
const data: any = ref(undefined);

function formatDate() {
  return "date";
  return format(new Date(data.value.record.date), "PPp", {
    //locale: locales[navigator.language.split("-")[0]],
  });
}

// /api/online.json
// meta title section.online
</script>

<style lang="scss" scoped></style>
