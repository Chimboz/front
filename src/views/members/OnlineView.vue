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
        />Le record de connectés est de <b>{{ data.record.online }}</b> le
        <b>{{ format(data.record.date, "PPp") }}</b
        >.
      </GlobalCard></template
    >
  </GlobalContainer>
</template>
<script setup lang="ts">
import api from "@/modules/api";
import { fetchData } from "@/utils";
import { format } from "@/utils/date";
import { ref } from "vue";

// @vuese
// @group View/Members
// Online page
const data: any = ref(undefined);

fetchData(async () => {
  data.value = (await api.get("online")).data;
});

// meta title section.online
</script>

<style lang="scss" scoped></style>
