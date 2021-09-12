<template>
  <Container v-if="data">
    <template #left-column>
      <Rules top /><br />
      <Security />
      <Card yellow filename="packs.png" class="packs">
        <template #button>
          <Button yellow icon="register.svg">Pack</Button>
        </template>
        <Pack header="summer.png" footer="summer.png" /><br /><br />
      </Card>
    </template>
    <Demo />

    <template #right-column
      ><Card blue top>
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
import Button from "@/component/Button.vue";
import Card from "@/component/Card.vue";
import Demo from "@/component/Demo.vue";
import Pack from "@/component/Pack.vue";
import Container from "@/component/Container.vue";
import Rules from "@/component/slot/Rules.vue";
import Security from "@/component/slot/Security.vue";

export default {
  name: "Login",
  components: {
    Button,
    Container,
    Card,
    Pack,
    Demo,
    Rules,
    Security,
  },
  data() {
    return {
      data: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/home.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
          } else {
            next("/");
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    });
  },
  beforeRouteUpdate() {
    this.axios
      .get("/api/home.json")
      .then((res) => {
        this.data = res.data;
      })
      .catch((error) => console.log(error.toString()));
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
  },

};
</script>
<style lang="scss">
.packs .card-btn {
  background: linear-gradient(
    to bottom,
    #7aaaf0,
    #7aaaf0 50%,
    var(--main-card-color) 50%
  );
}
</style>
<style lang="scss" scoped>
.login-form {
  justify-content: center;
}
</style>
