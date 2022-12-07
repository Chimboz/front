<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <BBSList v-if="data" :boards="data"></BBSList>
    <br />
    <GlobalCard
      ><div class="columns">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="$t('bbs.lock_new')"
            :title="$t('bbs.lock_new')"
            src="@/assets/img/bbs/folder_new_lock.svg"
          />&nbsp;{{ $t("bbs.lock_new") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="$t('bbs.lock')"
            title="$t('bbs.lock')"
            src="@/assets/img/bbs/folder_lock.svg"
          />&nbsp;{{ $t("bbs.lock") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="$t('bbs.new')"
            :title="$t('bbs.new')"
            src="@/assets/img/bbs/folder_new.svg"
          />&nbsp;{{ $t("bbs.new") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            :alt="$t('bbs.nonew')"
            :title="$t('bbs.nonew')"
            src="@/assets/img/bbs/folder.svg"
          />&nbsp;{{$t('bbs.nonew')}}&nbsp;
        </div>
      </div></GlobalCard
    >
  </GlobalContainer>
</template>

<script setup lang="ts">
import BBSList from "@/components/bbs/list/BBS.vue";

// @vuese
// @group View/Community/BBS
// BBS page


  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/bbs.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/bbs.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.bbs",

  }
};
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
<style lang="scss" scoped>
.columns {
  column-count: 1;
}

@media (min-width: 400px) {
  .columns {
    column-count: 2;
  }
}

@media (min-width: 600px) {
  .columns {
    column-count: 3;
  }
}
</style>
