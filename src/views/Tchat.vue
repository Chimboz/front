<template>
  <Container>
    <Card blue>
      <img draggable="false"  alt="Download now on F-Droid" title="Download now on F-Droid" src="@/assets/img/appstores/fdroid-fr.svg" />
      <img draggable="false"  alt="Download now on Google Play Store" title="Download now on Google Play Store" src="@/assets/img/appstores/google-fr.svg" />
      <img draggable="false"  alt="Download now on Apple Store" title="Download now on Apple Store" src="@/assets/img/appstores/apple-bk-fr.svg" />
    </Card>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Container from "@/views/Container.vue";

export default {
  name: "Tchat",
  components: {
    Card,
    Container,
  },
  beforeRouteEnter(to, from, next) {
    setTimeout(()=>next(),2000)

  },
  async beforeRouteUpdate() {
    setTimeout(()=>console.log("2000ms"),2000)
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-evenly;
}
.card img {
  padding: 0 10px;
  width: 33%;
}
</style>
