<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard color="yellow" v-if="data" justified
      ><template #subtop>Niveaux</template>
    </GlobalCard>
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script>
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };
import messageRender from "@/module/messageRender.js";

// @vuese
// @group View/Account
// Conversation page (view for 1-to-1 messaging)
export default {
  name: "LevelView",
  data() {
    return {
      data: null,
      message: ""
    };
  },
  methods: {
    messageRender(message) {
      return messageRender(message);
    },
    formatDate(date) {
      return formatDistanceToNowStrict(new Date(date), {
        locale: locales[navigator.language.split("-")[0]],
        addSuffix: true
      });
    },
    hashColor(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colour = "#";
      for (i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
      }
      return colour;
    },
    send() {
      console.log("Envoyé " + this.message);
      this.data.messages.push({
        you: true,
        content: this.message,
        date: Date.now()
      });
      this.message = "";
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/conversation.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/conversation.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.conversation",
    meta: [
      {
        name: "description",
        content:
          "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
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

<style lang="scss" scoped>
.messages {
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
}
.tiz-portrait {
  display: inline-block;
  margin: 6px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 1px 1px 1px #0005;
}

.content {
  padding: 12px 12px 6px 12px;
  background: #fff;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 1px 1px #0005;
}

.message .message-content {
  align-items: flex-start;
}

.message.you .message-content {
  align-items: flex-end;
  width: 100% !important;
  text-align: right;
}

.message.you .content {
  background: #fff !important;
  mix-blend-mode: unset;
  color: var(--dark);
}
</style>
