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
    <Card filename="head_bac_page.gif">
      <template #header> Mon compte </template>
      <template #subtitle
        >Mon compte</template
      >
      Mon compte
    </Card>
    <template #right-column
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
  </Container>
</template>
<script>
import Card from "@/components/Card.vue";
import Container from "@/views/Container.vue";
import Column from "@/components/Column.vue";

export default {
  name: "Account",
  components: {
    Card,
    Container,
    Column,
  },
};
</script>
<style lang="scss" scoped>
</style>

