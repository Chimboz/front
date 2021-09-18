<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Cabin
      v-if="data"
      :data="data"
      @update-item="(name, item) => (data.blazon[name] = item)"
      @previous-item="
        (name) =>
          (data.blazon[name] =
            data.items[name][data.items[name].indexOf(data.blazon[name]) - 1])
      "
      @next-item="
        (name) =>
          (data.blazon[name] = this.data.items[name][
            data.items[name].indexOf(data.blazon[name]) + 1
          ])
      "
    />
  </Container>
</template>
<script>
import Card from "@/component/Card.vue";
import Cabin from "@/component/blazon/Cabin.vue";
import Container from "@/component/Container.vue";
import Rules from "@/component/slot/Rules.vue"

export default {
  name: "Edit",
  components: {
    Card,
    Cabin,
    Container,
    Rules
  },
  data() {
    return {
      data: null
    };
  },

  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/edit.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/edit.json");
    this.data = req.data;
  }
};
</script>
