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
    <GlobalCard v-if="data" color="yellow" justified header="mi.svg">
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
          aria-label="Username"
          :placeholder="$t('placeholder.username')"
        /><button type="button" class="btn-action">go</button>
      </div>
      <ScrollableContainer
        class="fullwidth"
        route="messages"
        :max-height="450"
        @scroll-data="(results: any[]) => (data = [...data, ...results])"
      >
        <router-link
          v-for="message of data"
          :key="message.user.id"
          class="message flex"
          :to="'/messenger/' + message.user.id"
          :class="{ active: message.new }"
        >
          <div
            class="tiz-portrait"
            :style="{ background: hashColor(message.user.name) }"
          >
            <GlobalAvatar
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
              <h3>
                <UserLink :user="message.user" /><span
                  style="
                    float: right;
                    font-weight: normal;
                    font-size: var(--font-size);
                  "
                  >{{ distanceToNow(message.date) }}</span
                >
              </h3>
            </div>
            <span>{{ message.content.slice(0, 64) }}</span>
          </div>
        </router-link>
      </ScrollableContainer>
    </GlobalCard>
    <template #right-column></template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import api from "@/modules/api";
import { fetchData, hashColor } from "@/utils";
import { distanceToNow } from "@/utils/date";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useHead } from "@vueuse/head";
import ScrollableContainer from "../../components/core/ScrollableContainerComponent.vue";

const data = ref<any>(undefined);

fetchData(async () => {
  // data.value = (await useFetch("mi")).data;
  // TODO remove
  data.value = (await useFetch(`${useNuxtApp().ssrContext.event.node.req.headers.origin}/api/mi.json`)).data;
});

// /api/messenger.json
useHead({ title: "section.messenger" });
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.message {
  text-decoration: none;
  color: var(--text);
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
  background: var(--selected-dark-card);
}

.active {
  background: var(--selected-dark-card);
}
</style>
