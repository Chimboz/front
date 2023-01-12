<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div>
      </Card>
      <br>
      <Rules bot />
    </template>
    <BbsList :boards="data" />
    <br>
    <Card>
      <div class="columns">
        <div>
          <img
            draggable="false"
            :alt="$t('bbs.lock_new')"
            :title="$t('bbs.lock_new')"
            src="@/assets/img/bbs/folder_new_lock.svg"
            @contextmenu.prevent
          >&nbsp;{{ $t("bbs.lock_new") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            :alt="$t('bbs.lock')"
            title="$t('bbs.lock')"
            src="@/assets/img/bbs/folder_lock.svg"
            @contextmenu.prevent
          >&nbsp;{{ $t("bbs.lock") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            :alt="$t('bbs.new')"
            :title="$t('bbs.new')"
            src="@/assets/img/bbs/folder_new.svg"
            @contextmenu.prevent
          >&nbsp;{{ $t("bbs.new") }}&nbsp;
        </div>
        <div>
          <img
            draggable="false"
            :alt="$t('bbs.nonew')"
            :title="$t('bbs.nonew')"
            src="@/assets/img/bbs/folder.svg"
            @contextmenu.prevent
          >&nbsp;{{ $t("bbs.nonew") }}&nbsp;
        </div>
      </div>
    </Card>
  </Container>
</template>

<script setup lang="ts">

const { data } = await useFetch<any>('https://chimboz.fr/api/bbs')

useHead({ title: 'section.bbs' })
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
