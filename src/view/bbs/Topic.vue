<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community"/>
        </div> </Card
    ></template>
    <Topic :messages="data"> </Topic>
    <br />
    <MarkdownInput v-if="authenticated" />
  </Container>
</template>

<script>
import Card from "@/component/Card.vue";
import Topic from "@/component/bbs/list/Topic.vue";
import Container from "@/component/Container.vue";
import MarkdownInput from "@/component/MarkdownInput.vue";
import { mapGetters } from "vuex";

export default {
  name: "BBS",
  components: {
    Topic,
    Container,
    Card,
    MarkdownInput,
  },
  data() {
    return {
      data: [],
      error: null,
      loading: true,
    };
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/topic.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.loading = false;
          } else {
            // Didn't like the result, redirect
            next("/bbs");
          }
        })
        .catch((error) => {
          vm.error = error.toString();
        });
    });
  },
  async beforeRouteUpdate() {
    try {
      this.data = await this.axios
        .get("/api/topic.json")
        .then((res) => res.data);
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>
