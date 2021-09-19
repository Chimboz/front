<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </Card
    ></template>
    <Topic v-if="data" :messages="data"> </Topic>
    <br />
    <MarkdownInput v-if="authenticated" />
  </Container>
</template>

<script>
import Topic from "@/component/bbs/list/Topic.vue";
import MarkdownInput from "@/component/MarkdownInput.vue";
import { mapGetters } from "vuex";

export default {
  name: "BBS",
  components: {
    Topic,
    MarkdownInput,
  },
  data() {
    return {
      data: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/topic.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/topic.json");
    this.data = req.data;
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
  },
};
</script>
