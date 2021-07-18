<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <template #header> Records ! </template>
        <template #subtitle
          >Dans le bon ou le mauvais, ce sont les meilleurs !</template
        >
        parties jouées:
        <br />
        fredazur avec 22665 parties jouées ! <br />
        <br />
        parties gagnées: <br />
        AleXxX_DeViLMaN avec 15171 parties gagnées ! <br />
        <br />
        parties perdues: <br />
        fredazur avec 20763 parties perdues ! <br />
        <br />
        match nuls: <br />
        20CeNt avec 1077 match nuls ! <br /> </Card
    ></template>
    <BoardList :boards="data"> </BoardList>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import BoardList from "@/components/BBS/BoardList.vue";
import Container from "@/views/Container.vue";

export default {
  name: "BBS",
  components: {
    BoardList,
    Container,
    Card,
  },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/bbs.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.loading = false;
          } else {
            // Didn't like the result, redirect
            next("/");
          }
        })
        .catch((error) => {
          vm.error = error.toString();
        });
    });
  },
  async beforeRouteUpdate() {
    try {
      this.data = await this.axios.get("/api/bbs.json");
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>
<style lang="scss">
.main-column {
  width: 100% !important;
}
</style>
