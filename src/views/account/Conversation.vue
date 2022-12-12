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
      ><template #subtop>{{ data.user.name }}</template>
      <ScrollableContainer
        route="messages"
        class="messages fullwidth flex"
        :maxHeight="450"
        @scroll-data="(results: any[]) => (data = [...data, ...results])"
      >
        <div
          class="message flex"
          :class="{ you: message.you }"
          v-for="(message, index) of data.messages.slice().reverse()"
          :key="index"
        >
          <div
            v-if="!message.you"
            class="tiz-portrait"
            :style="{ background: hashColor(data.user.name) }"
          >
            <GlobalAvatar
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
              <h3>
                <UserLink v-if="!message.you" :user="data.user" />&nbsp;<span
                  style="font-weight: normal; font-size: 11px"
                  >{{ formatDate(message.date) }}</span
                >
              </h3>
            </div>
            <span
              class="content"
              v-html="messageRender(message.content)"
              :style="{ background: hashColor(data.user.name) }"
            ></span>
          </div>
        </div>
      </ScrollableContainer>
      <form @submit.prevent="send" class="flex fullwidth">
        <input
          required
          minlength="1"
          name="message"
          type="text"
          class="btn-md"
          v-model="message"
          :placeholder="$t('placeholder.message')"
        /><button type="submit" class="btn-action">➤</button>
      </form>
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="yellow" v-if="data" justified header="mi_sm.svg">
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
              <GlobalAvatar
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
      </GlobalCard>
    </template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import ScrollableContainer from "@/components/core/ScrollableContainer.vue";
import messageRender from "@/modules/messageRender";
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
const locales = { fr, enGB };

// @vuese
// @group View/Account
// Conversation page (view for 1-to-1 messaging)

const data: any = ref(undefined);
const message = ref("");

function formatDate(date: number) {
  return formatDistanceToNowStrict(new Date(date), {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
    addSuffix: true,
  });
}
function hashColor(str: string) {
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
}
function send() {
  console.log("Envoyé " + message);
  data.messages.push({
    you: true,
    content: message,
    date: Date.now(),
  });
  message.value = "";
}

// /api/conversation.json
// meta title section.conversation
</script>

<style lang="scss" scoped>
.messages {
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
  padding: var(--gap) var(--gap) 6px var(--gap);
  background: var(--light);
  color: var(--light);
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
  background: var(--light) !important;
  mix-blend-mode: unset;
  color: var(--text);
}
</style>
