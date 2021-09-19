<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="conversation" />
        </div> </Card
      ><br />
      <Rules top />
      <Security />
    </template>
    <Demo />

    <template #right-column><Card color="blue" top> </Card> </template>
  </Container>
</template>
<script>
export default {
  name: "Conversation",
  components: {},
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/conversation.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/conversation.json");
    this.data = req.data;
  }
};
</script>
<style lang="scss"></style>
<style lang="scss" scoped></style>
