<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>This is an about page</h2>
    <p>tg</p>
    <Card filename="head_bac_page.gif">
      <template v-slot:header> Records ! </template>
      <template v-slot:subtitle
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
      20CeNt avec 1077 match nuls ! <br />
    </Card>
    <br>
    <br>
    <Card>
      <template v-slot:header> Records ! </template>
      <template v-slot:subtitle
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
      20CeNt avec 1077 match nuls ! <br />
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";

export default {
  name: "Account",
  components: {
    Card,
  },
};
</script>
<style>
</style>

