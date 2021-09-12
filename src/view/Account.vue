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
    };
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/account.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await api.get("/api/account.json");
    this.data = req.data;
  },
};
</script>
