<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
        </div> </Card
      ><br />
      <Rules top />
    </template>
    <Card color="yellow" v-if="data" justified
      ><template #subtop>Messagerie</template>
      <router-link
        class="message fullwidth"
        v-for="message of data"
        :key="message.user.id"
        :to="'/messenger/' + message.user.id"
      >
        <Tiz
          :avatar="message.user.look.avatar"
          :emote="message.user.look.emote"
          :hat="message.user.look.hat"
          :body="message.user.look.body"
          :shoe="message.user.look.shoe"
          :item0="message.user.look.item0"
          :item1="message.user.look.item1"
          :item2="message.user.look.item2"
        />
        <h3
          ><user :user="message.user" /> &nbsp;<sub>{{
            formatDate(message.date)
          }}</sub></h3
        >
        <span class="content">{{ message.content.slice(0, 64) }}</span>
      </router-link>
    </Card>
    <template #right-column></template>
  </Container>
</template>
<script>
import User from "../../component/link/User.vue";
import Tiz from "../../component/Tiz.vue";
import { formatDistanceToNow } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Messenger",
  components: {
    User,
    Tiz
  },
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
  display: block;
  text-decoration: none;
  color: #284555;
  font-weight: normal;
  overflow: hidden;
}

.message .tiz {
  float: left;
  transform: scale(2);
  border-radius: 100%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin-right: 50px;
}

.message::after {
  content: "";
  clear: both;
  display: table;
}

.message:hover {
  background: #fff6;
}
</style>
