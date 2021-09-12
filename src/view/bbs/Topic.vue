<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
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
    };
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/topic.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
          } else {
            next("/");
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    });
  },
  beforeRouteUpdate() {
    this.axios
      .get("/api/topic.json")
      .then((res) => {
        this.data = res.data;
      })
      .catch((error) => console.log(error.toString()));
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
  },
};
</script>
