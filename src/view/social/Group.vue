<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card filename="group.gif" :height="70" color="blue">
      <blazon :shape="0" :top="7" :bot="26" colora="#376da8" colorb="#eee" />
    </Card>
    <template #right-column
      ><Card color="blue" top>
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
  </Container>
</template>
<script>
import Card from "@/component/Card.vue";
import Rules from "@/component/slot/Rules.vue";
import Container from "@/component/Container.vue";
import Blazon from "../../component/blazon/Blazon.vue";

export default {
  name: "Group",
  components: {
    Card,
    Container,
    Rules,
    Blazon,
  },
  data() {
    return {
      data: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/members.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/members.json");
    this.data = req.data;
  },
};
</script>

<style lang="scss" scoped></style>
