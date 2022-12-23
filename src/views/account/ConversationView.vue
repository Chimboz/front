<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard v-if="data" color="yellow" justified
      ><template #subtop>{{ data.user.name }}</template>
      <ScrollableContainer
        route="messages"
        class="messages fullwidth flex"
        :max-height="450"
        @scroll-data="(results: any[]) => (data = [...data, ...results])"
      >
        <div
          v-for="(message, index) of data.messages.slice().reverse()"
          :key="index"
          class="message flex"
          :class="{ you: message.you }"
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
                  >{{ distanceToNow(message.date) }}</span
                >
              </h3>
            </div>
            <span
              class="content"
              :style="{ background: hashColor(data.user.name) }"
              v-html="messageRender(message.content)"
            ></span>
          </div>
        </div>
      </ScrollableContainer>
      <form class="flex fullwidth" @submit.prevent="send">
        <input
          v-model="message"
          required
          minlength="1"
          name="message"
          type="text"
          class="btn-md"
          aria-label="Message"
          :placeholder="$t('placeholder.message')"
        /><button type="submit" class="btn-action">➤</button>
      </form>
    </GlobalCard>
    <template #right-column
      ><GlobalCard v-if="data" color="yellow" justified header="mi_sm.svg">
        <div
          class="fullwidth flex"
          style="flex-wrap: wrap; justify-content: center"
        >
          <router-link
            v-for="user of data.recent"
            :key="user.id"
            class="message flex"
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
import ScrollableContainer from "@/components/core/ScrollableContainerComponent.vue";
import api from "@/modules/api";
import messageRender from "@/modules/messageRender";
import { fetchData, hashColor } from "@/utils";
import { distanceToNow } from "@/utils/date";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useMeta } from "vue-meta";

const data: any = ref(undefined);
const message = ref("");

function send() {
  console.log(`Envoyé ${message.value}`);
  data.value.messages.push({
    you: true,
    content: message,
    date: Date.now(),
  });
  message.value = "";
}

fetchData(async () => {
  // data.value = (await api.get("mi/${useRoute().params.id}")).data;
  // TODO remove
  data.value = (await api.get("http://localhost:5173/api/mi5.json")).data;
});

// /api/conversation.json
useMeta({ title: "section.conversation" });
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
