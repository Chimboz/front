<template>
  <Container v-if="data">
    <template #left-column
      ><Card blue top>
        <router-link to="/levels">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div class="number">
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.level.toString(10)"
                :key="number.index"
                :src="require(`@/asset/img/number/${number}.svg`)"
              />
            </div></div></router-link
        ><br />
        <div class="flex col fullwidth">
          <SideNavEntries section="account" /></div></Card
      ><br />
      <Bank :credits="data.credits"
    /></template>
    <Cabin :data="data" />
    <template #right-column>
      <Card blue filename="messages.gif"> </Card><br />
      <Card blue filename="forum.gif"> </Card><br /><Card blue>
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.friendsList") }}</Button>
        </template>
      </Card>
      <br />
      <Card blue>
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.groupsList") }}</Button>
        </template>
      </Card>
    </template>
  </Container>
</template>

<script>
import Cabin from "@/component/Cabin.vue";
import Card from "@/component/Card.vue";
import Button from "@/component/Button.vue";
import Bank from "@/component/Bank.vue";
import Container from "@/component/Container.vue";

export default {
  name: "Account",
  components: {
    Card,
    Button,
    Bank,
    Container,
    Cabin,
  },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    },
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/account.json";
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
  beforeRouteUpdate() {
    this.axios
      .get("/api/account.json")
      .then((res) => {
        this.data = res.data;
        this.loading = false;
      })
      .catch((error) => (this.error = error.toString()));
  },
};
</script>
