<template>
  <Container v-if="data">
    <template #left-column>
      <Card blue top>
        Salut
      </Card>
    </template>
    <Card>
      <template #subtop>Login</template>
      <div class="flex centered login-form">
        <form>
          Cliquez sur Envoyer, il n'y a pas d'authentification encore.<br>
          <input type="text" /><br />
          <input type="password" />
          <router-link to="/" @click="login"
            ><Button green>Envoyer</Button></router-link
          >
        </form>
      </div>
    </Card>

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
      <Card blue>
        <template #button>
          <Button icon="register.svg">{{ $t("help.button") }}</Button>
        </template>

        <router-link to="/help"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Puce"
            src="@/asset/img/puce.svg"
          />{{ $t("help.tip") }}</router-link
        ></Card
      ><br />
      <Card yellow filename="packs.png">
        <template #button>
          <Button yellow icon="register.svg">Pack</Button>
        </template>
        <Pack header="summer.png" footer="summer.png" /><br /><br />
        <Button yellow icon="register.svg" class="fullwidth">Item</Button><br />
        <Pack header="summer.png" footer="summer.png" />
      </Card>
    </template>
  </Container>
</template>
<script>
import Button from "@/component/Button.vue";
import Card from "@/component/Card.vue";
import Pack from "@/component/Pack.vue";
import Container from "@/component/Container.vue";

export default {
  name: "Login",
  components: {
    Button,
    Container,
    Card,
    Pack,
  },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/home.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.loading = false;
          } else {
            next("/");
          }
        })
        .catch((error) => {
          vm.error = error.toString();
        });
    });
  },
  async beforeRouteUpdate() {
    this.axios
      .get("/api/home.json")
      .then((res) => {
        this.data = res.data;
        this.loading = false;
      })
      .catch((error) => (this.error = error.toString()));
  },
};
</script>
<style lang="scss" scoped>
.login-form {
  justify-content: center;
}
</style>
