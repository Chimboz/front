<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <router-link to="/levels">
          <div class="level fullwidth">
            {{ $t("level") }}
            <div class="number" v-if="data">
              <img
                draggable="false"
                @contextmenu.prevent
                :alt="number"
                v-for="number in data.level.toString(10)"
                :key="number.index"
                width="19"
                height="21"
                :src="require(`@/asset/img/number/${number}.svg`)"
              /> </div></div></router-link
        ><br />
        <div class="flex col fullwidth">
          <SideNavEntries section="account"/></div></Card
      ><br />
      <Bank
    /></template>
    <Cabin
      v-if="data"
      :data="data"
      @update-item="(name, item) => (data.look[name] = item)"
      @previous-item="
        (name) =>
          (data.look[name] =
            data.items[name][data.items[name].indexOf(data.look[name]) - 1])
      "
      @next-item="
        (name) =>
          (data.look[name] = this.data.items[name][
            data.items[name].indexOf(data.look[name]) + 1
          ])
      "
      @change-gender="(gender) => (this.data.gender = gender)"
      v-model:motto="data.motto"
      v-model:website="data.website"
      v-model:centrea="data.centres[0]"
      v-model:centreb="data.centres[1]"
      v-model:centrec="data.centres[2]"
      v-model:centred="data.centres[3]"
    />
    <template #right-column>
      <Card
        color="blue"
        header="messages.gif"
        :width="154"
        :height="56"
        v-if="data"
      >
        <img
          draggable="false"
          @contextmenu.prevent
          :alt="number"
          v-for="number in data.pm
            .reduce((prev, curr) => +prev + +curr.new, 0)
            .toString(10)"
          :key="number.index"
          width="19"
          height="21"
          :src="require(`@/asset/img/number/${number}.svg`)"
        />
        <div v-for="message of this.data.pm" :key="message.author.id">
          <img
            draggable="false"
            @contextmenu.prevent
            :src="
              require(`@/asset/img/bbs/msg${message.new ? '_new' : ''}.svg`)
            "
            alt="Voir le dernier message"
            title="Voir le dernier message"
          /><user :user="message.author" />
        </div> </Card
      ><br />
      <Card color="blue" header="forum.gif" :width="154" :height="45"> </Card
      ><br /><Card color="blue">
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.friendsList") }}</Button>
        </template>
      </Card>
      <br />
      <Card color="blue">
        <template #button>
          <Button icon="register.svg">{{ $t("myAccount.groupsList") }}</Button>
        </template>
      </Card>
    </template>
  </Container>
</template>

<script>
import Cabin from "@/component/Cabin.vue";
import Bank from "@/component/Bank.vue";
import User from "../component/link/User.vue";

export default {
  name: "Account",
  components: {
    Bank,
    Cabin,
    User
  },

  data() {
    return {
      data: null
    };
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/account.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/account.json");
    this.data = req.data;
  },
  metaInfo: {
    title: "section.account",
    meta: [
      {
        name: "description",
        content:
          "ChapatizRetro.com est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chapatiz Retro, accueil"
      },
      {
        property: "og:description",
        content: "Chapatiz Retro, accueil"
      },
      { property: "og:site_name", content: "Chapatiz Retro" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>
