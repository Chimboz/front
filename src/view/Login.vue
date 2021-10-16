<template>
  <Container>
    <template #left-column>
      <Rules top /><br />
      <Security />
      <Card
        color="yellow"
        header="packs.png"
        :width="154"
        :height="96"
        class="packs"
      >
        <template #button>
          <Button color="yellow" icon="register.svg">Pack</Button>
        </template>
        <Pack header="summer.png" footer="summer.png" /><br /><br />
      </Card>
    </template>
    <Demo />

    <template #right-column
      ><Card color="blue" top v-if="data">
        <template #header
          ><router-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $t("connecteds", data.connected) }}</router-link
          ></template
        >
        {{ data.members }} {{ $t("members.text", data.members) }} <br />
        {{ data.last24 }} {{ $t("members.past", data.last24) }} </Card
      ><br />
    </template>
  </Container>
</template>
<script>
import Demo from "@/component/Demo.vue";
import Pack from "@/component/Pack.vue";
import Security from "@/component/slot/Security.vue";

export default {
  name: "Login",
  components: {
    Pack,
    Demo,
    Security
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/members.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/members.json");
    this.data = req.data;
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    }
  }
};
</script>
<style lang="scss">
.packs .card-btn {
  background: linear-gradient(
    to bottom,
    #7aaaf0,
    #7aaaf0 50%,
    var(--main-card-color) 50%
  ) !important;
}
</style>
<style lang="scss" scoped>
.login-form {
  justify-content: center;
}
</style>
