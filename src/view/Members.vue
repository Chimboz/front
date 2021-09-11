<template>
  <Container>
    <template #left-column>
      <Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries></SideNavEntries>
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card filename="new.gif" blue>
      <div class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div><br />
      Les derniers membres qui ont rejoint l'archipel !

      <br />
      <router-link to="/annuaire"
        >Voir la liste des nouveaux arrivants</router-link
      >
    </Card>
    <br />
    <Card filename="popularity.gif" blue>
      <div  class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les membres les plus populaire de l'archipel !

      <br />
      <router-link to="/popu">Voir la page popularité</router-link>
    </Card>
    <br />
    <Card filename="wedding.gif" blue>
      <div  class="flex"  style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les derniers mariages célébrés par Guruji
      <br />
      <router-link to="/wedding">Voir la page des mariages</router-link>
    </Card>
    <template #right-column
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
  </Container>
</template>

<script>
import Card from "@/component/Card.vue";
import Rules from "@/component/slot/Rules.vue";
import Tiz from "@/component/Tiz.vue";
import Container from "@/component/Container.vue";

export default {
  name: "Members",
  components: {
    Card,
    Container,
    Rules,
    Tiz,
  },
};
</script>

<style lang="scss" scoped>
</style>
