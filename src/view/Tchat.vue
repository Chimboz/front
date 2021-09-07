<template>
  <Container>
    <Card blue>
      <img draggable="false" oncontextmenu="return false"  alt="Download now on F-Droid" title="Download now on F-Droid" src="@/asset/img/appstore/fdroid-fr.svg" />
      <img draggable="false" oncontextmenu="return false"  alt="Download now on Google Play Store" title="Download now on Google Play Store" src="@/asset/img/appstore/google-fr.svg" />
      <img draggable="false" oncontextmenu="return false"  alt="Download now on Apple Store" title="Download now on Apple Store" src="@/asset/img/appstore/apple-bk-fr.svg" />
    </Card>
  </Container>
</template>

<script>
import Card from "@/component/Card.vue";
import Container from "@/component/Container.vue";

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
  justify-content: space-evenly;
}
.card img {
  padding: 0 10px;
  width: 33%;
}
</style>
