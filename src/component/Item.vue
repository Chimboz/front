<template>
  <Card v-if="data">
    <StrokeText class="item-name">{{ data.name }}</StrokeText>
    <img :src="`/avatar/${data.type}/${data.id}.svg`" style="float: left" />

    id n°{{ $route.params.id }}<br />
    <br />{{ data.type }}<br />{{ data.rarity
    }}<user v-for="user of data.owner" :key="user.id" :user="user"
  /></Card>
  <br />
</template>
<script>
import StrokeText from "@/component/core/StrokeText.vue";

// @vuese
// @group Default
export default {
  name: "Item",
  components: {
    StrokeText
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get(`/api/item/${vm.$route.params.id}.json`).then((res) => {
        vm.data = res.data;
      })
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get(`/api/item/${to.params.id}.json`);
    this.data = req.data;
    next();
  }
};
</script>
<style lang="scss" scoped>
.item-name {
  fill: #fff;
  stroke: #f39;
  stroke-width: 3;
  font-family: "Chimboz Heavy";
  font-size: 26px;
  height: 26px;
}
</style>
