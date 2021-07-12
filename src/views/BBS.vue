<template>
  <Container>
    <template #left-column
      ><Column top>
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
        20CeNt avec 1077 match nuls ! <br /> </Column
    ></template>
    <BoardList>
    </BoardList>
  </Container>
</template>

<script>
import BoardList from "@/components/BBS/BoardList.vue";
import Container from "@/views/Container.vue";
import Column from "@/components/Column.vue";

export default {
  name: "BBS",
  components: {
    BoardList,
    Container,
    Column,
  },
};
</script>
<style lang="scss" scoped>
</style>
