<template>
  <Column bot top>
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
    </Column>
</template>

<script>
import Column from "@/components/Column.vue";

export default {
  name: "Account",
  components: {
    Column
  },
};
</script>
<style>
</style>
