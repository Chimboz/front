<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card color="yellow" v-if="data" justified header="mi.svg">
      <div class="flex">
        <input
          required
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md"
          autocomplete="username"
          :placeholder="$t('placeholder.username')"
        /><button type="button" class="btn-action">go</button></div
      >
      <router-link
        class="message fullwidth flex"
        v-for="message of data"
        :key="message.user.id"
        :to="'/messenger/' + message.user.id"
      >
        <div
          class="tiz-portrait"
          :style="{ background: hashColor(message.user.name) }"
        >
          <Avatar
            :avatar="message.user.look.avatar"
            :emote="message.user.look.emote"
            :hat="message.user.look.hat"
            :body="message.user.look.body"
            :shoe="message.user.look.shoe"
            :item0="message.user.look.item0"
            :item1="message.user.look.item1"
            :item2="message.user.look.item2"
          />
        </div>
        <div
          class="flex col"
          style="
            justify-content: space-evenly;
            padding: 6px;
            width: calc(100% - 50px);
          "
        >
          <div>
            <h3
              ><user :user="message.user" /><span
                style="float: right; font-weight: normal; font-size: 12px"
                >{{ formatDate(message.date) }}</span
              ></h3
            ></div
          >
          <span class="content">{{ message.content.slice(0, 64) }}</span>
        </div>
      </router-link>
    </Card>
    <template #right-column></template>
  </Container>
</template>
<script>
import { formatDistanceToNow } from "date-fns";
import { fr, enGB } from "date-fns/locale";

// @vuese
// @group View/Account
// Messenger page
export default {
  name: "Messenger",
  data() {
    return {
      data: null
    };
  },
  methods: {
    formatDate(date) {
      return formatDistanceToNow(new Date(date), {
        locale: window.__localeId__,
        addSuffix: true
      });
    },
    hashColor(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colour = "#";
      for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
      }
      return colour;
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/messenger.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/messenger.json");
    this.data = req.data;
    next();
  }
};
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.message {
  text-decoration: none;
  color: #284555;
  font-weight: normal;
  overflow: hidden;
}

.tiz-portrait {
  margin: 6px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  float: left;
  box-shadow: 0 1px 1px 1px #0005;
}

.message::after,
.message .tiz::after {
  content: "";
  clear: both;
  display: table;
}

.message:hover {
  background: #fff6;
}
</style>
