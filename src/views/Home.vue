<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <img
          src="@/assets/img/home/fd_niveau.gif"
          style="width: calc(100% + 10px); margin-left: -5px"
        />
        <img
          src="@/assets/img/home/fd_mi.png"
          style="width: calc(100% + 10px); margin-left: -5px"
        />
        <img
          src="@/assets/img/home/fd_amis.png"
          style="width: calc(100% + 10px); margin-left: -5px"
        />
      </Card><br>
      <Card yellow> monkaS </Card></template
    >
    <Card filename="header_lottery.png">
      <template #header
        ><img src="@/assets/img/header_hello.png" style="width: 100%"
      /></template>
      Tu peux gagner jusqu'à 30 pépettes<br />
      Clique sur le bouton pour gagner tes ppts </Card
    ><br />
    <Card yellow justified>
      <template #subtop>Chapaniouz</template>
      <template #header
        ><img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
          style="float: left; margin: 0 17px 17px 0"
        />
        Changelog du 12/07/2021
      </template>

      - La salle En route vers Kopakabana est désormais ouverte ! L'ambiance
      change selon l'heure (heure de Paris)<br />
      - La salle Patojdur est désormais ouverte !<br />
      - Le jeu Patojdur est opérationnel avec son classement (il manque
      l'animation de nage)<br />
      VIDEZ VOTRE CACHE<br />
    </Card>
    <br />
    <Card>
      <template #subtop>Chaparazzi</template>
      <div class="gallery">
        <img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
          style="margin: auto"
        /><img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
          style="margin: auto"
        /><img
          src="@/assets/img/chimboking.gif"
          alt="Chimboking"
          style="margin: auto"
        />
      </div>
    </Card>
    <template #right-column
      ><Card blue top>
        <template #header
          ><h1>2</h1>
          connectés</template
        >
        233 membres<br />
        112 passés depuis 24h.
      </Card></template
    >
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Container from "@/views/Container.vue";

export default {
  name: "Home",
  components: {
    Card,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}
</style>