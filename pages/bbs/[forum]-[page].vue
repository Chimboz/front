<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div> </Card
      ><br />
      <Rules bot
    /></template>
    <BbsListForum :forum="data" />
    <br />
    <button type="button" style="text-align: left" @click="post = true">
      <img
        v-if="!post && data && !data.locked"
        alt="New topic"
        src="@/assets/img/bbs/post.gif"
      />
    </button>
    <BbsMarkdownInput v-if="post && !data.locked" is-topic />
    <br />
    <Card>
      <div class="columns">
        <div v-for="(description, i) in iconDescriptions" :key="i">
          <img
            :src="description.src"
            :alt="description.label"
            :title="description.label"
            draggable="false"
            @contextmenu.prevent
          />
          {{ description.label }}
        </div>
      </div>
    </Card>
  </Container>
</template>

<script setup lang="ts">
const iconDescriptions = [
  {
    src: asset("img/bbs/folder_new.svg"),
    label: "Nouveaux messages",
  },
  {
    src: asset("img/bbs/folder_new_hot.svg"),
    label: "Nouveaux messages [ Populaire ]",
  },
  {
    src: asset("img/bbs/folder_new_lock.svg"),
    label: "Nouveaux messages [ Verrouillé ]",
  },
  {
    src: asset("img/bbs/folder.svg"),
    label: "Pas de nouveaux messages",
  },
  {
    src: asset("img/bbs/folder_hot.svg"),
    label: "Pas de nouveaux messages [ Populaire ]",
  },
  {
    src: asset("img/bbs/folder_lock.svg"),
    label: "Pas de nouveaux messages [ Verrouillé ]",
  },
  {
    src: asset("img/bbs/folder_announce.svg"),
    label: "Annonce",
  },
  {
    src: asset("img/bbs/folder_sticky.svg"),
    label: "Post-it",
  },
];
const route = useRoute();
const post = ref(false);
const { data } = await useFetch(`https://chimboz.fr/api/bbs/forum/${route.params.forum}?page=${route.params.page}`);

useHead({ title: "section.forum" });
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
