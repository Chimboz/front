<template>
  <Card v-if="data"
    >{{ $route.params.id }}<br />{{ data.name }}<br />{{ data.type }}<br />{{
      data.rarity
    }}<user v-for="user of data.owner" :key="user.id" :user="user"
  /></Card>
  <br />
</template>
<script>
export default {
  name: "Item",
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
