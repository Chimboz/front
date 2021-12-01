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
    <Card color="yellow" v-if="data" justified
      ><template #subtop>{{ data.user.name }}</template>
      <div
        class="message fullwidth flex"
        :class="{ you: message.you }"
        v-for="(message, index) of data.messages"
        :key="index"
      >
        <div
          v-if="!message.you"
          class="tiz-portrait"
          :style="{ background: hashColor(data.user.name) }"
        >
          <Tiz
            :avatar="data.user.look.avatar"
            :emote="data.user.look.emote"
            :hat="data.user.look.hat"
            :body="data.user.look.body"
            :shoe="data.user.look.shoe"
            :item0="data.user.look.item0"
            :item1="data.user.look.item1"
            :item2="data.user.look.item2"
          />
        </div>
        <div
          class="flex col message-content"
          style="
            justify-content: space-evenly;
            padding: 6px;
            width: calc(100% - 50px);
          "
        >
          <div>
            <h3
              ><user :user="data.user" />&nbsp;<span
                style="float: right; font-weight: normal; font-size: 12px"
                >{{ formatDate(message.date) }}</span
              ></h3
            ></div
          >
          <span class="content">{{ message.content }}</span>
        </div>
      </div>
      <form @submit.prevent="search()" class="flex fullwidth"
        ><input
          required
          minlength="3"
          maxlength="15"
          name="message"
          type="text"
          class="btn-md"
          :placeholder="$t('placeholder.message')"
        /><button
          type="submit"
          class="btn-md"
          style="font-family: 'Chimboz Heavy'"
          >➤</button
        ></form
      >
    </Card>
    <template #right-column
      ><Card color="yellow" v-if="data" justified
        ><template #subtop>Messagerie</template>
        <div
          class="fullwidth flex"
          style="flex-wrap: wrap; justify-content: center"
        >
          <router-link
            class="message flex"
            v-for="user of data.recent"
            :key="user.id"
            :to="'/messenger/' + user.id"
          >
            <div
              class="tiz-portrait"
              :style="{ background: hashColor(user.name) }"
            >
              <Tiz
                :avatar="user.look.avatar"
                :emote="user.look.emote"
                :hat="user.look.hat"
                :body="user.look.body"
                :shoe="user.look.shoe"
                :item0="user.look.item0"
                :item1="user.look.item1"
                :item2="user.look.item2"
              />
            </div>
          </router-link>
        </div>
      </Card>
    </template>
  </Container>
</template>
<script>
import User from "../../component/link/User.vue";
import Tiz from "../../component/Tiz.vue";
import { formatDistanceToNow } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Conversation",
  components: { User, Tiz },
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
      vm.api.get("/api/conversation.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/conversation.json");
    this.data = req.data;
    next();
  }
};
</script>
<style lang="scss">
.subtop svg {
  transform: translateX(0) !important;
}
</style>
<style lang="scss" scoped>
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
  padding: 6px;
  background: #fff;
  border-radius: 99px;
  box-shadow: 0 1px 1px 1px #0005;
}

.message .message-content {
  align-items: flex-start;
}

.message.you .message-content {
  align-items: flex-end;
  width: 100% !important;
}
</style>
