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
    <Card v-if="data"
      ><template #subtop>Sur le tchat</template
      ><span
        v-for="user in data.tchat"
        :key="user.id"
        style="display: inline-block"
        ><user :user="user" />&nbsp;({{ user.room }})&nbsp;
      </span></Card
    ><br />
    <Card v-if="data"
      ><template #subtop>Sur le site</template
      ><span v-for="(user, index) in data.site" :key="user.id"
        ><user :user="user" :separator="index < data.tchat.length - 1" /></span
    ></Card>
    <template #right-column
      ><Card
        header="ensavoirplus_blue.gif"
        :width="154"
        :height="34"
        top
        color="blue"
        justified
        v-if="data"
      >
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />Le record de connectés est de <b>{{ data.record.online }}</b> le
        <b>{{ formatDate }}</b
        >.
      </Card></template
    >
  </Container>
</template>
<script>
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View/Members
// Online page
export default {
  name: "Online",
  data() {
    return {
      data: null
    };
  },
  computed: {
    formatDate() {
      return format(new Date(this.data.record.date), "PPp", {
        locale: locales[navigator.language.split("-")[0]]
      });
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/online.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/online.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.online",
    meta: [
      {
        name: "description",
        content:
          "chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chimboz, accueil"
      },
      {
        property: "og:description",
        content: "Chimboz, accueil"
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>

<style lang="scss" scoped></style>
